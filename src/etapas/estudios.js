// ESTUDIOS GROK BOT: complejo de estudios ficticio. Exterior con rótulo, recepción y un
// pasillo con una puerta por plató/época. Haz clic en una puerta para entrar.
import * as THREE from 'three';
import * as K from '../lib/kit.js';
import { crearPlato } from './_base.js';

export const info = { id: 'estudios', nombre: 'Estudios Grok Bot', anios: 'Recepción', disponible: true, hub: true };
export const cameras = {
  general: { label: '🏢 Exterior', pos: [0, 6, 34], target: [0, 5, 12] },
  recepcion: { label: '🛎️ Recepción', pos: [0, 2.2, 10], target: [0, 1.8, 2] },
  pasillo: { label: '🚪 Pasillo de platós', pos: [0, 2.0, 0], target: [0, 1.8, -26] },
};

export function build(scene, ctx) {
  return crearPlato(scene, ctx, { nombre: 'estudios-grok-bot', fondo: 0x0d1630, niebla: [60, 140] }, (root, up) => {
    K.luces(root, { hemi: [0xdfe8ff, 0x303848, 0.75], key: 60, puntos: [[0xffffff, 10, 0, 3.5, 6, 14], [0xffffff, 8, 0, 3.5, -8, 14], [0xffffff, 8, 0, 3.5, -20, 14], [0x9fd0ff, 30, 0, 6, 24, 30]] });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(120, 32, 16), new THREE.MeshBasicMaterial({ color: 0x14204a, side: THREE.BackSide })); root.add(sky);
    // exterior: explanada, edificio y rótulo
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), K.mat(0x3a3f4a, { roughness: 0.9 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -0.01; root.add(ground);
    const plaza = new THREE.Mesh(new THREE.PlaneGeometry(30, 20), K.mat(0xb8bcc4, { roughness: 0.7 })); plaza.rotation.x = -Math.PI / 2; plaza.position.set(0, 0.005, 24); root.add(plaza);
    const fachada = new THREE.Mesh(new THREE.BoxGeometry(40, 12, 1), K.mat(0x2a3a6a, { roughness: 0.4, metalness: 0.3 })); fachada.position.set(0, 6, 14); root.add(fachada);
    // hueco de entrada (puerta de cristal)
    const puertaEnt = new THREE.Mesh(new THREE.BoxGeometry(5, 3.5, 1.05), new THREE.MeshPhysicalMaterial({ color: 0x9fd0ff, transparent: true, opacity: 0.35, roughness: 0.05 })); puertaEnt.position.set(0, 1.75, 14); root.add(puertaEnt);
    fachada.material.transparent = false;
    const rotulo = K.textoPlano('ESTUDIOS GROK BOT', { w: 22, h: 2.4, color: '#ffffff', font: '900 180px Arial' }); rotulo.position.set(0, 9.2, 14.6); root.add(rotulo);
    const subr = K.textoPlano('Complejo de producción de concursos · Platós 1 a 5', { w: 16, h: 0.9, color: '#9fd0ff', font: '600 70px Arial' }); subr.position.set(0, 6.9, 14.6); root.add(subr);
    const neonL = new THREE.Mesh(new THREE.BoxGeometry(24, 0.1, 0.1), K.glow(0x6fc0ff, 2.5)); neonL.position.set(0, 7.9, 14.6); root.add(neonL);
    // carteles de los estudios en la fachada
    const carteles = [['PLATÓ 1', 'Pasapalabra 2000-2006', '#ff7a00'], ['PLATÓ 2', 'Pasapalabra 2007-2018', '#3f7dff'], ['PLATÓ 3', 'Pasapalabra 2018-2019', '#2ab8ff'], ['PLATÓ 4', 'Pasapalabra 2020-2026', '#1f74ff'], ['PLATÓ 5', 'Rueda la letra', '#c050ff']];
    carteles.forEach(([a, b, c], i) => { const p = K.textoPlano(`${a} · ${b}`, { w: 5.8, h: 0.8, color: '#fff', bg: c, font: '700 60px Arial' }); p.position.set(-13 + i * 6.5, 4.6, 14.6); root.add(p); });
    // farolas
    for (const x of [-12, -6, 6, 12]) { const f = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 4, 8), K.mat(0x222222)); f.position.set(x, 2, 28); root.add(f);
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 8), K.glow(0xfff0c0, 2)); l.position.set(x, 4.1, 28); root.add(l); }
    // recepción
    const suelo = new THREE.Mesh(new THREE.PlaneGeometry(14, 40), K.mat(0xb8bcc8, { roughness: 0.35, metalness: 0.1 })); suelo.rotation.x = -Math.PI / 2; suelo.position.set(0, 0.01, -6); root.add(suelo);
    const techo = new THREE.Mesh(new THREE.PlaneGeometry(14, 40), K.mat(0xf4f4f6)); techo.rotation.x = Math.PI / 2; techo.position.set(0, 4, -6); root.add(techo);
    for (const s of [-1, 1]) { const w = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4, 40), K.mat(0xdfe3ea)); w.position.set(s * 7, 2, -6); root.add(w); }
    for (let z = 10; z > -26; z -= 4) { const l = new THREE.Mesh(new THREE.BoxGeometry(6, 0.05, 0.4), K.glow(0xffffff, 0.6)); l.position.set(0, 3.97, z); root.add(l); }
    const mostrador = new THREE.Mesh(new THREE.BoxGeometry(5, 1.1, 1), K.mat(0x1f74ff, { roughness: 0.3 })); mostrador.position.set(0, 0.55, 5); root.add(mostrador);
    const mostTop = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.06, 1.2), K.mat(0xffffff)); mostTop.position.set(0, 1.13, 5); root.add(mostTop);
    const recLogo = K.textoPlano('RECEPCIÓN · ESTUDIOS GROK BOT', { w: 4.8, h: 0.5, color: '#fff', font: '700 60px Arial' }); recLogo.position.set(0, 0.6, 5.51); root.add(recLogo);
    const recep = K.figure({ body: 0x2a2a34, legs: 0x1a1a22, hair: 0x3a2412 }); recep.position.set(0, 0, 4); root.add(recep);
    const panel = K.textoPlano('← Platós por la puerta del fondo · Pasillo de platós →', { w: 8, h: 0.6, color: '#1a2a5a', font: '700 50px Arial' }); panel.position.set(0, 3.2, 1.2); root.add(panel);
    for (const s of [-1, 1]) { const sofa = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 0.9), K.mat(0xff7a00)); sofa.position.set(s * 5, 0.25, 8); root.add(sofa);
      const pl = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 8), K.mat(0x2a8a40)); pl.position.set(s * 6.3, 0.9, 11); root.add(pl);
      const mac = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.3, 0.6, 12), K.mat(0xffffff)); mac.position.set(s * 6.3, 0.3, 11); root.add(mac); }
    // pasillo con puertas a cada plató
    const destinos = ctx.platos || [];
    const clickables = [];
    destinos.forEach((d, i) => {
      const side = i % 2 ? 1 : -1, z = -4 - Math.floor(i / 2) * 7 - (side > 0 ? 3.5 : 0);
      const door = K.salida({ style: 'puerta', label: `${d.nombre} ${d.anios}`, color: d.color || 0x4fa8ff });
      door.position.set(side * 6.8, 0, z); door.rotation.y = -side * Math.PI / 2; root.add(door);
      door.traverse(o => { o.userData.salida = false; o.userData.destino = d.id; });
      const n = K.textoPlano(`PLATÓ ${i + 1}`, { w: 1.6, h: 0.5, color: '#fff', bg: '#1a2a5a', font: '700 70px Arial' }); n.position.set(side * 6.75, 3.0, z + 1.5 * side); n.rotation.y = -side * Math.PI / 2; root.add(n);
      const luz = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), K.glow(0xff2020, 2.5)); luz.position.set(side * 6.75, 3.45, z); root.add(luz);
      up.push(t => { luz.material.emissiveIntensity = 1.5 + Math.sin(t * 3 + i) * 1; });
      clickables.push(door);
    });
    const fondo = K.textoPlano('EN EL AIRE', { w: 3, h: 0.7, color: '#ff3030', bg: '#200000', font: '900 90px Arial' }); fondo.position.set(0, 3.0, -25.8); root.add(fondo);
    const pared = new THREE.Mesh(new THREE.BoxGeometry(14, 4, 0.3), K.mat(0x1a2a5a)); pared.position.set(0, 2, -26); root.add(pared);
    return { clickables };
  });
}
