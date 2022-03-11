
mostrarProductos();

function mostrarProductos(){
   const nodoProductos=document.getElementById("gridProductos");

    productosTotales.forEach((opcion)=>{
        const card =document.createElement("div")
        card.setAttribute("class","card");
        card.innerHTML=`<div class="d-flex flex-column align-items-center justify-content-center">
            <h2 class="card-title">${opcion.nombre}</h2>
            <div class="ContenedorImagen"><img class="img-fluid" style="height: 250px; width: 250px;" src="${opcion.img}"></div>
            <p class="card-text text-center">${opcion.precio}$</p>
            <a href="#" class="btn btn-success">Añadir</a>
            </div>`
        nodoProductos.appendChild(card);

    });
}
function agregarProductos(){
    
}

// let verificar = true;
// let listado = [];
// let misCupones = "";
// let carrito = [];



// function buscarProductos() {
//     let seleccion = prompt(`Seleccione una opcion, escribe el producto que deseas : \n${listado}`);
//     const comprados = productosTotales.filter(x => {
//         return x.nombre === seleccion        
//     });
//     return carrito.push(comprados[0].precio); 
    
     
// }
// function validarCupones(){   
//         let palabra = prompt("si tienes un cupon, ingresalo aqui, de lo contrario pulsa enter.");
//         let cupon = palabra.toLowerCase();

//         if (cupon === cupon20.nombre) {
//             totalDescuento=total*cupon20.descuento;
//             alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
//         } else if (cupon === cupon10.nombre) {
//             totalDescuento=total*cupon10.descuento;
//             alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
//         } else if (cupon === cupon5.nombre) {
//             totalDescuento=total*cupon5.descuento;
//             alert(`tu descuento es de ${totalDescuento} el valor a pagar es de ${total-totalDescuento}`)
//         } else {
//             verificar = false;
//             alert("no ingresaste cupon");

//         }

//     }

// mostrarCupones();
// alert(misCupones)
// listarProductos();

// let bucle = true
    
// agregarProductos(); 
// let total=0; 
// while (bucle === true) {
//     let agregarMas = parseInt( prompt("Deseas agregar mas productos? \n 1.SI \n 2.NO "));                    
//     if (agregarMas === 1) {               
//         agregarProductos();
//            for (let suma of carrito) {  
//                total+=suma               
//            }           
//     } else if (agregarMas === 2) {
//         alert(`El total a pagar es de ${total}`)
//         bucle = false
//     }else{
//         alert("Ingresa un valor valido")
//     }
// }
// validarCupones();

