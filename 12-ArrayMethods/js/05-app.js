const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con un forEach
let resultado = '';
carrito.forEach((p, i) => {
    if(p.nombre === 'Tablet') {
        resultado = carrito[i]
    }
});
console.log(resultado);

// Con un .find
const resultado2 = carrito.find( p => p.nombre === 'Celular');
console.log(resultado2);