function genera_secuencia_Fibonacci_String(n) {
    
let a = 0, b = 1;
let resultado = '';

  for (let i = 0; i < n; i++) {
    
    resultado += a.toString();
    [a, b] = [b, a + b];
  }

  return resultado;

};

function genera_secuencia_Fibonacci_Array   (n) {  

    let a = 0, b = 1;
    let result = [];            
    for (let i = 0; i < n; i++) {
        result.push(a);        
        [a, b] = [b, a + b];
    }

    return result;
} ;        


module.exports = { genera_secuencia_Fibonacci_Array, genera_secuencia_Fibonacci_String };