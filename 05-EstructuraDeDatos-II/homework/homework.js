'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  
}
LinkedList.prototype.add = function(valeu){
  let node = new Node (valeu); // instanciamos la funcion node
 let current = this.head; 
 if(current === null){
  this.head = node;
  return node;
 } // con este if verificamos si el head donde estamos parados esta vacio (si no hay nodos) y si es asi agregamos un nuevo nodo que pasa a ser el this.head.
 
while(current.next){ // mientras que haya un current. next es decir mas nodos , nos vamos a transladar al siguiente nodo con el current.next
  current = current.next;
  
}
current.next = node;
return node;
 }
 
 LinkedList.prototype.remove = function(){
 
if(!this.head ){ // lista vacia 
  return null;
}
if(!this.head.next ){ // lista de un solo nodo
 let aux = this.head.value
 this.head = null
 return aux;
 
}
else{
let current = this.head;
while(current.next.next){ // verificamos que haya mas de 1 nodo en la lista, definimos una nueva variable con el valor del siguiente nodo , y cuando el ultimo nodo devuelva un current. next null devolvemos el valor del ultimo nodo.
current = current.next
}
let aux = current.next.valeu
current.next = null
return aux;
}

 }
 
 
 LinkedList.prototype.search = function(valeu){
 if(!this.head) return null; // si esta vacia 
 
 
  let current = this.head;
  while(current){
    if(valeu === current.valeu ) return current.value; // busco en el nodo actual que es el current, sino coincide el valor pasa al siguiente if
     if(typeof valeu === 'function'){ // si el tipo de valor es una funcion, entra en el siguiente if.
      
     if(valeu(current.value)) return current.value; // se pregunta dentro de la funcion value , y le paso el valor del nodo en el que estoy parado y  si coinciden con el valor se devuelve true y se retorna el valor de la funcion.

     }
current = current.next; // paso al siguiente nodo
  }
  return null;

  

 }

 function Node( value) {
  this.value = value;
  this.next = null;
}







/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
this.numBuckets = 35,
this.bucket = [];
}

HashTable.prototype.hash = function (key){
  let suma = 0;
  for( let i = 0; i< key.length; i++){  //recorremos el key con un for para sumar cada indice a traves del charCodeAt y aplicarle el resto de numbuckets.
  let code = key.charCodeAt(i);
suma = suma + code;
  }
  let posicion = suma % this.numBuckets;
  return posicion;
 
}

HashTable.prototype.set = function(key,value){
if(typeof(key) !== 'string') throw TypeError ('keys must be a strings'); // validamos que key sea un string.
 let posicion = this.hash(key); // debemos hashear la key para saber donde ubicar el value.
 if(this.bucket[posicion] === undefined){ // nos preguntamos si en mi bucket ya existe algo para guardar el value.
  this.bucket[posicion] = {};  // nos guardamos el objeto donde se guardan la clave,valor.
  

 }
 this.bucket[posicion][key] = value; // lleno el objeto vacio con la key y le paso el valor que le corresponde.

 };
 
HashTable.prototype.get = function (key){

let posicion = this.hash(key);
return this.bucket[posicion][key];

};

HashTable.prototype.hasKey = function (key) {
  let posicion = this.hash(key);
  return this.bucket[posicion].hasOwnProperty(key);

};





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
