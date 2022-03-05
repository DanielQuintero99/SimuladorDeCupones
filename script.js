/*
Este programa es un simulador de cupones de descuento,
le pide al usuario que ingrese un cupon de descuento(dado al inicio para
    efectos del programa)una vez entregado el cupon el usuario se desplegara una lista de 4 prodcutos
    el usuario optara o no por ingresar el cupon, si acepta ingreesarlo se ejecuta un espacio
    para que lo escriba, si lo escribe mal se mostrara el precio del prodcuto sin descuento, si lo ingresa bien, 
    se mostrara el producto que eligio y el precio con y sin descuento, si opta por no poner el cupon, se mostrara el 
    item que selecciono con su precio sin descuento.

    ALGORITMO:
    1.Dar el cupon al usuario
    2.mostrar la lista de productos al usuario
     2.1 Validar si lo que ingreso el usuario es correcto
    3.iniciar una condicional definiendo si el usuario tiene descuento o no.
     3.1 si tiene descuento mostrar el precio del producto con el descuento, si no lo tiene mostrar el precio sin descuento
     3.2 si no lo digita el bucle se repetira
     3.3 si el usuario digita el cupon mostrar el precio original y el precio con el descuento.
     3.4 si el usuario no tiene cupon de descuento el programa mostrara los precios sin descuento

*/



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


let productosTotales = [cargador = new productos("cargador", 20000), protector = new productos("protector", 15000), funda = new productos("funda", 10000), auriculares = new productos("auriculares", 150000)];
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




mostrarCupones();
alert(misCupones)
listarProductos();


let bucle = true


    
agregarProductos(); 
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

