// ----- Recursión -----

/* Ejercicio N°1: Sumas Recursivas
  Escribe una función recursiva en JavaScript llamada sumaRecursiva que reciba un número entero positivo n como argumento y devuelva la suma de todos los números enteros desde 1 hasta n.

  Ejemplo de llamada a la función:
  console.log(sumaRecursiva(5)); // Debería imprimir 15 (1 + 2 + 3 + 4 + 5)
*/
function sumaRecursiva(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumaRecursiva(n - 1);
}
 console.log(sumaRecursiva(5));

/* Ejercicio N°2: Parientes Simpsons

Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:

const genealogyTree = {
  "Mona Simpson": [],
  "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
  "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
  "Patty Bouvier": [],
  "Selma Bouvier": ["Ling Bouvier"],
  "Edwina": ["Abigail Simpson"],
  "Lisa Simpson": [],
  "Maggie Simpson": [],
  "Ling Bouvier": []
 }

 En el caso de que sean parientes debe retornar true de lo contrario retornar false

Ejemplo:
  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson") 
  */

function isAncestor(genealogyTree, ancestor, descendant) {

 }


// ------------LinkedList------------

//implementamos linkedList() como nueva lista enlazada
class linkedList {
  constructor(head){
  this.head = null;
 }


/* Ejercicio N°3: Metodo Size

Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.

 Ejemplo:
    var lista = new LinkedList();
    lista.size(); --> 0
    lista.add(1);
   lista.size(); --> 1
    lista.add(2);
    lista.add(3);
    lista.size(); --> 3
 */
    
 
    const node = {
      value: value,
      next: null
    };

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
 }

 size() {
    return this.size;
 }



   

/* Ejercicio N°4: Metodo SwitchPos

 Implementar el método switchPos dentro del prototype de LinkedList que deberá intercambiar el elemento que se encuentre en pos1 con el elemento en pos2
 
 En el caso de que alguna de las dos posiciones no sea válida (Supere el tamaño de la lista actual 
 o sea un número negativo) debe devolver false.
 
 Si los nodos fueron removidos correctamente devolver true.
 
 Aclaración: la posición cero corresponde al head de la LinkedList
 
 Ejemplo 1:
    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4] --> [5]
    lista.switchPos(1,3);
    Ahora la lista quedaría: Head --> [1] --> [4] --> [3] --> [2] --> [5]
    y la función debería haber devuelto true
 Ejemplo 2:
    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false */

linkedList.prototype.switchPos = function (pos1, pos2) {

};

// ---------- QUEUE -----------

/* Ejercicio N°5: Sistema para Consultorio Medico

Imagina que estás desarrollando un sistema para un consultorio médico. 
El consultorio tiene un médico que atiende a los pacientes en orden de llegada. 
Necesitas implementar una cola para gestionar a los pacientes que esperan su turno para ser atendidos.

1- Crea una clase ConsultorioMedico en JavaScript que tenga los siguientes métodos:

. agregarPaciente(nombre): Agrega un paciente al final de la cola de espera. Debe recibir el nombre del paciente como argumento.

. siguientePaciente(): Atiende al paciente que está en el frente de la cola y lo elimina de la cola. Debe devolver el nombre del paciente atendido. 
Si no hay pacientes en espera, devuelve un mensaje indicando que no hay pacientes.

. cantidadPacientes(): Devuelve la cantidad de pacientes en espera.

. listaPacientes(): Devuelve un arreglo con los nombres de los pacientes en la cola en el orden en que están esperando.

EJEMPLO DE USO: 
const consultorio = new ConsultorioMedico();

consultorio.agregarPaciente("Paciente 1"); //agrega pacientes a la cola
consultorio.agregarPaciente("Paciente 2");  //agrega pacientes a la cola
consultorio.agregarPaciente("Paciente 3");   //agrega pacientes a la cola

console.log(consultorio.listaPacientes()); // Debería devolver ["Paciente 1", "Paciente 2", "Paciente 3"]

console.log(consultorio.siguientePaciente()); // Debería devolver "Paciente 1"

console.log(consultorio.cantidadPacientes()); // Debería devolver 2


*/

class ConsultorioMedico {
  constructor(nombre) {
    this.nombre = fran;
  }

  // Agrega un paciente al final de la cola.
  agregarPaciente(nombre) {
    agregarPaciente.push("Fran");
  }

  // Atiende al siguiente paciente y lo elimina de la cola.
  siguientePaciente() {
   this.agregarPaciente.pop();
  }

  // Devuelve la cantidad de pacientes en espera.
  cantidadPacientes() {
    console.log(agregarPaciente.length);
  }

  // Devuelve un arreglo con los nombres de los pacientes en espera.
  listaPacientes() {
    console.log(agregarPaciente) 
  }
}

/* Ejercicio N°6: CARD GAME

 Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
 van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
 de este juego que va a tener la siguiente dinámica:
 - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
 - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
 - Ambos jugadores van a sacar las dos primeras cartas de su mazo
      * La primera carta será su carta asignada para atacar
      * La segunda carta será su carta asignada para defender
 - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
   sobre el castillo.
 - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
   restantes en su castillo.
 La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
 'TIE' en el caso de empate
 NOTA: Ambos mazos contienen la misma cantidad de cartas

 Ejemplo:
 Los jugadores levantan 2 cartas cada uno.
 La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
 La primer carta del jugador dos va a atacar a la segunda carta del jugador uno

 Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA): 
 {attack: 5, defense: 5} vs {attack: 5, defense: 26}
 Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo

 Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA): 
 {attack: 20, defense: 26} vs {attack: 15, defense: 10}
 Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
 al castillo del jugador 1 
 Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
 finalizar el juego.
 */

function cardGame(playerOneCards, playerTwoCards) {
  // Tu código aca:
}

// ---------- BST (BINARY SEARCH TREE) -----------

/* Ejercicio N°7: HEIGHT

 Implementar la función height dentro del prototype de binarySearchTree que debe devolver la "altura"
 máxima del arbol recibido por parámetro.
 Ejemplo:
             16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4
 Este arbol tiene una altura de 4
 PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max
*/
function binarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

binarySearchTree.prototype.height = function () {
  
};

/* Ejercicio N°8: Sistema de Pedidos en McDonald's
 
Imagina que estás desarrollando un sistema de pedidos para McDonald's. Cada pedido tiene un número de orden único y una lista de productos 
que el cliente ha solicitado. 
Debes implementar una clase SistemaPedidosMcDonalds que incluya un método agregarPedido para agregar pedidos al sistema. 

-Los pedidos se deben insertar en el árbol binario de acuerdo con el número de orden de la siguiente manera:

.Si el número de orden del pedido que deseas agregar es menor o igual que el número de orden del pedido actual en el árbol, debe colocarse 
en el subárbol izquierdo.

.Si el número de orden del pedido que deseas agregar es mayor que el número de orden del pedido actual en el árbol, debe colocarse en el 
subárbol derecho.

A continuación, se muestra un ejemplo de cómo podría utilizarse la clase:

const sistemaPedidos = new SistemaPedidosMcDonalds();

sistemaPedidos.agregarPedido(101, ["Big Mac", "Papas fritas"]);
sistemaPedidos.agregarPedido(75, ["Cuarto de Libra", "Refresco"]);
sistemaPedidos.agregarPedido(120, ["McNuggets"]);
sistemaPedidos.agregarPedido(50, ["Hamburguesa de pollo"]);

El árbol debería tener la siguiente estructura, donde cada nodo representa un pedido:
      101
     /   \
    75   120
   /
  50


  Obtener los números de orden en orden ascendente creando el metodo obtenerNumerosDeOrden el cual deberia retornar de manera
  ordenada de MENOR a MAYOR los pedidos cargados
  Ejemplo:
    const numerosDeOrden = sistemaPedidos.obtenerNumerosDeOrden(); => debería ser [50, 75, 101, 120]

 */

class SistemaPedidosMcDonalds {
  constructor() {
  
  }

  agregarPedido(numeroOrden, productos) {
    
  }

  obtenerNumerosDeOrden(){
    const numerosDeOrden = sistemaPedidos.obtenerNumerosDeOrden();
  }
}

// ---------- ALGORITMOS -----------

/* Ejercicio N°9: Ordenar Películas por Calificación

Dada una lista de películas representada como objetos con una propiedad calificacion que es un número entero, implementa una función en 
JavaScript llamada ordenarPeliculas que ordene la lista de películas por su calificación utilizando el algoritmo Quicksort.

La función ordenarPeliculas debe tomar como argumento la lista de películas y devolver la lista ordenada.

Ejemplo: 

const peliculas = [
  { titulo: "Matrix", calificacion: 5 },
  { titulo: "Inception", calificacion: 1 },
  { titulo: "The Shawshank Redemption", calificacion: 9 },
  { titulo: "Pulp Fiction", calificacion: 3 },
  { titulo: "Forrest Gump", calificacion: 10 },
  { titulo: "The Dark Knight", calificacion: 8 },
];

const peliculasOrdenadas = ordenarPeliculas(peliculas);

console.log(peliculasOrdenadas); 
debe retornar : 
[
  { titulo: 'Inception', calificacion: 1 },
  { titulo: 'Pulp Fiction', calificacion: 3 },
  { titulo: 'Matrix', calificacion: 5 },
  { titulo: 'The Dark Knight', calificacion: 8 },
  { titulo: 'The Shawshank Redemption', calificacion: 9 },
  { titulo: 'Forrest Gump', calificacion: 10 }
]

*/

function ordenarPeliculas(peliculas) {
  if (peliculas.length <= 1) {
    return peliculas;
  }

  const pivot = peliculas[0];
  const left = [];
  const right = [];

  for (let i = 1; i < peliculas.length; i++) {
    if (peliculas[i] < pivot) {
      left.push(peliculas[i]);
    } else {
      right.push(peliculas[i]);
    }
  }

  return [...ordenarPeliculas(left), pivot, ...ordenarPeliculas(right)];
}

const peliculas = [5, 1, 9, 3, 8];
const peliculasOrdenadas = ordenarPeliculas(peliculas);
console.log(peliculasOrdenadas);

/* Ejercicio N°10: Orndenar Array de Números

Crea una función en JavaScript llamada mergeSort que ordene un array de números de manera ascendente (menor a mayor) utilizando el algoritmo de Merge Sort. 
La función debe tomar como argumento el array de números y devolver el array ordenado.

Ejemplo: 

const numeros = [12, 5, 7, 3, 8, 1, 9, 6];
const numerosOrdenados = mergeSort(numeros);
console.log(numerosOrdenados); // deberia retornar [1, 3, 5, 6, 7, 8, 9, 12]

*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const miArray = [5, 2, 9, 3, 1];
const arrayOrdenado = mergeSort(miArray);
console.log(arrayOrdenado); // [1, 2, 3, 5, 9]

// ❌NO ELIMINAR NI MODIFICAR NADA DEBAJO DE ESTA LINEA❌
module.exports = {
  sumaRecursiva,
  isAncestor,
  linkedList,
  ConsultorioMedico,
  cardGame,
  binarySearchTree,
  SistemaPedidosMcDonalds,
  ordenarPeliculas,
  mergeSort,
};
