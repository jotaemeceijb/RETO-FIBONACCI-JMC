const {genera_secuencia_Fibonacci_String, genera_secuencia_Fibonacci_Array} = require("../src/generar_fibonacci.js");


/*String*/ 
test('TC1- Generar Fibonacci hasta 0 en string', () => {
    
    expect( genera_secuencia_Fibonacci_String(1) ).toBe('0');
}   );     

test('TC2- Generar Fibonacci hasta 5 en string', () => {

    expect( genera_secuencia_Fibonacci_String(5) ).toBe('01123');
}   );

test('TC3- Generar Fibonacci hasta 7 en string', () => {
   
    expect( genera_secuencia_Fibonacci_String(7) ).toBe('0112358');
}   );


test('TC4- Generar Fibonacci hasta 20 en string', () => {
    
    expect( genera_secuencia_Fibonacci_String(20) ).toBe('01123581321345589144233377610987159725844181');
}
    );
 /*Array */

test('TC5- Generar Fibonacci hasta 0 en array', () => {
     
    expect( genera_secuencia_Fibonacci_Array(1) ).toEqual([0]);
}   );

test('TC6- Generar Fibonacci hasta 1 en array', () => {
    
    expect( genera_secuencia_Fibonacci_Array(2) ).toEqual([0, 1]);
}); 

test('TC7- Generar Fibonacci hasta 7 en array', () => {
    
    expect( genera_secuencia_Fibonacci_Array(7) ).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('TC8- Generar Fibonacci hasta 15 en array', () => {
    
    expect( genera_secuencia_Fibonacci_Array(15) ).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
}   );