class Isla {
  private _nodos: { i: number; j: number }[];

  constructor() {
    this._nodos = [];
  }

  agregarNodo(i: number, j: number) {
    this._nodos.push({ i, j });
  }

  recorrerNodosIslaHasta(
    cumpleCondicionBreak: (nodo: { i: number; j: number }) => boolean
  ): boolean {
    for (let index = 0; index < this._nodos.length; index++) {
      const nodo = this._nodos[index];
      if (cumpleCondicionBreak(nodo)) {
        return true;
      }
    }
    return false;
  }
  /* 
  public toString(): string {
    return `Isla (${JSON.stringify(this._nodos)})`;
  } */
}

class ContadorDeIslas {
  private _rejilla: number[][];
  private _islasEncontradas: Isla[];

  constructor(rejilla: number[][]) {
    this._rejilla = rejilla;
    this._islasEncontradas = [];
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
          let isla;
          if (this.esPrimerNodoDeFila(j) || this.esNodoIzquierdaAgua(i, j)) {
            contador++;
            isla = new Isla();
            this._islasEncontradas.push(isla);
          } else {
            const indiceUltimaIsla = this._islasEncontradas.length - 1;
            isla = this._islasEncontradas[indiceUltimaIsla];
          }
          isla.agregarNodo(i, j);
        }
      }
    }
    for (
      let numeroIsla = 0;
      numeroIsla < this._islasEncontradas.length;
      numeroIsla++
    ) {
      const isla = this._islasEncontradas[numeroIsla];
      const haceParteDeOtraIsla = isla.recorrerNodosIslaHasta(({ i, j }) => {
        return i > 0 && this.esNodoArribaTierra(i, j);
      });
      if (haceParteDeOtraIsla) {
        contador--;
      }
    }
    return contador;
  }

  private esNodoArribaTierra(i: number, j: number): boolean {
    return this._rejilla[i - 1][j] === 1;
  }

  private esNodoIzquierdaAgua(i: number, j: number) {
    return i >= 0 && j > 0 && this._rejilla[i][j - 1] === 0;
  }

  private esPrimerNodoDeFila(j: number) {
    return j === 0;
  }
}

export default ContadorDeIslas;
