'use strict';

const { size } = require("@11ty/eleventy/src/TemplateCache");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(valeu) {
   this.valeu = valeu;
   this.left = null;
   this.right = null;
}
// ESTE METEDO INSERTE UN NUEVO NODO EN EL ARBOL.
BinarySearchTree.prototype.insert = function (valeu) {
if(valeu < this.valeu) { // comprabamos si el valor que vamos a colocar es menor que el valor de this.value
   if(this.left){ 
     return this.left.insert(valeu);
   } else{ 
      this.left = new BinarySearchTree(valeu);
      return valeu;
      
      }
      
      } else
         if(this.right){
           return this.right.insert(valeu);
         }else{
            this.right = new BinarySearchTree(valeu);
            return valeu;
            
         }
      };
   

// let miarbol = new BinarySearchTree(10); 
// console.log(miarbol);
// miarbol.insert(8);
// console.log(miarbol)
// miarbol.insert(13);
// console.log(miarbol)

// METODO QUE CUENTA EL NUMERO DE NODOS DE MI ARBOL.
BinarySearchTree.prototype.size = function (){ // empieza desde 1 por el nodo raiz, y seria 1 mas mi parte izquierda + mi parte derecha.
let suma =0;
suma += 1;
if(this.left) suma += this.left(size);
if(this.right) suma += this.right(size);  
return suma;
}


// METODO QUE EVALUA SI EXISTE TAL VALOR EN EL ARBOL.

BinarySearchTree.prototype.contains = function(valeu){
if(valeu === this.valeu) return true; // si el valor es igual a la raiz devuelve true.
if( this.left && this.left.contains(valeu) ) return true; // si existe un nodo a mi izquierda... pregunta si ese nodo contiene tal valor y devolve true.
if(this.right && this.right.contains(valeu)) return true; // aca es lo mismo pero a la derecha.
return false;
}

BinarySearchTree.prototype.depthFirstForEach =  function(cb,order){
    switch(order){  // usamos el metodo switch y dependiendo de lo que nos pasan se ejecutara el caso, sino nos pasan nada por default se ejecutara el metodo in-order.
      case "post-order": // IZQ-DERECHA-NODO
           this.left && this.left.depthFirstForEach(cb,order);
           this.right && this.right.depthFirstForEach(cb,order);
            cb(this.valeu);
         break;
         case "pre-order": //NODO-IZQ-DERECHA
         cb(this.valeu);
         this.left && this.left.depthFirstForEach(cb,order);
         this.right && this.right.depthFirstForEach(cb,order);
            break;
            default: // IZQ-NODO-DERECHA
            this.left && this.left.depthFirstForEach(cb,order);
               cb(this.valeu);
               this.right && this.right.depthFirstForEach(cb,order);

               break;
   }
   
   
      }
    


BinarySearchTree.prototype.breadthFirstForEach = function(cb,pendiente){
   if(!pendiente){
      var pendiente =[]; // guardamos los hijos de cada uno en el pendiente.
   }
cb(this.valeu)
if(this.left && pendiente.push(this.left)); // si hay un nodo izq se saca y se lo guarda en pendientes
if(this.right && pendiente.push(this.right)); // aca igual pero del lado derecho.
 
if(pendiente.length > 0){
pendiente.shift().breadthFirstForEach(cb,pendiente); // si hay pendientes se saca el primero y se vuelve a repetir la funcion 

}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
