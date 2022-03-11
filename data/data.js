
class cupones {
    constructor(nombre, descuento, porcentaje) {
        this.nombre = nombre;
        this.descuento = descuento;
        this.porcentaje = porcentaje;
    }

}
let descuentos = [
    cupon20 = new cupones("cupon20", 0.20, ": 20% de descuento\n"),
     cupon10 = new cupones("cupon10", 0.10, ": 10% de descuento\n"), 
     cupon5 = new cupones("cupon5", 0.05, ": 5% de descuento\n")
    ]

class producto {
    constructor(id,nombre, precio,img) {
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
        this.img=img;
   }
}


let productosTotales = [
cargador = new producto("1","Cargador", 20000,"/images/cargador.jpg"), 
protector = new producto("2","Protector", 15000, "/images/protector.jpg"), 
funda = new producto("3","Funda", 10000,"/images/funda.jpg"), 
auriculares = new producto("4","Auriculares", 150000,"/images/auriculares.jpg")
];
