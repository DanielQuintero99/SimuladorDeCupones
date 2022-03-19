
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

class Producto {
    constructor(producto,cantidad) {
        this.id=producto.id;
        this.nombre =producto.nombre;
        this.precioTotal = producto.precio;
        this.img=producto.img;
        this.cantidad=cantidad;
        
   }
   add(){
       this.cantidad++
   }
   decrease(){
       this.cantidad--
   }
   ActualizarPrecioTotal(){
    this.precioTotal = this.precio * this.cantidad;
   }

}

let productosTotales=[
    {
        id:0,
        nombre:"Cargador",
        precio:20000,
        img:"images/cargador.jpg"
    },
    {
        id:1,
        nombre:"Protector",
        precio:15000,
        img:"images/protector.jpg"
    },
    {
        id:2,
        nombre:"Funda",
        precio:10000,
        img:"images/funda.jpg"
    },
    {
        id:3,
        nombre:"Auriculares",
        precio:150000,
        img:"images/auriculares.jpg"
    }
]


