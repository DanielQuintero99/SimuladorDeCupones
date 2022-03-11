
class cupon {
    constructor(nombre, descuento, porcentaje) {
        this.nombre = nombre;
        this.descuento = descuento;
        this.porcentaje = porcentaje;
    }

}
let descuentos = [
    cupon20 = new cupon("cupon20", 0.20, ": 20% de descuento"),
    cupon10 = new cupon("cupon10", 0.10, ": 10% de descuento"), 
    cupon5 = new cupon("cupon5", 0.05, ": 5% de descuento")
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
auriculares = new producto("4","uriculares", 150000,"/images/auriculares.jpg")
];
