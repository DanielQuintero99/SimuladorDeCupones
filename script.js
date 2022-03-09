
class cupones {
    constructor(nombre, descuento, porcentaje) {
        this.nombre = nombre;
        this.descuento = descuento;
        this.porcentaje = porcentaje;
    }

}
let descuentos = [cupon20 = new cupones("cupon20", 0.20, ": 20% de descuento\n"), cupon10 = new cupones("cupon10", 0.10, ": 10% de descuento\n"), cupon5 = new cupones("cupon5", 0.05, ": 5% de descuento\n")]

class productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


let productosTotales = [
cargador = new productos("cargador", 20000), 
protector = new productos("protector", 15000), 
funda = new productos("funda", 10000), 
auriculares = new productos("auriculares", 150000)
];

let verificar = true;
let listado = [];
let misCupones = "";
let carrito = [];

function listarProductos() {
    productosTotales.forEach((opcion) =>
        listado += opcion.nombre + " " + opcion.precio + "\n");
}

function mostrarCupones() {
    descuentos.forEach((descontar) =>
        misCupones += descontar.nombre + " " + descontar.porcentaje

    );
}

function agregarProductos() {
    let seleccion = prompt(`Seleccione una opcion, escribe el producto que deseas : \n${listado}`);
    const comprados = productosTotales.filter(x => {
        return x.nombre === seleccion        
    });
    return carrito.push(comprados[0].precio); 
    
     
}
function validarCupones(){   
        let palabra = prompt("si tienes un cupon, ingresalo aqui, de lo contrario pulsa enter.");
        let cupon = palabra.toLowerCase();

        if (cupon === cupon20.nombre) {
            totalDescuento=total*cupon20.descuento;
            alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
        } else if (cupon === cupon10.nombre) {
            totalDescuento=total*cupon10.descuento;
            alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
        } else if (cupon === cupon5.nombre) {
            totalDescuento=total*cupon5.descuento;
            alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
        } else {
            verificar = false;
            alert("no ingresaste cupon");

        }

    }

// mostrarCupones();
// alert(misCupones)
// listarProductos();

// let bucle = true
    
// agregarProductos(); 
let total=0; 
while (bucle === true) {
    let agregarMas = parseInt( prompt("Deseas agregar mas productos? \n 1.SI \n 2.NO "));                    
    if (agregarMas === 1) {               
        agregarProductos();
           for (let suma of carrito) {  
               total+=suma               
           }           
    } else if (agregarMas === 2) {
        alert(`El total a pagar es de ${total}`)
        bucle = false
    }else{
        alert("Ingresa un valor valido")
    }
}
validarCupones();

