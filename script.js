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


const cupones = ["cupon20", "cupon10", "cupon5"];

class productos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    descuento() {
        let cupon = prompt("si tienes un cupon. ingresalo aqui, de lo contrario pulsa enter.")
        if (cupon === cupones[0]) {
            let descuento20p = 0.20;
            let descuentoAplicado = this.precio * descuento20p;
            return this.precio -= descuentoAplicado;

        } else if (cupon === cupones[1]) {
            let descuento10p = 0.10;
            let descuentoAplicado = this.precio * descuento10p;
            return this.precio -= descuentoAplicado;
        } else if (cupon === cupones[2]) {
            let descuento5p = 0.05;
            let descuentoAplicado = this.precio * descuento5p;
            return this.precio -= descuentoAplicado;
        } else {
            alert("no ingresaste cupon");
        }
    }
    disminuirStock() {
        return this.stock -= 1;
    }
}
let productosTotales = [cargador = new productos("cargador", 20000, 10), protector = new productos("protector", 15000, 6), funda = new productos("funda", 10000, 15), auriculares = new productos("auriculares", 150000, 5)];
alert("lista de cupones: \n cupon20 --->20% descuento\n cupon10 --->10% descuento\n cupon5 --->5% descuento ")

repetir = true
while (repetir == true) {
    
    let compra = parseInt(prompt("elige un producto, digita el numero correspondite:\n 1-Cargador 20.000\n 2-protector de pantalla 15.000\n 3-funda.10.000\n 4-Auriculares 150.000\n 5-Salir."));

    if (compra >= 1 && compra <= 4) {
        if (compra === 1) {
            cargador.descuento();
            alert(`Tu producto es ${productosTotales[0].nombre}, tu producto cuesta ${cargador.precio} `)
            cargador.disminuirStock();
        } else if (compra === 2) {
            protector.descuento();
            alert(`Tu producto es ${productosTotales[1].nombre}, tu producto cuesta ${protector.precio} `);
            protector.disminuirStock();
        } else if (compra === 3) {
            funda.descuento();
            alert(`Tu producto es ${productosTotales[2].nombre}, tu producto cuesta ${funda.precio} `);
            funda.disminuirStock();
        } else if (compra === 4) {
            auriculares.descuento();
            alert(`Tu producto es ${productosTotales[3].nombre}, tu producto cuesta ${auriculares.precio} `);
            auriculares.disminuirStock;
        }
    } else if (compra === 5) {
        alert("Saliste");
        repetir = false;
    } else {
        alert("ingresa un valor valido");
    }
}


console.table(productosTotales);