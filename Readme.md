# reto-fibonacci-jmc

Generador de secuencias de Fibonacci en JavaScript, con pruebas automatizadas usando Jest y reporte HTML.

## Estructura del proyecto

```
.
├── package.json
├── reportes/
│   └── test-report.html
├── src/
│   └── generar_fibonacci.js
└── tests/
    └── test_generar_fibonacci.test.js
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:

```sh
npm install
```

## Uso

El archivo [`src/generar_fibonacci.js`](src/generar_fibonacci.js) exporta dos funciones:

- `genera_secuencia_Fibonacci_String(n)`: Devuelve una secuencia de Fibonacci como string.
- `genera_secuencia_Fibonacci_Array(n)`: Devuelve una secuencia de Fibonacci como array.

Ejemplo:

```js
const { genera_secuencia_Fibonacci_String, genera_secuencia_Fibonacci_Array } = require('./src/generar_fibonacci');

console.log(genera_secuencia_Fibonacci_String(5)); // "01123"
console.log(genera_secuencia_Fibonacci_Array(5));  // [0, 1, 1, 2, 3]
```

## Pruebas

Para ejecutar las pruebas y generar el reporte HTML:

```sh
npm test
```

El reporte se genera en [`reportes/test-report.html`](reportes/test-report.html).

## Autor

Jonathan Mejia
Proyecto para el diplomado de automatización de pruebas.