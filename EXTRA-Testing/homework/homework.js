const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];



  function getSeat(letra,number){
    const numberow = getRowNumber(letra);  // nos guardamos el indice de las filas ej: indice A , indice B etc a traves de la funcion getRowNumber.
    if(numberow <= layout.length -1){
      const layoutrow = layout[numberow];// accedemos a las columnas de las sillas en un indice particular.
    const seat = layoutrow[number];// accedemos a las sillas que hay en los indices.
    return seat;
      
    }else{
        throw new Error ('row tiene que ser: A, B, C, D, E');
    }
    
  }



function checkSeatStatus(row,number){
    if(typeof row!== 'string') throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
    if(row.length !== 1) throw new TypeError('row has to be a single letter');
    const seat = getSeat(row,number);
    return seat.booked;
    
}



function getRowNumber(letra){
return letra.toUpperCase().charCodeAt() - 65;

}

function book(row,number){
    if(checkSeatStatus(row,number)) return 'Seat in ' + row + number +' is already booked';
     const seat = getSeat(row,number);
     seat.booked = true;
     return 'Seat in ' + row + number + ' successfully booked';

};







    


module.exports = {
    checkSeatStatus,
    getRowNumber,
    book,
    getSeat
}

