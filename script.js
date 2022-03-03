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

const opciones=["1-Cargador 20.000\n","2-protector de pantalla 15.000\n","3-funda.10.000\n","4-Auriculares 150.000\n","5-Salir.\n"];

class cupones{
    constructor(nombre,descuento,porcentaje){
        this.nombre=nombre;
        this.descuento=descuento;
        this.porcentaje=porcentaje;
    }
    
}
let descuentos=[cupon20=new cupones("cupon20",0.20,": 20% de descuento\n"),cupon10=new cupones("cupon10",0.10,": 10% de descuento\n"),cupon5=new cupones("cupon5",0.05,": 5% de descuento\n")]

class productos{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio; 
        
    }
 
    descuento(){
        let palabra= prompt("si tienes un cupon, ingresalo aqui, de lo contrario pulsa enter.");
        let cupon=palabra.toLowerCase();
            if (cupon===cupon20.nombre) {    
                this.precioDescuento=1;
                return this.precioDescuento=this.precio-(this.precio*cupon20.descuento);     
            }else if (cupon===cupon10.nombre) {
                this.precioDescuento=1;
                return this.precioDescuento=this.precio-(this.precio*cupon10.descuento); 
            }else if (cupon===cupon5.nombre) {
                this.precioDescuento=1;
                return this.precioDescuento=this.precio-(this.precio*cupon5.descuento); 
            }
            else{
                verificar=false;
                alert("no ingresaste cupon");
                
            }
    }

}


let productosTotales = [cargador = new productos("cargador", 20000), protector = new productos("protector", 15000), funda = new productos("funda", 10000), auriculares = new productos("auriculares", 150000)];
 let verificar=true;
 let repetir=0;
 let listado="";
 let misCupones="";
function listarProductos(){
opciones.forEach((opcion)=>
    listado+=opcion);
}
function mostrarCupones(){
    descuentos.forEach((descontar)=>    
           misCupones+=descontar.nombre + " " + descontar.porcentaje
                   
   );
}
mostrarCupones();
alert(misCupones)
listarProductos();
while (repetir!==5) {
    
    repetir=parseInt(prompt(`Seleccione una opcion, digita el numero correspondiete: \n${listado}`));
    if (repetir >= 1 && repetir <= 4) {
        if (repetir === 1) {
            cargador.descuento();
            if (verificar===true) {           
            alert(`Tu producto es ${cargador.nombre}, tu descuento es ${cargador.precio-cargador.precioDescuento} tu producto cuesta ${cargador.precioDescuento} `)
        }else{
            alert(`Tu producto es ${cargador.nombre}, tu producto cuesta ${cargador.precio} `)
            verificar=true
        }
        } else if (repetir === 2) {
            protector.descuento();
            if (verificar===true) {           
                alert(`Tu producto es ${protector.nombre}, tu descuento es ${protector.precio-protector.precioDescuento} tu producto cuesta ${protector.precioDescuento} `)
            }else{
                alert(`Tu producto es ${protector.nombre}, tu producto cuesta ${protector.precio} `)
                verificar=true
            }
        } else if (repetir === 3) {
            funda.descuento();
            if (verificar===true) {           
                alert(`Tu producto es ${funda.nombre}, tu descuento es ${funda.precio-funda.precioDescuento} tu producto cuesta ${funda.precioDescuento} `)
            }else{
                alert(`Tu producto es ${funda.nombre}, tu producto cuesta ${funda.precio} `)
                verificar=true
            }

        } else if (repetir === 4) {
            auriculares.descuento();
            if (verificar===true) {           
                alert(`Tu producto es ${auriculares.nombre}, tu descuento es ${auriculares.precio-auriculares.precioDescuento} tu producto cuesta ${auriculares.precioDescuento} `)
            }else{
                alert(`Tu producto es ${auriculares.nombre}, tu producto cuesta ${auriculares.precio} `)
                verificar=true
            }

        }
    } else if(repetir===5){
        alert("Saliste");
    }else {
        alert("Ingresa un valor valido");
    }
}




