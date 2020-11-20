class Organizador {
  agregarNodo(i: number, j: number) {
    console.log(`agregando (${i}, ${j})`);
  }
}

const organizador = new Organizador();
organizador.agregarNodo(1, 3);
