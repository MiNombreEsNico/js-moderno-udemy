const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    if(mes === 'Diciembre') {
        console.log(`Encontrado en el índice ${i}`)
    }
})

// Encontrar el index de abril
const index = meses.findIndex( mes => mes === 'Abril');
console.log(index);

// Encontrar im index de un array de objetos
const index2 = carrito.findIndex( producto => producto.nombre === 'Teclado' );
console.log(index2);