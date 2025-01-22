

let pronombre = ['el', 'nuestro', 'mi', 'tu', 'su'];
let adjetivo = ['valiente', 'poderoso', 'legendario', 'oscuro', 'noble', 'misterioso'];
let sustantivo = ['ninja', 'alquimista', 'pirata', 'titan', 'shinigami', 'samurai', 'demonio', 'hechicero'];


function generarDominios(pronombre, adjetivo, sustantivo) {
  let dominios = [];

  for (let p of pronombre) {
    for (let a of adjetivo) {
      for (let s of sustantivo) {
        dominios.push(`${p}${a}${s}.com`);
      }
    }
  }

  return dominios;
}


let todosLosDominios = generarDominios(pronombre, adjetivo, sustantivo);


todosLosDominios.forEach(dominio => console.log(dominio));
