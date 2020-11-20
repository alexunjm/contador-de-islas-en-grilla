class ContadorDeIslas {
  private _rejilla: number[][];

  constructor(rejilla: number[][]) {
    this._rejilla = rejilla;
  }
  contarIslas(): any {
    if (this._rejilla.length < 1 || this._rejilla[0].length < 1) {
      throw new Error("No se definió una rejilla.");
    }

    let contador = 0;
    for (let i = 0; i < this._rejilla.length; i++) {
      const filaI = this._rejilla[i];
      for (let j = 0; j < filaI.length; j++) {
        const nodo = filaI[j];
        if (nodo === 1) {
          contador++;
        }
      }
    }
    return contador;
  }
}

export default ContadorDeIslas;
