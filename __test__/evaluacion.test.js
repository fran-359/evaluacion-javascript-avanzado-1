const {
  sumaRecursiva,
  isAncestor,
  linkedList,
  ConsultorioMedico,
  cardGame,
  binarySearchTree,
  SistemaPedidosMcDonalds,
  ordenarPeliculas,
  Queue,
  mergeSort,
} = require("../index");

describe("Ejercicio N°1: Sumas Recursivas", () => {
  test("Suma de números desde 1 hasta 5", () => {
    expect(sumaRecursiva(5)).toBe(15); // 1 + 2 + 3 + 4 + 5 = 15
  });

  test("Suma de números desde 1 hasta 10", () => {
    expect(sumaRecursiva(10)).toBe(55); // 1 + 2 + 3 + ... + 10 = 55
  });

  test("Suma de números desde 1 hasta 1", () => {
    expect(sumaRecursiva(1)).toBe(1); // Solo hay un número, que es 1.
  });

  test("Suma de números desde 1 hasta 100", () => {
    expect(sumaRecursiva(100)).toBe(5050); // 1 + 2 + 3 + ... + 100 = 5050
  });
});

describe("Ejercicio N°2: Parientes Simpsons", () => {
  const genealogyTree = {
    "Mona Simpson": [],
    "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
    "Jacqueline Bouvier": ["Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
    "Patty Bouvier": [],
    "Selma Bouvier": ["Ling Bouvier"],
    Edwina: ["Abigail Simpson"],
    "Lisa Simpson": [],
    "Maggie Simpson": [],
    "Ling Bouvier": [],
  };

  test("Jacqueline Bouvier es ancestro de Maggie Simpson", () => {
    expect(
      isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
    ).toBe(true);
  });

  test("Selma Bouvier es ancestro de Ling Bouvier", () => {
    expect(isAncestor(genealogyTree, "Selma Bouvier", "Ling Bouvier")).toBe(
      true
    );
  });

  test("Patty Bouvier no es ancestro de Edwina", () => {
    expect(isAncestor(genealogyTree, "Patty Bouvier", "Edwina")).toBe(false);
  });

  test("Marge Simpson no es ancestro de Abigail Simpson", () => {
    expect(isAncestor(genealogyTree, "Marge Simpson", "Abigail Simpson")).toBe(
      false
    );
  });

  test("Mona Simpson no es ancestro de Lisa Simpson", () => {
    expect(isAncestor(genealogyTree, "Mona Simpson", "Lisa Simpson")).toBe(
      false
    );
  });
});

describe("Ejercicio N°3: Método Size", () => {
  test("linkedList vacía", () => {
    const lista = new linkedList();
    expect(lista.size()).toBe(0);
  });

  test("linkedList con un elemento", () => {
    const lista = new linkedList();
    lista.head = { value: 1, next: null };
    expect(lista.size()).toBe(1);
  });

  test("linkedList con tres elementos", () => {
    const lista = new linkedList();
    lista.head = {
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    };
    expect(lista.size()).toBe(3);
  });

  test("linkedList con elementos repetidos", () => {
    const lista = new linkedList();
    lista.head = {
      value: 1,
      next: { value: 1, next: { value: 1, next: null } },
    };
    expect(lista.size()).toBe(3);
  });
});

describe("Ejercicio N°4: Método switchPos", () => {
  test("Intercambiar elementos válidos", () => {
    const lista = new linkedList();
    lista.head = {
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: 4, next: null } } },
    };

    lista.switchPos(1, 3);
    let currentNode = lista.head;

    expect(currentNode.value).toBe(1);
    currentNode = currentNode.next;
    expect(currentNode.value).toBe(4);
    currentNode = currentNode.next;
    expect(currentNode.value).toBe(3);
    currentNode = currentNode.next;
    expect(currentNode.value).toBe(2);
    currentNode = currentNode.next;
    expect(currentNode).toBe(null);
  });

  test("Intercambiar elementos en posición inválida", () => {
    const lista = new linkedList();
    lista.head = {
      value: 1,
      next: { value: 2, next: { value: 3, next: null } },
    };

    expect(lista.switchPos(1, 5)).toBe(false); // Posición 5 no existe.
    expect(lista.switchPos(-1, 2)).toBe(false); // Posición -1 no es válida.
  });

  test("Intercambiar elementos en lista vacía", () => {
    const lista = new linkedList();

    expect(lista.switchPos(0, 1)).toBe(false); // No hay elementos para intercambiar.
  });
});

describe("Ejercicio N°5: Sistema para Consultorio Médico", () => {
  test("Agregar pacientes y verificar la cantidad", () => {
    const consultorio = new ConsultorioMedico();

    consultorio.agregarPaciente("Paciente 1");
    consultorio.agregarPaciente("Paciente 2");
    consultorio.agregarPaciente("Paciente 3");

    expect(consultorio.cantidadPacientes()).toBe(3);
  });

  test("Lista de pacientes en orden de llegada", () => {
    const consultorio = new ConsultorioMedico();

    consultorio.agregarPaciente("Paciente 1");
    consultorio.agregarPaciente("Paciente 2");
    consultorio.agregarPaciente("Paciente 3");

    const listaPacientes = consultorio.listaPacientes();

    expect(listaPacientes).toEqual(["Paciente 1", "Paciente 2", "Paciente 3"]);
  });

  test("Atender al siguiente paciente", () => {
    const consultorio = new ConsultorioMedico();

    consultorio.agregarPaciente("Paciente 1");
    consultorio.agregarPaciente("Paciente 2");
    consultorio.agregarPaciente("Paciente 3");

    const pacienteAtendido = consultorio.siguientePaciente();

    expect(pacienteAtendido).toBe("Paciente 1");
    expect(consultorio.cantidadPacientes()).toBe(2);
  });
});

describe("Ejercicio N°7: HEIGHT", () => {
  test("Árbol con una sola raíz", () => {
    const tree = new binarySearchTree(10);
    expect(tree.height()).toBe(1);
  });

  test("Árbol con varios niveles", () => {
    const tree = new binarySearchTree(10);
    tree.left = new binarySearchTree(5);
    tree.right = new binarySearchTree(15);
    tree.left.left = new binarySearchTree(3);
    tree.left.right = new binarySearchTree(7);
    tree.right.left = new binarySearchTree(12);
    tree.right.right = new binarySearchTree(18);

    expect(tree.height()).toBe(3);
  });

  test("Árbol desequilibrado", () => {
    const tree = new binarySearchTree(10);
    tree.left = new binarySearchTree(9);
    tree.left.left = new binarySearchTree(8);
    tree.left.left.left = new binarySearchTree(7);
    tree.left.left.left.left = new binarySearchTree(6);

    expect(tree.height()).toBe(5);
  });
});

describe("Ejercicio N°8: Sistema de Pedidos en McDonald's", () => {
  test("Agregar pedidos", () => {
    const sistemaPedidos = new SistemaPedidosMcDonalds();

    sistemaPedidos.agregarPedido(101, ["Big Mac", "Papas fritas"]);
    sistemaPedidos.agregarPedido(75, ["Cuarto de Libra", "Refresco"]);
    sistemaPedidos.agregarPedido(120, ["McNuggets"]);
    sistemaPedidos.agregarPedido(50, ["Hamburguesa de pollo"]);
  });
});

describe("Ejercicio N°9: Ordenar Películas por Calificación", () => {
  test("Ordenar películas por calificación", () => {
    const peliculas = [
      { titulo: "Matrix", calificacion: 5 },
      { titulo: "Inception", calificacion: 1 },
      { titulo: "The Shawshank Redemption", calificacion: 9 },
      { titulo: "Pulp Fiction", calificacion: 3 },
      { titulo: "Forrest Gump", calificacion: 10 },
      { titulo: "The Dark Knight", calificacion: 8 },
    ];

    const peliculasOrdenadas = ordenarPeliculas(peliculas);

    expect(peliculasOrdenadas).toEqual([
      { titulo: "Inception", calificacion: 1 },
      { titulo: "Pulp Fiction", calificacion: 3 },
      { titulo: "Matrix", calificacion: 5 },
      { titulo: "The Dark Knight", calificacion: 8 },
      { titulo: "The Shawshank Redemption", calificacion: 9 },
      { titulo: "Forrest Gump", calificacion: 10 },
    ]);
  });
});

describe("Ejercicio N°10: Ordenar Array de Números con Merge Sort", () => {
  test("Ordenar un array de números", () => {
    const numeros = [12, 5, 7, 3, 8, 1, 9, 6];
    const numerosOrdenados = mergeSort(numeros);

    expect(numerosOrdenados).toEqual([1, 3, 5, 6, 7, 8, 9, 12]);
  });

  test("Ordenar un array de números desordenados", () => {
    const numeros = [8, 4, 2, 10, 6, 7, 1, 9];
    const numerosOrdenados = mergeSort(numeros);

    expect(numerosOrdenados).toEqual([1, 2, 4, 6, 7, 8, 9, 10]);
  });

  test("Ordenar un array de números ya ordenados", () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
    const numerosOrdenados = mergeSort(numeros);

    expect(numerosOrdenados).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("Ordenar un array de números vacío", () => {
    const numeros = [];
    const numerosOrdenados = mergeSort(numeros);

    expect(numerosOrdenados).toEqual([]);
  });

  test("Ordenar un array de un solo número", () => {
    const numeros = [42];
    const numerosOrdenados = mergeSort(numeros);

    expect(numerosOrdenados).toEqual([42]);
  });
});
