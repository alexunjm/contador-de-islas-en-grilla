import ContadorDeIslas from "./ContadorDeIslas";

const contadorDeIslas = new ContadorDeIslas([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0],
]);

console.log(contadorDeIslas.contarIslas());
