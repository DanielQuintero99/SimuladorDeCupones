
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
        this.nombre =producto.title;
        this.precio=producto.price;
        this.precioTotal = producto.price;
        this.img=producto.image;
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




