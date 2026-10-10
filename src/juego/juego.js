// Flujo de un programa completo: selección de fecha/variante, pruebas de la época y final.
import { UI, esc, setVoz } from './motor.js';
import { PRUEBAS } from './pruebas.js';
import { jugarFinal } from './final.js';
import { ESPECIALES, FAMOSOS_FICTICIOS } from '../lib/especiales.js';

// Pruebas por época y fecha (según el texto de referencia)
export const FORMATOS = {
  'antena3-2000': {
    equipos: [['Veterano', '#ff7a00'], ['Aspirante', '#2a5cff']], bote: 6000,
    variantes: [
      { id: 'a3-2001', nombre: '2001-2006 (rosco de 25 letras, 90 s + acumulado)', pruebas: ['una_de_dos', 'pulsador', 'de_par_en_par', 'piramides', 'antes_y_despues', 'palabra_imposible'], final: { tipo: 'rosco', base: 90, nombre: 'El rosco' } },
    ],
    nota: 'En 2000 el rosco tenía 28 letras (con K, LL y W) y 100 s; entre 2003 y 2005 ambos partían con 110 s. Aquí se juega la fórmula de 25 letras y 90 s + acumulado.',
  },
  'telecinco-2007': {
    equipos: [['Naranja', '#ff7a00'], ['Azul', '#2a5cff']], bote: 6000,
    variantes: [
      { id: 't5-hasta2018', nombre: 'Hasta el 7 de septiembre de 2018', pruebas: ['silla_azul', 'letra_a_letra', 'pista_musical', 'coco_loco', 'que_es_que'], final: { tipo: 'rosco', base: 85, nombre: 'El rosco' } },
      { id: 't5-primeros', nombre: 'Primeros años de Telecinco (pruebas históricas, aprox.)', pruebas: ['piramides', 'pulsador', 'de_par_en_par', 'antes_y_despues', 'palabra_imposible'], final: { tipo: 'rosco', base: 85, nombre: 'El rosco' } },
    ],
  },
  'telecinco-2018': {
    equipos: [['Naranja', '#ff7a00'], ['Azul', '#2a5cff']], bote: 6000,
    variantes: [{ id: 't5-desde2018', nombre: 'Desde el 10 de septiembre de 2018', pruebas: ['silla_azul', 'una_de_cuatro', 'pista_musical', 'sopa_letras', 'donde_estan'], final: { tipo: 'rosco', base: 85, nombre: 'El rosco' } }],
  },
  'antena3-2020': {
    equipos: [['Naranja', '#ff7a00'], ['Azul', '#2a5cff']], bote: 100000,
    variantes: [
      { id: 'a3-2020', nombre: '13 may 2020 – 4 dic 2023 (Sopa de letras + Rosco)', pruebas: ['silla_azul', 'una_de_cuatro', 'pista_musical', 'sopa_letras', 'donde_estan'], final: { tipo: 'rosco', base: 85, nombre: 'El rosco' } },
      { id: 'a3-2023', nombre: '5 dic 2023 – 18 jun 2026 (Palabras cruzadas + Rosco)', pruebas: ['silla_azul', 'una_de_cuatro', 'pista_musical', 'palabras_cruzadas', 'donde_estan'], final: { tipo: 'rosco', base: 85, nombre: 'El rosco' } },
      { id: 'a3-2026', nombre: 'Desde el 19 jun 2026 (Palabras cruzadas + AlaZ)', pruebas: ['silla_azul', 'una_de_cuatro', 'pista_musical', 'palabras_cruzadas', 'donde_estan'], final: { tipo: 'alaz', base: 110, nombre: 'AlaZ' } },
    ],
  },
  'rueda-letra': {
    equipos: [['Morado', '#a040e0'], ['Azul', '#2a8bff']], bote: 200000,
    variantes: [{ id: 'rueda', nombre: 'Rueda la letra (desde el 7 sep 2026)', pruebas: ['la_oportunidad', 'he_dicho', 'cantando_espero', 'con_dos_palabras', 'palabras_ocultas'], final: { tipo: 'rueda', base: 85, nombre: 'La Rueda' } }],
  },
};

const boteKey = id => 'pp3d-bote-' + id;

export async function jugarPrograma(el, etapaDef, { onCamara, especial = 'normal' } = {}) {
  const F = FORMATOS[etapaDef.id]; if (!F) return;
  const ui = new UI(el);
  let cont = ui.pantalla(`<h3>${esc(etapaDef.nombre)} · ${esc(etapaDef.anios)}</h3><p>Elige la fecha / variante del programa:</p>
    <div class="j-opc vert">${F.variantes.map((v, i) => `<button data-v="${i}">${esc(v.nombre)}</button>`).join('')}</div>
    ${F.nota ? `<p class="j-sub">${esc(F.nota)}</p>` : ''}
    <label class="j-sub"><input type="checkbox" id="j-voz"> Voz del presentador (síntesis es-ES)</label>
    <div class="j-opc"><button data-v="x" class="pasa">Cancelar</button></div>`);
  const v = await ui.clic(cont); setVoz(!!el.querySelector('#j-voz')?.checked);
  if (v === 'x') return ui.cerrar();
  const variante = F.variantes[+v];
  const boteGuardado = +localStorage.getItem(boteKey(etapaDef.id)) || F.bote;
  const famosos = [...FAMOSOS_FICTICIOS].sort(() => Math.random() - 0.5).slice(0, 4);
  const G = { equipos: F.equipos.map(([n, c]) => ({ nombre: n, color: c, seg: 0 })), bote: boteGuardado, boteInicial: F.bote, ganado: 0 };
  cont = ui.pantalla(`<div class="j-def">${especial !== 'normal' ? `<b>${esc(ESPECIALES[especial].nombre)}</b><br>` : ''}Equipo ${esc(G.equipos[0].nombre)} (tú) con ${esc(famosos[0])} y ${esc(famosos[1])}<br>Equipo ${esc(G.equipos[1].nombre)} con ${esc(famosos[2])} y ${esc(famosos[3])}</div>
    <p class="j-sub">Famosos virtuales ficticios. Bote actual: <b>${G.bote.toLocaleString('es-ES')} €</b></p>
    <p>Pruebas: ${variante.pruebas.map(p => esc(PRUEBAS[p].nombre)).join(' · ')} · Final: ${esc(variante.final.nombre)}</p>`);
  ui.cabecera(G, 'Programa');
  await ui.continuar(cont, '¡Empezamos! ▸');
  onCamara && onCamara('mesa');
  for (const p of variante.pruebas) {
    cont = ui.pantalla(`<div class="j-def grande">${esc(PRUEBAS[p].nombre)}</div>`); ui.cabecera(G, PRUEBAS[p].nombre);
    await ui.continuar(cont, 'Jugar ▸');
    await PRUEBAS[p].jugar(G, ui);
  }
  onCamara && onCamara('atril');
  await jugarFinal(G, ui, variante.final);
  localStorage.setItem(boteKey(etapaDef.id), String(G.bote));
  cont = ui.pantalla(`<div class="j-def grande">Fin del programa</div><p>Has ganado hoy: <b>${G.ganado.toLocaleString('es-ES')} €</b>. Bote para el próximo programa: <b>${G.bote.toLocaleString('es-ES')} €</b>.</p>`); ui.cabecera(G, 'Resultado');
  await ui.continuar(cont, 'Cerrar');
  ui.cerrar(); onCamara && onCamara('general');
}
