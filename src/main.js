import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ETAPAS, HUB } from './etapas/index.js';
import { figure } from './lib/helpers.js';
import { ESPECIALES } from './lib/especiales.js';
import { jugarPrograma, FORMATOS } from './juego/juego.js';
import { PRUEBAS } from './juego/pruebas.js';
import { jugarFinal } from './juego/final.js';
import { UI } from './juego/motor.js';
import { hud, HUD_CSS, estiloDe } from './juego/grafismos.js';
{ const st = document.createElement('style'); st.textContent = HUD_CSS; document.head.appendChild(st); }
import { jugarHistoria } from './juego/historia.js';
import { recursoEpoca, guardarSubido, quitarSubido, sfx, audioCtx, findAudioFile } from './lib/media.js';
import { programarAudioRespaldo } from './cabeceras/telecinco.js';

const params = new URLSearchParams(location.search);
const $ = (id) => document.getElementById(id);
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: params.has('capture') });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
$('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 200);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495; controls.minDistance = 2; controls.maxDistance = 45;

// Postproceso: saneado de valores (evita NaN/infinito que ennegrecen el brillo) + bloom
const SanitizeShader = {
  uniforms: { tDiffuse: { value: null } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: 'uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = clamp(c, 0.0, 30.0); }',
};
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new ShaderPass(SanitizeShader));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.32, 0.4, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());
let bloomOn = !params.has('nobloom');

const ctx = { screenMode: 'rosco', onRosco: null, logoPantalla: null };
let etapa = null, etapaDef = null;
let sonidoActivo = false;
ctx.onRosco = (st) => { if (sonidoActivo) sfx(st === 'ok' ? 'acierto' : st === 'ko' ? 'fallo' : 'pasapalabra'); };

async function cargarLogoPantalla(def) {
  const r = await recursoEpoca('logo', def);
  if (!r) { ctx.logoPantalla = null; return; }
  const img = new Image(); img.src = r.url; ctx.logoPantalla = img;
}

const TODAS = [...ETAPAS, HUB];
ctx.platos = ETAPAS.map(e => ({ id: e.id, nombre: e.nombre, anios: e.anios, color: e.color }));
ctx.especial = 'normal';
function cargarEtapa(id, { conCabecera = true, camara = 'general' } = {}) {
  const def = TODAS.find(e => e.id === id);
  if (!def || !def.modulo) return;
  if (etapa) etapa.dispose();
  if (presentador3D) { scene.remove(presentador3D); presentador3D = null; }
  etapaDef = def;
  if (!def.especiales) ctx.especial = 'normal';
  etapa = def.modulo.build(scene, ctx);
  cargarLogoPantalla(def);
  document.querySelectorAll('#epocas button').forEach(b => b.classList.toggle('activa', b.dataset.id === id));
  pintarCamaras(); pintarEspeciales();
  irACamara(def.modulo.cameras[camara] ? camara : 'general', true);
  $('btnJugar').disabled = !FORMATOS[id];
  if (def.cabecera && conCabecera) reproducirCabecera(def);
}
function pintarCamaras() {
  const c = $('camaras'); c.innerHTML = '';
  for (const [k, v] of Object.entries(etapaDef.modulo.cameras)) {
    const b = document.createElement('button'); b.dataset.cam = k; b.textContent = v.label || k; b.onclick = () => irACamara(k); c.appendChild(b);
  }
  if (!etapaDef.hub) { const b = document.createElement('button'); b.textContent = '🏢 Estudios Grok Bot'; b.onclick = () => cargarEtapa('estudios', { camara: 'pasillo' }); c.appendChild(b); }
}
function pintarEspeciales() {
  const sel = $('selEspecial'); sel.style.display = etapaDef.especiales ? '' : 'none';
  sel.innerHTML = Object.entries(ESPECIALES).map(([k, v]) => `<option value="${k}" ${k === ctx.especial ? 'selected' : ''}>${v.nombre}</option>`).join('');
}

// ---------- Presentador virtual 3D (modo historia) ----------
let presentador3D = null;
function ponerPresentador(P, spot) {
  if (presentador3D) { scene.remove(presentador3D); presentador3D = null; }
  if (!P) return;
  presentador3D = figure({ body: P.traje, legs: 0x1a1a22, hair: 0x2a1a10, scale: 1.05 });
  const [px, py, pz] = spot ? spot.pres : [controls.target.x, 0, controls.target.z];
  presentador3D.position.set(px, py, pz);
  if (spot) { if (paseo) salirPaseo(); tween = null; camera.position.set(...spot.cam); controls.target.set(...spot.tgt); controls.update(); }
  presentador3D.lookAt(camera.position.x, py, camera.position.z);
  scene.add(presentador3D);
  // gesto: balanceo suave mientras habla
  presentador3D.userData.t0 = performance.now();
}

// ---------- Cámaras ----------
let tween = null; let currentCam = 'general';
function irACamara(nombre, inmediato = false) {
  const cam = etapaDef.modulo.cameras[nombre]; if (!cam) return;
  if (paseo) salirPaseo();
  if (cam.mode) etapa.setMode(cam.mode);
  const toPos = new THREE.Vector3(...cam.pos), toTgt = new THREE.Vector3(...cam.target);
  currentCam = nombre;
  document.querySelectorAll('#camaras button').forEach(b => b.classList.toggle('activa', b.dataset.cam === nombre));
  if (inmediato) { camera.position.copy(toPos); controls.target.copy(toTgt); controls.update(); tween = null; return; }
  tween = { t: 0, dur: 1.6, fromPos: camera.position.clone(), fromTgt: controls.target.clone(), toPos, toTgt };
}

// ---------- Cabecera (intro) ----------
let cab = null; // { def, inst, start, audio, fixedT }
async function reproducirCabecera(def, fixedT = null) {
  pararCabecera();
  const logo = await recursoEpoca('logo', def);
  const musica = fixedT == null ? await recursoEpoca('musica', def) : null;
  const inst = def.cabecera.crearCabecera(renderer, { logoUrl: logo ? logo.url : null });
  inst.resize(innerWidth, innerHeight);
  cab = { def, inst, start: performance.now() / 1000, audio: null, fixedT, srcNode: null };
  document.body.classList.add('en-cabecera');
  if (fixedT == null) {
    if (musica) {
      cab.audio = new Audio(musica.url); cab.audio.play().catch(() => {});
    } else {
      try { const c = audioCtx(); const g = c.createGain(); g.connect(c.destination); cab.gain = g; (def.cabecera.programarAudioRespaldo || programarAudioRespaldo)(c, g, c.currentTime + 0.05); } catch (e) { /* sin audio */ }
    }
  }
}
function pararCabecera() {
  if (!cab) return;
  if (cab.audio) { const a = cab.audio; let v = 1; const iv = setInterval(() => { v -= 0.1; a.volume = Math.max(0, v); if (v <= 0) { a.pause(); clearInterval(iv); } }, 80); }
  if (cab.gain) { const c = audioCtx(); cab.gain.gain.setTargetAtTime(0, c.currentTime, 0.3); setTimeout(() => cab?.gain?.disconnect?.(), 2500); }
  cab.inst.dispose(); cab = null;
  document.body.classList.remove('en-cabecera');
  $('fx-flash').style.opacity = 0; $('fx-streak').style.opacity = 0;
  $('fx-fade').style.opacity = 1; $('fx-fade').classList.add('saliendo');
  setTimeout(() => { $('fx-fade').style.opacity = 0; }, 30);
}
window.__renderCabecera = (id, t) => { // para capturas/vídeo deterministas
  const def = ETAPAS.find(e => e.id === id);
  if (!cab || cab.def !== def) return reproducirCabecera(def, t).then(() => window.__renderCabecera(id, t));
  cab.fixedT = t; renderCab(t); return Promise.resolve(true);
};
function renderCab(t) {
  cab.inst.render(t);
  const o = cab.inst.overlay(t);
  $('fx-streak').style.opacity = o.streak; $('fx-flash').style.opacity = o.flash;
  $('fx-fade').classList.remove('saliendo'); $('fx-fade').style.opacity = o.fade;
}

// ---------- UI ----------
function aviso(txt) { const a = $('aviso'); a.textContent = txt; a.classList.add('visible'); clearTimeout(aviso.t); aviso.t = setTimeout(() => a.classList.remove('visible'), 5000); }
ETAPAS.forEach(e => {
  const b = document.createElement('button');
  b.dataset.id = e.id;
  b.innerHTML = `<strong>${e.nombre}</strong><span>${e.anios}</span>${e.cabecera ? '<em>con cabecera</em>' : ''}`;
  b.onclick = () => cargarEtapa(e.id);
  $('epocas').appendChild(b);
});
$('btnModo').onclick = () => { etapa.setMode(etapa.getMode() === 'rosco' ? 'pruebas' : 'rosco'); };
function actualizarModo() { if (!etapa.getMode) return; $('btnModo').textContent = etapa.getMode() === 'rosco' ? '🎙️ Ver mesa de pruebas' : '🔴🔵 Ver atril del rosco'; }
$('btnRosco').onclick = (ev) => {
  sonidoActivo = true; audioCtx();
  if (etapa.getMode() !== 'rosco') etapa.setMode('rosco');
  if (!etapa.rosco) return;
  const on = etapa.rosco.toggle(); ev.target.textContent = on ? '⏹️ Parar rosco' : '▶️ Simular rosco';
  if (on) sfx('rosco');
};
$('btnBloom').onclick = (ev) => { bloomOn = !bloomOn; ev.target.textContent = bloomOn ? '✨ Brillo: sí' : '✨ Brillo: no'; };
$('btnUI').onclick = () => document.body.classList.toggle('sin-ui');
$('btnCabecera').onclick = () => { const d = etapaDef && etapaDef.cabecera ? etapaDef : ETAPAS.find(e => e.cabecera); reproducirCabecera(d); };
$('selEspecial').onchange = (ev) => { ctx.especial = ev.target.value; const cam = currentCam; cargarEtapa(etapaDef.id, { conCabecera: false, camara: cam }); };
$('btnJugar').onclick = async () => {
  if (!FORMATOS[etapaDef.id]) return;
  sonidoActivo = true; audioCtx(); document.body.classList.add('jugando');
  try { await jugarPrograma($('juego'), etapaDef, { especial: ctx.especial, onCamara: (c) => irACamara(c) }); } finally { document.body.classList.remove('jugando'); }
};
$('btnHistoria').onclick = async () => {
  document.body.classList.add('jugando'); audioCtx();
  try { await jugarHistoria($('historia'), { cargar: async (id) => { if (!etapaDef || etapaDef.id !== id) cargarEtapa(id, { conCabecera: false }); }, camara: (c) => irACamara(c, true), presentador: ponerPresentador }); }
  finally { document.body.classList.remove('jugando'); }
};
$('btnPaseo').onclick = () => (paseo ? salirPaseo() : entrarPaseo());

// ---------- Clic en puertas / portales ----------
const ray = new THREE.Raycaster(), ptr = new THREE.Vector2(); let downXY = null;
renderer.domElement.addEventListener('pointerdown', e => { downXY = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', e => {
  if (!downXY || Math.hypot(e.clientX - downXY[0], e.clientY - downXY[1]) > 5 || !etapa) return;
  ptr.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ptr, camera);
  const hit = ray.intersectObjects(etapa.clickables || [], true)[0]; if (!hit) return;
  const ud = hit.object.userData;
  if (ud.destino) { aviso('Entrando al plató…'); cargarEtapa(ud.destino); }
  else if (ud.salida) { aviso('Saliendo a los Estudios Grok Bot…'); cargarEtapa('estudios', { camara: 'pasillo' }); }
});

// ---------- Paseo en primera persona (WASD + arrastrar para mirar) ----------
let paseo = false; const teclas = {}; let yaw = 0, pitch = 0;
function entrarPaseo() {
  paseo = true; controls.enabled = false; tween = null;
  const d = new THREE.Vector3().subVectors(controls.target, camera.position); yaw = Math.atan2(-d.x, -d.z); pitch = 0;
  camera.position.y = 1.7; $('btnPaseo').textContent = '🚶 Salir del paseo'; aviso('Paseo: W A S D (o flechas) para moverte, arrastra para mirar, Mayús para correr.');
}
function salirPaseo() {
  paseo = false; controls.enabled = true; $('btnPaseo').textContent = '🚶 Paseo (WASD)';
  const f = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw)); controls.target.copy(camera.position).addScaledVector(f, 4); controls.update();
}
addEventListener('keydown', e => { if (e.target.tagName === 'INPUT') return; teclas[e.code] = true; });
addEventListener('keyup', e => { teclas[e.code] = false; });
let arrastre = null;
renderer.domElement.addEventListener('pointerdown', e => { if (paseo) arrastre = [e.clientX, e.clientY]; });
addEventListener('pointerup', () => { arrastre = null; });
addEventListener('pointermove', e => { if (!paseo || !arrastre) return; yaw -= (e.clientX - arrastre[0]) * 0.004; pitch = Math.max(-1.2, Math.min(1.2, pitch - (e.clientY - arrastre[1]) * 0.004)); arrastre = [e.clientX, e.clientY]; });
function pasoPaseo(dt) {
  const v = (teclas.ShiftLeft || teclas.ShiftRight ? 9 : 4) * dt;
  const f = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw)), r = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
  if (teclas.KeyW || teclas.ArrowUp) camera.position.addScaledVector(f, v);
  if (teclas.KeyS || teclas.ArrowDown) camera.position.addScaledVector(f, -v);
  if (teclas.KeyA || teclas.ArrowLeft) camera.position.addScaledVector(r, -v);
  if (teclas.KeyD || teclas.ArrowRight) camera.position.addScaledVector(r, v);
  camera.position.y = 1.7;
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
}

$('btnSaltar').onclick = () => pararCabecera();
$('btnMedios').onclick = () => $('medios').classList.toggle('abierto');

// Panel "Música y logo de cabecera" por época (subidas guardadas en IndexedDB)
async function pintarMedios() {
  const cont = $('medios-lista'); cont.innerHTML = '';
  for (const e of ETAPAS) {
    const fila = document.createElement('div'); fila.className = 'fila-medio';
    const [mu, lo] = await Promise.all([recursoEpoca('musica', e), recursoEpoca('logo', e)]);
    const desc = (r) => !r ? '<i>respaldo</i>' : r.origen === 'subido' ? `subido: ${r.nombre}` : `carpeta: ${r.nombre.split('/').pop()}`;
    fila.innerHTML = `<b>${e.nombre} ${e.anios}</b>
      <div>🎵 Música: <span>${desc(mu)}</span></div>
      <div class="bts">
        <label class="bt">Subir música de cabecera<input type="file" accept="audio/*" data-t="musica"></label>
        ${mu && mu.origen === 'subido' ? '<button data-q="musica">Quitar música</button>' : ''}
      </div>
      <div>🖼️ Logo: <span>${desc(lo)}</span></div>
      <div class="bts">
        <label class="bt">Subir logo<input type="file" accept="image/*" data-t="logo"></label>
        ${lo && lo.origen === 'subido' ? '<button data-q="logo">Quitar logo</button>' : ''}
        ${e.cabecera ? '<button data-ver="1">▶️ Ver cabecera</button>' : ''}
      </div>`;
    fila.querySelectorAll('input[type=file]').forEach(inp => inp.onchange = async () => {
      const f = inp.files[0]; if (!f) return;
      await guardarSubido(inp.dataset.t, e.id, f); aviso(`Guardado "${f.name}" para ${e.nombre} ${e.anios}`);
      if (inp.dataset.t === 'logo' && etapaDef === e) cargarLogoPantalla(e);
      pintarMedios();
    });
    fila.querySelectorAll('button[data-q]').forEach(b => b.onclick = async () => {
      await quitarSubido(b.dataset.q, e.id); if (b.dataset.q === 'logo' && etapaDef === e) cargarLogoPantalla(e); pintarMedios();
    });
    const ver = fila.querySelector('button[data-ver]'); if (ver) ver.onclick = () => reproducirCabecera(e);
    cont.appendChild(fila);
  }
}
pintarMedios();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight);
  if (cab) cab.inst.resize(innerWidth, innerHeight);
});

// ---------- Bucle ----------
const clock = new THREE.Clock();
let elapsed = 0;
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); elapsed += dt;
  if (cab) {
    if (cab.fixedT != null) return; // modo captura: se renderiza bajo demanda
    const t = performance.now() / 1000 - cab.start;
    if (t >= cab.def.cabecera.DURACION) { pararCabecera(); }
    else { renderCab(t); return; }
  }
  if (tween) {
    tween.t += dt / tween.dur; const k = tween.t >= 1 ? 1 : 1 - Math.pow(1 - tween.t, 3);
    camera.position.lerpVectors(tween.fromPos, tween.toPos, k);
    controls.target.lerpVectors(tween.fromTgt, tween.toTgt, k);
    if (tween.t >= 1) tween = null;
  }
  if (paseo) pasoPaseo(dt); else controls.update();
  if (presentador3D) presentador3D.rotation.z = Math.sin(elapsed * 2.2) * 0.03;
  if (etapa) { etapa.update(elapsed, dt); actualizarModo(); }
  if (bloomOn) composer.render(); else renderer.render(scene, camera);
}
renderer.setAnimationLoop(frame);

cargarEtapa(params.get('plato') || ETAPAS[0].id, { conCabecera: false });
if (params.get('especial')) { ctx.especial = params.get('especial'); cargarEtapa(etapaDef.id, { conCabecera: false }); }
if (params.get('cam')) irACamara(params.get('cam'), true);
if (params.has('rosco')) etapa.rosco.toggle();
$('cargando').remove();
window.__juego = { PRUEBAS, jugarFinal, UI, FORMATOS, hud, estiloDe }; // para pruebas automáticas
window.__audioRespaldoWav = async (secs = 16.5, id = 'telecinco-2007') => { // exporta la banda de respaldo a WAV (para el MP4)
  const sr = 44100, oc = new OfflineAudioContext(2, sr * secs, sr);
  const cabDef = (ETAPAS.find(e => e.id === id) || {}).cabecera;
  ((cabDef && cabDef.programarAudioRespaldo) || programarAudioRespaldo)(oc, oc.destination, 0.0);
  const buf = await oc.startRendering();
  const n = buf.length, L = buf.getChannelData(0), R = buf.getChannelData(1);
  const ab = new ArrayBuffer(44 + n * 4), dv = new DataView(ab);
  const ws = (o, str) => { for (let i = 0; i < str.length; i++) dv.setUint8(o + i, str.charCodeAt(i)); };
  ws(0, 'RIFF'); dv.setUint32(4, 36 + n * 4, true); ws(8, 'WAVE'); ws(12, 'fmt '); dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true); dv.setUint16(22, 2, true); dv.setUint32(24, sr, true); dv.setUint32(28, sr * 4, true);
  dv.setUint16(32, 4, true); dv.setUint16(34, 16, true); ws(36, 'data'); dv.setUint32(40, n * 4, true);
  for (let i = 0, o = 44; i < n; i++, o += 4) {
    dv.setInt16(o, Math.max(-1, Math.min(1, L[i])) * 32767, true); dv.setInt16(o + 2, Math.max(-1, Math.min(1, R[i])) * 32767, true);
  }
  let bin = ''; const u8 = new Uint8Array(ab);
  for (let i = 0; i < u8.length; i += 0x8000) bin += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  return btoa(bin);
};
window.__plato = { scene, camera, renderer, etapa: () => etapa, ok: true, findAudioFile };
