
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

class productos {
    constructor(id,nombre, precio) {
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
                
    }
}


let productosTotales = [
cargador = new productos("1","cargador", 20000), 
protector = new productos("2","protector", 15000), 
funda = new productos("3","funda", 10000), 
auriculares = new productos("4","auriculares", 150000)
];
