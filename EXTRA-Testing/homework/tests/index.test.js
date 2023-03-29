const { checkSeatStatus, getRowNumber, book, getSeat } = require ("../homework");
 
describe('checkSeatStatus function',()=>{
   
    it("checkSeatStatus, debe ser una funcion", () =>{
        expect(typeof checkSeatStatus).toBe("function")
        });
        
        it("deberia devolver un TypeError si el parametro no es un string",()=>{
            expect(()=>checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'))
        
        });
        
        it('deberia arrojar un TypeError si el segundo parametro no es un numero',()=>{
            expect(()=>checkSeatStatus('row','number')).toThrow(new TypeError('Second parameter is not a number'))
        });

        it('deberia arrojar true si el asiento dado definido por la fila y la columna esta vacio',()=>{
            expect(checkSeatStatus('A',1)).toBe(true);
            });
            
            it('deberia arrojar falso si el asiento definido por la fila y la columna esta ocupado',()=>{
            expect(checkSeatStatus('E',3)).toBe(false);
            }); 

        });

        describe('getRowNumber function',()=>{

            it('deberia arrojar 1 si la letra dada es A',()=>{
                expect(getRowNumber('A')).toBe(0);
            });
            
            it('deberia arrojar 3 si la letra dada es C',()=>{
                expect(getRowNumber('C')).toBe(2);
            });

        });

            describe('book function',()=>{
            
                it('deberia retornar "Seat in xx successfully booked" si el asiento esta libre',()=>{
                    expect(checkSeatStatus('E',3)).toBe(false);
                    expect(book('E',3)).toBe('Seat in E3 successfully booked');
                    expect(checkSeatStatus('E',3)).toBe(true);

                });


                it('deberia retornar "Seat in xx is already booked" si esta reservado',()=>{
                 expect(book('A',1)).toBe('Seat in A1 is already booked');

                });


            });

            // extra test

            describe('extra test',()=>{

                it('verificar que la fila de asientos sea unicamente una letra sino arrojar error apropiado',()=>{
                    expect(()=>checkSeatStatus('hola',3)).toThrow (new TypeError('row has to be a single letter'));

                })

                it('verificar que el numero de filas no supere las filas del layout sino devolver las letras aceptadas',()=>{

                    expect(()=>checkSeatStatus('F',3)).toThrow(new Error('row tiene que ser: A, B, C, D, E'));
                })
            })

    