'use strict';
1234

function BinarioADecimal(num) {
   var acc=0;
   var posicion=num.length - 1;
   for(var i=0;i<num.length;i++){
      acc=acc + num[i] * Math.pow(2,posicion);
      posicion --

   }
return acc;

}

function DecimalABinario(num) {
   var binario=[];
   do{
      if(num % 2 === 1){
         binario.push(1);
      }else{
         binario.push(0);
      } 
      num = Math.floor(num / 2);

   }while (num >= 1)
      return binario.reverse().join("");

 

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
