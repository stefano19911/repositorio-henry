'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n === 0 || n === 1) return 1; // caso base 
  else if(n < 0) return 0; // descartamos negativos
return n * nFactorial(n - 1); // cuando se llama a la funcion nfactorial , se vuelve a llamar al nuevo valor y arranca a funcionar todo devuelta hasta llegar a 1.
} 

// con un while

 //if(n === 0 || n === 1) return 1; 
  //else if(n < 0) return 0;
  // let aux = n;
// while (n !== 1 && n !== 0){
  // aux *= (n - 1);
  // n--




function nFibonacci(n) {
 if(n < 0 ) return false; // descartamos que sea el parametro sea menos que 0
 if(n === 0) return 0;
 if(n === 1 )return 1;
return nFibonacci(n - 1) + nFibonacci(n - 2); 

// con un for
//if(n < 0 ) return false; 
 //if(n === 0) return 0;
 // let array = [];
 // array[0]=0;
//array[1]= 1;
//for(let 1 = 2; i<= n; i++){
  // array[1] = array[i - 2] + array[i - 1];
//}
// return array[n];
 


}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

  this.Queue = [];
}
 Queue.prototype.enqueue = function(info){
  this.Queue.push(info);
 }
 Queue.prototype.dequeue = function (){
   return this.Queue.shift();
 }
 Queue.prototype.size = function (){
  return this.Queue.length;
 }
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
