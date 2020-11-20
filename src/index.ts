class Organizador {
  agregarNodo(i: number, j: number) {
    console.log(`agregando (${i}, ${j})`);
  }
}

const rejilla = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0],
];

const organizador = new Organizador();

for (let i = 0; i < rejilla.length; i++) {
  const filaI = rejilla[i];
  for (let j = 0; j < filaI.length; j++) {
    const nodo = filaI[j];
    if (nodo === 1) {
      organizador.agregarNodo(i, j);
    }
  }
}
