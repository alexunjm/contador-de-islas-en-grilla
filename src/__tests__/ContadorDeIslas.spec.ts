import ContadorDeIslas from "../ContadorDeIslas";
/* 
beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));
test("", () => console.log("1 - test"));
 */
describe("Contador de Islas", () => {
  /* 
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));
  test("", () => console.log("2 - test"));
   */
  test("nueva instancia con rejilla vacía, debería ser creada correctamente", () => {
    const contadorDeIslas = new ContadorDeIslas([[]]);
    expect(contadorDeIslas).toBeInstanceOf(ContadorDeIslas);
  });

  test("al pasar una rejilla vacía, debería lanzar un error al contar las islas", () => {
    expect(() => {
      const contadorDeIslas = new ContadorDeIslas([[]]);
      contadorDeIslas.contarIslas();
    }).toThrow(new Error("No se definió una rejilla."));
  });

  test("al pasar una rejilla 1x1 sin islas, debería devolver cero", () => {
    const contadorDeIslas = new ContadorDeIslas([[0]]);
    expect(contadorDeIslas.contarIslas()).toBe(0);
  });

  test("al pasar una rejilla 1x1 con 1 isla, debería devolver uno", () => {
    const contadorDeIslas = new ContadorDeIslas([[1]]);
    expect(contadorDeIslas.contarIslas()).toBe(1);
  });

  test("al pasar una rejilla 1x2 con 1 isla en (0, 0), debería devolver uno", () => {
    const contadorDeIslas = new ContadorDeIslas([[1, 0]]);
    expect(contadorDeIslas.contarIslas()).toBe(1);
  });

  test("al pasar una rejilla 1xn con 1 isla en {(0, 1), (0, 2)}, debería devolver uno", () => {
    const contadorDeIslas = new ContadorDeIslas([[0, 1, 1, 0, 0]]);
    expect(contadorDeIslas.contarIslas()).toBe(1);
  });

  test("al pasar una rejilla 1xn con 2 islas [{ (0, 1), (0, 2) }, { (0, 5) }], debería devolver dos", () => {
    const contadorDeIslas = new ContadorDeIslas([[0, 1, 1, 0, 0, 1]]);
    expect(contadorDeIslas.contarIslas()).toBe(2);
  });

  test("al pasar una rejilla nxm con 2 islas [{ (0, 1), (0, 2) }, { (1, 3) }] sin conexión vertical, debería devolver dos", () => {
    const contadorDeIslas = new ContadorDeIslas([
      [0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
    ]);
    expect(contadorDeIslas.contarIslas()).toBe(2);
  });

  test("al pasar una rejilla nxn con 2 islas que abarquen 2 o más nodos horizontales y verticales contínuos, debería devolver dos", () => {
    const contadorDeIslas = new ContadorDeIslas([
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0],
    ]);
    expect(contadorDeIslas.contarIslas()).toBe(2);
  });
});

/* 
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
 */
