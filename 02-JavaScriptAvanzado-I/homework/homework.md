# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
<!-- la diferencia se refiere a principalmente a su alcance y hoisting, al declarar una variable con var la variable se declara en el ambito de la funcion actual o en el ambito global si se declara fuera de la funcion.
Por otro lado si se le asigna un valor a una variable sin declarar previamente , la variable se declarara automaticamente en el ambito global y ademas crearia problemas de lectura y dificultad en  el mantenimiento del codigo. -->
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
    console.log(x);      // 10
      console.log(a);   // 8
   var f = function (a, b, c) {
      b = a;
         console.log(b);  // 8     
          b = c;
      var x = 5;
   };
    f(a, b, c);  
   //  console.log(b); 9
};
c(8, 9, 10);
// console.log(b);10
// console.log(x);1
```

```javascript
console.log(bar);  // undefined (sabe que existe pero no reconoce su valor);
console.log(baz);  // error (en el l.e. no existe una variable que se llame baz);
foo(); //    'Hola' (busca en el l.e. y encuentra la funcion foo() y retorna hola!);
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); //  'franco' ( la condicion true entra y se reemplaza el franco por tony).
```

```javascript
var instructor = 'Tony';
 console.log(instructor);  // Tony ()
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco ( el console.log verifica si hay una variable instructor dentro del contexto de la funcion  y encuentra franco.)
   }
})();
console.log(instructor); // toni (esta situado en el contexto global y si la variable toni no existiria , el instructor no podria acceder a la funcion porque solamente se accede de adentro hacia afuera es decir de Hijo a Padre).

```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
console.log(instructor); // 'the flash' (la variable es global y se pisa );
   console.log(pm); // 'reverse flash' (es una variable let que respeta el scope que fue declarada dentro del if)
}
console.log(instructor); // the flash ( se pisa porque a la variable var no le importa los bloques d codigo sino el contexto de ejecucion )
console.log(pm); // 'franco' ( porque la variable let esta declarada en el ambito global.)
``` 

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45" (arranca sumando de izq a derecha y va convirtiendo los numeros en string y los va concatenando);
"4" - 2 //  2
"4px" - 2 // NAN ( no se puede concatenar en las restas solamente en las sumas ,va a querer tranformar el 4px en numero pero no lo va a conseguir y le sale que es nan. )
7 / 0 // infinito
{}[0] // [0] (acceder a la posicion del objeto donde la propiedad o variable es 0.)
parseInt("09") // 9 (redondea el numeroa un numero entero),
5 && 2 // 2 ( si ambas son verdaderas el valor es la columna B.)
2 && 5 // 5
5 || 0 // 5 ( si la columna A es true y la columba B es false ,la correcta es A).
0 || 5 // 5 ( si la columna A es false, y la columna B es true, devuelve la columna B )
[3]+[3]-[10] // 23 ( se concatenan los arrglos de 3 ('33'), despues se pasa el 10 a string y se convierten los dos strings en numeros (33 - 10 = 23))
3>2>1 // false ( responde a true de 3 ser mayor a 2, despues queda true es mayor a 1, true es 1 por lo que quedaria 1>1 y eso da falso.)
[] == ![] // true ( el array negativo da false, ahi el falso lo convierte en 0, por el otro lado convierte el array en un string vacio y despues lo convierte a 0 quedando asi 0 == 0 es TRUE.)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined ( en el contexto de la funcion test se sabe que la variable a solamente existe)
   console.log(foo()); // 2 ( se esta ejecutando una funcion y hay un hosting donde se devuelve 2. eso no pasa con las variables )

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false); // undefined (al querer ejecutarse getfood(false) el if no se ejecuta, pero el l.E leyo que hay una variable snack dentro de la funcion pero al no ejecutarse la funcion, la variable snack no esta definida osea se sabe que existe pero no se sabe su valor dentro de la funcion)
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de rosa (se invoca al objeto principal, de ahi entra al propo  retorna el getfull name de la funcion.)

var test = obj.prop.getFullname; // se crea la variable test con la funcion getfullname en el contexto global.

console.log(test()); // Juan Perez (ya que la variable test esta en el contexto global y el this hace referencia tmb al contrxto global).
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();// 1432 (empieza ejecutando el 1er console log, luego la funcion 2 la al ser settimeout la manda a un proceso de 2do plano llamado callback queu, luego va a la segunda funcion y hace lo mismo y por ultimo  resuelve el console log 4 donde  arroja como primer  resultado 14 y despues segun el tiempo de demora de las funciones van arrojando los diferentes resultados, que por tiempo primero se devuelve el 3 porque demora menos y ultimo el 2.)
```
