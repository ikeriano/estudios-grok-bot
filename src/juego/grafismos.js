// Grafismos (HUD 2D sobre el 3D) de cada época. Diseño propio inspirado en la disposición,
// formas y colores de los rótulos del programa, sin logos ni recursos gráficos reales.
// Los concursantes son los avatares virtuales del juego, retratados con una cámara 3D.
import * as THREE from 'three';
import { figure, ROSCO_LETRAS } from '../lib/helpers.js';

export const estiloDe = id => ({ 'antena3-2000': 'arena', 'telecinco-2007': 't5', 'telecinco-2018': 'azul', 'antena3-2020': 'azul', 'rueda-letra': 'rueda' }[id] || 'azul');
const COL = { arena: ['#f07a10', '#2a6fe0'], t5: ['#ff7a00', '#1f5fe0'], azul: ['#ff8a00', '#1a64f0'], rueda: ['#9b3ee0', '#1f8bff'] };
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- Retratos de los avatares (render 3D offscreen, cacheado) ----------
let pr = null; const cacheRetratos = {};
export function retrato({ body = 0x3355aa, hair = 0x2a1a10, skin = 0xc8a07a, fondo = ['#1a3aa0', '#4f8cff'] } = {}) {
  const key = [body, hair, skin, ...fondo].join('-'); if (cacheRetratos[key]) return cacheRetratos[key];
  try {
    if (!pr) {
      const canvas = document.createElement('canvas'); canvas.width = 480; canvas.height = 400;
      const r = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, alpha: false });
      r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping;
      const cam = new THREE.PerspectiveCamera(30, 480 / 400, 0.1, 50); cam.position.set(0, 1.42, 2.1); cam.lookAt(0, 1.3, 0);
      pr = { r, cam };
    }
    const scene = new THREE.Scene();
    // fondo de plató desenfocado (bokeh) con los colores de la época
    const c = document.createElement('canvas'); c.width = 256; c.height = 256; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, fondo[1]); gr.addColorStop(1, fondo[0]); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 26; i++) { const x = Math.random() * 256, y = Math.random() * 180, rr = 6 + Math.random() * 22; const rg = g.createRadialGradient(x, y, 0, x, y, rr); rg.addColorStop(0, 'rgba(255,255,255,0.35)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.beginPath(); g.arc(x, y, rr, 0, 7); g.fill(); }
    const bt = new THREE.CanvasTexture(c); bt.colorSpace = THREE.SRGBColorSpace; scene.background = bt;
    scene.add(new THREE.HemisphereLight(0xffffff, 0x404060, 1.4));
    const k = new THREE.DirectionalLight(0xffffff, 2.2); k.position.set(1.5, 2.5, 3); scene.add(k);
    const f = figure({ body, hair, skin }); scene.add(f);
    // retrato de busto: hombros más anchos y brazos pegados
    f.children[0].scale.set(1.45, 1, 0.8); f.children[3].visible = f.children[4].visible = false;
    const cuello = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.12, 12), new THREE.MeshStandardMaterial({ color: skin })); cuello.position.set(0, 1.36, 0); scene.add(cuello);
    // rasgos sencillos (personaje original): ojos y sonrisa
    const ojoM = new THREE.MeshStandardMaterial({ color: 0x1a1410 });
    for (const x of [-0.045, 0.045]) { const o = new THREE.Mesh(new THREE.SphereGeometry(0.016, 10, 8), ojoM); o.position.set(x, 1.52, 0.122); scene.add(o); }
    const boca = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.007, 6, 16, Math.PI), new THREE.MeshStandardMaterial({ color: 0x7a2a2a })); boca.rotation.z = Math.PI; boca.position.set(0, 1.465, 0.124); scene.add(boca);
    pr.r.render(scene, pr.cam);
    const url = pr.r.domElement.toDataURL('image/jpeg', 0.88);
    scene.traverse(o => { if (o.geometry) o.geometry.dispose(); }); bt.dispose();
    return (cacheRetratos[key] = url);
  } catch (e) { return ''; }
}

// ---------- piezas SVG ----------
const melones = (color) => {
  const plata = color === 'plata'; const c1 = plata ? '#f4f6fa' : color === 'rojo' ? '#ff5050' : '#5aa0ff', c2 = plata ? '#8a92a0' : color === 'rojo' ? '#9a0a0a' : '#0a2a9a';
  const id = 'm' + color + Math.random().toString(36).slice(2, 6);
  return `<svg viewBox="0 0 200 110" class="hud-pulsador"><defs><radialGradient id="${id}" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff"/><stop offset="0.25" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient></defs>
    <rect x="20" y="88" width="160" height="18" rx="6" fill="#2a2e38"/><ellipse cx="62" cy="70" rx="48" ry="40" fill="url(#${id})"/><ellipse cx="138" cy="70" rx="48" ry="40" fill="url(#${id})"/></svg>`;
};
const bombilla = (color) => {
  const c1 = color === 'rojo' ? '#ff6a6a' : '#6aa8ff', c2 = color === 'rojo' ? '#b00010' : '#0a2aa0'; const id = 'b' + color + Math.random().toString(36).slice(2, 6);
  return `<svg viewBox="0 0 120 170" class="hud-pulsador bombilla"><defs><radialGradient id="${id}" cx="38%" cy="32%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="0.3" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient></defs>
    <path d="M60 6 C26 6 8 32 8 58 C8 82 26 96 34 112 L86 112 C94 96 112 82 112 58 C112 32 94 6 60 6 Z" fill="url(#${id})" stroke="rgba(255,255,255,.5)" stroke-width="2"/>
    <rect x="34" y="114" width="52" height="10" rx="3" fill="#cfd4dc"/><rect x="36" y="126" width="48" height="10" rx="3" fill="#aab0ba"/><rect x="38" y="138" width="44" height="10" rx="3" fill="#cfd4dc"/><rect x="26" y="150" width="68" height="16" rx="5" fill="#8a909a"/></svg>`;
};

// ---------- HUD ----------
class HUD {
  constructor() {
    this.el = document.getElementById('hud');
    if (!this.el) { this.el = document.createElement('div'); this.el.id = 'hud'; document.body.appendChild(this.el); }
    this.modo = null; this.estilo = 'azul';
  }
  set(estilo) { this.estilo = estilo || 'azul'; }
  limpiar() { this.el.innerHTML = ''; this.el.className = ''; this.modo = null; document.body.classList.remove('hud-split'); }
  _fondo(lado) { const c = COL[this.estilo][lado]; return lado ? ['#0a2a8a', '#3f7dff'] : this.estilo === 'rueda' ? ['#3a0a6a', '#a050e0'] : ['#8a3a00', '#ffa040']; }
  _retratoLado(G, lado) {
    const e = G.equipos[lado];
    const est = lado ? { body: 0x1f5fe0, hair: 0x3a2412 } : { body: this.estilo === 'rueda' ? 0x8a3ad0 : 0xff7a1a, hair: 0x2a1a10 };
    return retrato({ ...est, fondo: this._fondo(lado) });
  }
  _badge(lado, nombre) { return `<div class="hud-badge l${lado}">${esc(nombre)}</div>`; }

  /** Bote acumulado: rótulo amarillo y cifra dorada con relieve */
  async bote(cantidad, ms = 3200) {
    this.el.className = 'hud-' + this.estilo;
    this.el.innerHTML = `<div class="hud-bote"><div class="hud-bote-r">BOTE ACUMULADO</div><div class="hud-bote-n">${cantidad.toLocaleString('es-ES')} €</div></div>`;
    await new Promise(r => setTimeout(r, ms)); if (!this.modo) this.el.innerHTML = '';
  }

  /** Pantalla partida de duelo (El pulsador / La pista musical / Cantando espero) */
  duelo(G, { texto = '', pista = null, activo = null, ecualizador = false, nombres = ['TÚ', 'RIVAL'], marcadores = null } = {}) {
    this.modo = 'duelo'; document.body.classList.add('hud-split');
    const st = this.estilo; this.el.className = 'hud-' + st + ' hud-duelo';
    const mk = marcadores || [G.equipos[0].seg, G.equipos[1].seg];
    const puls = lado => st === 'arena' ? melones('plata') : st === 't5' ? melones(lado ? 'azul' : 'rojo') : bombilla(lado ? 'azul' : 'rojo');
    const lado = l => `<div class="hud-cam l${l} ${activo === l ? 'activo' : ''}"><img src="${this._retratoLado(G, l)}" alt="">${this._badge(l, nombres[l])}<div class="hud-puls-w">${puls(l)}</div>
      ${st === 'azul' || st === 'rueda' ? `<div class="hud-marc-c l${l}"><span>${mk[l]}</span></div>` : ''}</div>`;
    let centro = '';
    if (st === 'azul' || st === 'rueda') centro = `<div class="hud-pista ${ecualizador ? 'eq' : ''}">${ecualizador ? '<i class="eqL"><b></b><b></b><b></b><b></b><b></b></i><i class="eqR"><b></b><b></b><b></b><b></b><b></b></i>' : ''}<span>${pista ?? ''}</span></div>${texto ? `<div class="hud-texto-azul">${esc(texto)}</div>` : ''}`;
    else centro = `<div class="hud-barra"><div class="hud-mk l0">${mk[0]}</div><div class="hud-franja">${esc(String(texto).toUpperCase())}${pista ? ` <small>· PISTA ${pista}</small>` : ''}</div><div class="hud-mk l1">${mk[1]}</div></div>${st === 'arena' ? '<div class="hud-rotulo-negro">PASAPALABRA</div>' : ''}`;
    this.el.innerHTML = `${st === 'arena' ? '<div class="hud-arena-marco"></div>' : ''}<div class="hud-split-w">${lado(0)}${lado(1)}</div>${centro}`;
  }

  /** Rosco a pantalla partida */
  rosco(G, est, turno, { nombres = ['TÚ', 'RIVAL'] } = {}) {
    this.modo = 'rosco'; document.body.classList.add('hud-split');
    const st = this.estilo; this.el.className = 'hud-' + st + ' hud-rosco';
    const lado = (l, s) => {
      const n = s.set.length;
      const bolas = s.set.map((it, i) => { const a = -Math.PI / 2 + i / n * Math.PI * 2; const cls = s.e[i] === 'ok' ? 'ok' : s.e[i] === 'ko' ? 'ko' : (turno === (l ? 'R' : 'H') && i === s.i) ? 'cur' : '';
        return `<span class="hud-l ${cls}" style="left:${50 + Math.cos(a) * 40}%;top:${52 + Math.sin(a) * 40}%">${esc(it[0])}</span>`; }).join('');
      const ac = s.e.filter(x => x === 'ok').length;
      return `<div class="hud-cam l${l} ${turno === (l ? 'R' : 'H') ? 'activo' : ''}"><img src="${this._retratoLado(G, l)}" alt="">${this._badge(l, nombres[l])}
        <div class="hud-rosco-l">${bolas}</div><div class="hud-tiempo l${l}"><span class="t">${Math.ceil(s.t)}</span><span class="a">${ac}</span></div></div>`;
    };
    this.el.innerHTML = `${st === 'arena' ? '<div class="hud-arena-marco"></div>' : ''}<div class="hud-split-w">${lado(0, est.H)}${lado(1, est.R)}</div>${st === 'arena' ? '<div class="hud-rotulo-negro">PASAPALABRA</div>' : ''}`;
  }
  tiempoRosco(l, t) { const e = this.el.querySelector(`.hud-tiempo.l${l} .t`); if (e) e.textContent = Math.ceil(t); }

  /** ¿Dónde están?: panel 3x3 de cápsulas con números o palabras y círculo de tiempo */
  capsulas(palabras, visibles, tiempo = null, { titulo = '' } = {}) {
    this.modo = 'capsulas'; document.body.classList.remove('hud-split');
    this.el.className = 'hud-' + this.estilo + ' hud-caps';
    this.el.innerHTML = `<div class="hud-caps-w">${palabras.map((w, i) => `<div class="hud-cap ${visibles.has(i) ? '' : 'num'}">${visibles.has(i) ? esc(w) : i + 1}</div>`).join('')}</div>
      ${tiempo != null ? `<div class="hud-caps-t">${Math.ceil(tiempo)}</div>` : ''}${titulo ? `<div class="hud-caps-tit">${esc(titulo)}</div>` : ''}`;
  }
  tiempoCaps(t) { const e = this.el.querySelector('.hud-caps-t'); if (e) e.textContent = Math.ceil(t); }

  /** Rótulo genérico inferior con marcadores de equipo y la pregunta (resto de pruebas) */
  rotulo(G, texto, { titulo = '' } = {}) {
    if (this.modo === 'duelo' || this.modo === 'rosco' || this.modo === 'capsulas') return;
    this.modo = null; const st = this.estilo; this.el.className = 'hud-' + st + ' hud-gen'; document.body.classList.add('hud-split');
    this.el.innerHTML = `<div class="hud-gen-w">${titulo ? `<div class="hud-gen-tit">${esc(titulo)}</div>` : ''}<div class="hud-barra"><div class="hud-mk l0">${G.equipos[0].seg}</div><div class="hud-franja">${esc(String(texto).toUpperCase())}</div><div class="hud-mk l1">${G.equipos[1].seg}</div></div></div>`;
  }
}
let _hud = null;
export const hud = () => (_hud || (_hud = new HUD()));
export const HUD_CSS = `
#hud{position:fixed;inset:0;pointer-events:none;z-index:6;font-family:'Arial Black','Arial',sans-serif}
body.captura #hud{display:block!important}
body.hud-split #juego{top:auto;bottom:1.5vh;transform:translateX(-50%);max-height:31vh;width:min(780px,94vw);background:rgba(4,12,48,.86);padding:8px 14px}
body.hud-split #juego .j-final>div:not(.j-fcentro){display:none}body.hud-split #juego .j-final{grid-template-columns:1fr}
body.hud-split #juego .j-def{font-size:16px;margin:4px 0}body.hud-split #juego .j-reglas{font-size:13px}
.hud-split-w{position:absolute;left:2vw;right:2vw;top:2vh;height:61vh;display:flex;gap:1.2vw}
.hud-cam{flex:1;position:relative;overflow:hidden;background:#000}
.hud-cam img{width:100%;height:100%;object-fit:cover;display:block}
.hud-badge{position:absolute;bottom:22%;width:5.4vw;height:5.4vw;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:.85vw;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.5)}
.hud-badge.l0{right:20%;background:var(--c0)}.hud-badge.l1{left:20%;background:var(--c1)}
.hud-puls-w{position:absolute;left:50%;bottom:2%;transform:translateX(-50%);width:34%}
.hud-pulsador{width:100%;filter:drop-shadow(0 4px 8px rgba(0,0,0,.6))}.hud-pulsador.bombilla{width:58%;margin:0 auto;display:block}
.hud-cam.activo .hud-pulsador{filter:drop-shadow(0 0 18px #fff) brightness(1.35)}
/* ---- estilo azul/naranja redondeado (2018-2026) y Rueda ---- */
.hud-azul,.hud-rueda{--c0:#ff8a00;--c1:#1a64f0}.hud-rueda{--c0:#9b3ee0;--c1:#1f8bff}
.hud-azul .hud-cam,.hud-rueda .hud-cam{border-radius:2.2vw;border:.75vw solid var(--c0);box-shadow:inset 0 0 0 3px rgba(255,255,255,.35),0 6px 24px rgba(0,0,0,.5)}
.hud-azul .hud-cam.l1,.hud-rueda .hud-cam.l1{border-color:var(--c1)}
.hud-marc-c{position:absolute;bottom:14%;width:4.6vw;height:4.6vw;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:2.4vw;color:#222;box-shadow:0 0 0 .5vw var(--c0)}
.hud-marc-c.l0{left:4%}.hud-marc-c.l1{right:4%;box-shadow:0 0 0 .5vw var(--c1)}
.hud-pista{position:absolute;left:50%;top:44vh;transform:translate(-50%,-50%);width:6.5vw;height:6.5vw;border-radius:50%;background:#fff;border:.5vw solid #f0f0f0;display:grid;place-items:center;font-size:3.6vw;color:#222;box-shadow:0 0 0 .4vw #1a64f0,0 6px 18px rgba(0,0,0,.5)}
.hud-pista span{position:relative;z-index:2}
.hud-pista i{position:absolute;top:50%;display:flex;gap:3px;align-items:center;transform:translateY(-50%)}
.hud-pista .eqL{right:100%;margin-right:.4vw;flex-direction:row-reverse}.hud-pista .eqR{left:100%;margin-left:.4vw}
.hud-pista b{display:block;width:.55vw;background:#ffd21a;border-radius:2px;animation:eq .5s ease-in-out infinite alternate}.hud-pista .eqR b{background:#3f8bff}
.hud-pista b:nth-child(2){animation-delay:.1s}.hud-pista b:nth-child(3){animation-delay:.2s}.hud-pista b:nth-child(4){animation-delay:.05s}.hud-pista b:nth-child(5){animation-delay:.15s}
@keyframes eq{from{height:.8vw}to{height:4.5vw}}
.hud-texto-azul{position:absolute;left:50%;top:57vh;transform:translateX(-50%);background:linear-gradient(#2a7bff,#0a3ac0);color:#fff;border:3px solid #fff;border-radius:2vw;padding:.5vw 2vw;font-size:1.3vw;white-space:nowrap;max-width:80vw;overflow:hidden;text-overflow:ellipsis}
/* ---- estilo Telecinco 2007-2018: pantalla partida, franja morada, melones ---- */
.hud-t5{--c0:#ff7a00;--c1:#1f5fe0}
.hud-t5 .hud-cam{border:.45vw solid var(--c0);box-shadow:0 0 0 2px #fff inset}.hud-t5 .hud-cam.l1{border-color:var(--c1)}
.hud-barra{position:absolute;left:4vw;right:4vw;top:55vh;display:flex;align-items:stretch;gap:.8vw;height:4.4vw}
.hud-mk{width:7vw;display:grid;place-items:center;color:#fff;font-size:2.2vw;border:3px solid #fff;background:linear-gradient(#ffa040,#e05a00)}
.hud-mk.l1{background:linear-gradient(#5a9aff,#0a3ac0)}
.hud-franja{flex:1;display:grid;place-items:center;background:linear-gradient(#b03ad0,#7a1aa8 55%,#5a0a88);color:#fff;font-size:1.45vw;letter-spacing:.06em;border:3px solid #f0c8ff;box-shadow:0 4px 16px rgba(0,0,0,.5);padding:0 1vw;text-align:center}
.hud-franja small{font-size:.8em;opacity:.85}
/* ---- estilo arena 2000-2006: marco de piedra con estrellas, pulsadores plateados ---- */
.hud-arena{--c0:#f07a10;--c1:#2a6fe0}
.hud-arena-marco{position:absolute;inset:0;background:
  radial-gradient(circle at 12% 18%,rgba(255,255,255,.35) 0 2px,transparent 3px),radial-gradient(circle at 80% 85%,rgba(255,255,255,.3) 0 2px,transparent 3px),
  repeating-radial-gradient(circle at 30% 40%,rgba(120,80,30,.12) 0 3px,rgba(255,240,200,.06) 3px 7px),
  linear-gradient(135deg,#d9b77a,#c49a5a 40%,#e6c88e 70%,#b88a4a);
  padding:2.6vh 2.6vw 33vh;-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}
.hud-arena-marco::before,.hud-arena-marco::after{content:'★';position:absolute;color:#fff6d0;font-size:2.4vw;text-shadow:0 0 8px #a07030;left:1vw;top:52vh}.hud-arena-marco::after{left:auto;right:1vw;top:58vh;content:'✦'}
.hud-arena .hud-cam{border:.5vw solid #8a6a3a;box-shadow:inset 0 0 0 3px #f6e2b0}
.hud-arena .hud-franja{background:linear-gradient(#a04ac0,#6a1a90);border-color:#f8c8ff;font-family:Arial,sans-serif;font-weight:700}
.hud-arena .hud-mk{width:5vw;border-color:#f6e2b0}
.hud-rotulo-negro{position:absolute;left:50%;top:62vh;transform:translateX(-50%);background:#0a0a0a;color:#e8e8e8;border:3px solid #6a5a3a;padding:.5vw 4vw;font:700 1.3vw Arial,sans-serif;letter-spacing:.15em}
.hud-arena .hud-split-w{left:2.6vw;right:2.6vw;top:2.6vh;height:50vh}.hud-arena .hud-barra{top:53.5vh;height:3.6vw}
/* ---- rosco partido ---- */
.hud-rosco-l{position:absolute;inset:0}
.hud-l{position:absolute;transform:translate(-50%,-50%);width:2.15vw;height:2.15vw;border-radius:50%;display:grid;place-items:center;color:#fff;font:800 1.05vw Arial,sans-serif;background:radial-gradient(circle at 35% 30%,#7ab8ff,#1a5ad8 60%,#0a2a8a);border:2px solid #fff;box-shadow:0 2px 4px rgba(0,0,0,.5)}
.hud-l.ok{background:radial-gradient(circle at 35% 30%,#8af59a,#19b84a 60%,#0a6a20)}.hud-l.ko{background:radial-gradient(circle at 35% 30%,#ff9090,#e01a1a 60%,#8a0a0a)}
.hud-l.cur{background:radial-gradient(circle at 35% 30%,#fff7b0,#ffd400 60%,#c09000);color:#222;transform:translate(-50%,-50%) scale(1.2)}
.hud-tiempo{position:absolute;top:2%;left:50%;transform:translateX(-50%);display:flex;align-items:center}
.hud-tiempo .t{width:4.4vw;height:4.4vw;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:2vw;background:var(--c0);border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.5)}
.hud-tiempo.l1 .t{background:var(--c1)}
.hud-tiempo .a{margin-left:-.5vw;min-width:2.6vw;height:2.6vw;border-radius:1.3vw;display:grid;place-items:center;background:#fff;color:var(--c0);font-size:1.25vw;border:2px solid var(--c0)}
.hud-tiempo.l1 .a{color:var(--c1);border-color:var(--c1)}
.hud-rosco .hud-badge{left:50%;right:auto;bottom:16%;transform:translateX(-50%);width:4.2vw;height:4.2vw}.hud-rosco .hud-cam:not(.activo){filter:saturate(.75) brightness(.8)}
.hud-rosco .hud-split-w{height:64vh}
/* ---- cápsulas (¿Dónde están?) ---- */
.hud-caps-w{position:absolute;right:6vw;top:18vh;display:grid;grid-template-columns:repeat(3,11vw);gap:1vw}
.hud-cap{height:3.6vw;border-radius:1.8vw;display:grid;place-items:center;color:#fff;font:800 1.15vw Arial,sans-serif;background:linear-gradient(#3a8bff,#0a46d8 60%,#0a32a8);border:.22vw solid #fff;box-shadow:0 0 0 .2vw #0a32a8,0 4px 12px rgba(0,0,0,.45);text-transform:uppercase}
.hud-cap.num{font-size:2vw}
.hud-caps-t{position:absolute;right:calc(6vw + 12vw);top:calc(18vh + 15vw);width:5vw;height:5vw;border-radius:50%;display:grid;place-items:center;color:#fff;font-size:2.2vw;background:radial-gradient(circle at 35% 30%,#5aa0ff,#0a46d8);border:.25vw solid #fff;box-shadow:0 0 0 .2vw #0a32a8}
.hud-caps-tit{position:absolute;right:6vw;top:12vh;color:#fff;font-size:1.3vw;text-shadow:0 2px 6px #000}
.hud-t5 .hud-cap{border-radius:.6vw}.hud-arena .hud-cap{border-radius:.3vw;background:linear-gradient(#a04ac0,#6a1a90);border-color:#f6e2b0}
/* ---- bote acumulado ---- */
.hud-bote{position:absolute;left:50%;bottom:16vh;transform:translateX(-50%);text-align:left;animation:boteIn .6s cubic-bezier(.2,1.4,.4,1)}
.hud-bote-r{color:#ffe14a;font-size:2.1vw;letter-spacing:.02em;text-shadow:0 2px 0 #a06a00,0 3px 6px rgba(0,0,0,.6);margin-left:.6vw}
.hud-bote-n{font-size:7.5vw;line-height:1;color:#ffd84a;background:linear-gradient(#fff6b0 0%,#ffd84a 35%,#e0a010 60%,#ffe680 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  filter:drop-shadow(0 1px 0 #b07a00) drop-shadow(0 2px 0 #9a6400) drop-shadow(0 3px 0 #845400) drop-shadow(0 4px 0 #6e4400) drop-shadow(0 8px 10px rgba(0,0,0,.6));white-space:nowrap}
@keyframes boteIn{from{transform:translateX(-50%) scale(.6);opacity:0}to{transform:translateX(-50%) scale(1);opacity:1}}
/* ---- rótulo genérico ---- */
.hud-gen .hud-barra{top:auto;bottom:34vh;left:12vw;right:12vw;height:3.4vw}
.hud-azul.hud-gen .hud-franja,.hud-rueda.hud-gen .hud-franja{background:linear-gradient(#2a7bff,#0a3ac0);border:3px solid #fff;border-radius:1.7vw}
.hud-azul.hud-gen .hud-mk,.hud-rueda.hud-gen .hud-mk{border-radius:50%;width:3.4vw;background:#fff;color:#222;box-shadow:0 0 0 .35vw var(--c0)}
.hud-azul.hud-gen .hud-mk.l1,.hud-rueda.hud-gen .hud-mk.l1{box-shadow:0 0 0 .35vw var(--c1)}
.hud-gen-tit{position:absolute;left:12vw;bottom:calc(34vh + 3.9vw);color:#fff;font-size:1.1vw;text-shadow:0 2px 6px #000}
body.jugando #hud .hud-gen-w{display:block}
`;
