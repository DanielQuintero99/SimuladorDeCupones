mostrarAddProductos();
generarCupones();
cargarCarrito();
let carrito = cargarCarrito();
let misCupones = "";

function cargarCarrito() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
   if (contenidoEnStorage) {
    let array = [];
    for (let i = 0; i < contenidoEnStorage.length; i++) {
      let producto = new Producto(
        contenidoEnStorage[i],
        contenidoEnStorage[i].cantidad
      );
      producto.ActualizarPrecioTotal();
      array.push(producto);
         
    }

    return array;
  }
  
  return [];
}



function mostrarAddProductos() {
    const nodoProductos = document.getElementById("gridProductos");
    productosTotales.forEach((opcion) => {
        const card = document.createElement("div")
        card.setAttribute("class", "card");
        card.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center">
            <h2 class="card-title">${opcion.nombre}</h2>
            <div class="ContenedorImagen">
            <img class="img-fluid" style="height: 250px; width: 250px;" src="${opcion.img}">
            </div>
            <p class="card-text text-center">${opcion.precio}$</p>
            <a href="#" id="añadir${opcion.id}" class="btn btn-success btnAñadir">Añadir</a>
            </div>`;
        nodoProductos.appendChild(card);
        const btnAdd=document.getElementById(`añadir${opcion.id}`);
        btnAdd.addEventListener("click",()=>agregarAlCarrito(opcion.id));
       
     });
}

function agregarAlCarrito(idProducto){

   let itemCarrito=carrito.find((elemento)=>elemento.id==idProducto);
 
   if (itemCarrito) {
       let index= carrito.findIndex((elemento)=>elemento.id===itemCarrito.id);
       carrito[index].add();
       carrito[index].ActualizarPrecioTotal();
       
   }else{
       carrito.push(new Producto (productosTotales[idProducto],1));
      
   }
 
   localStorage.setItem("carritoEnStorage",JSON.stringify(carrito));
   mostrarCarrito(carrito)
}

function mostrarCarrito(lista){
    let divCarrito=document.getElementById("carrito");
    divCarrito.innerHTML="";
    let precioTotal=obtenerPrecioTotal(lista);
    let table= document.createElement("div");
    let total=document.getElementById("total");
    total.innerHTML=`${precioTotal}`
    table.innerHTML=`
    <table id="bodyTabla" class="table">
  <thead>
    <tr>
      <th scope="col">Cantidad</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio Parcial</th>
    </tr>
  </thead>  
</table>
`;

divCarrito.appendChild(table);

let bodyTabla=document.getElementById("bodyTabla");
    lista.forEach((deseos) => {
        let datos=document.createElement("tbody");
        datos.innerHTML=`
        
    <tr>
      <th scope="row">${deseos.cantidad}</th>
      <td>${deseos.nombre}</td>
      <td>$${deseos.precioTotal}</td>
      <td><button id="eliminar${deseos.id}" type="button" class=" botonQuitar btn-dark" >-</button></td>
    </tr>          
     `;
     bodyTabla.appendChild(datos);
    })
}

function obtenerPrecioTotal(){
    return carrito.reduce((total,elemento)=>total+elemento.precioTotal,0);    
}

function generarCupones() {
    const nodoBody = document.getElementById("main");
    const divCupones = document.createElement("div");
    const tituloCupones=document.createElement("h3");
    const listaCuponesTotales = document.createElement("ul");
    listaCuponesTotales.setAttribute("class","list-group list-group-flush")
    const botonSalir=document.createElement("button");
    botonSalir.setAttribute("class","btn btn-info text-white");
    tituloCupones.innerHTML="Disfruta de estos Cupones";
    botonSalir.innerHTML="Salir";
    nodoBody.appendChild(divCupones);
    divCupones.appendChild(tituloCupones)
    divCupones.appendChild(listaCuponesTotales);
    divCupones.appendChild(botonSalir);
    divCupones.setAttribute("class", "divCupones");
    divCupones.style.display= "none";
    const btnMostrarCupones = document.getElementById("btnCupones");
    btnMostrarCupones.addEventListener("click",function(){
        divCupones.style.display= "";
    })
    botonSalir.addEventListener("click", function(){
        divCupones.style.display= "none";
    })
    descuentos.forEach((listaCupones) => {
        const nodoLi=document.createElement("li");
        nodoLi.setAttribute("class","list-group-item item-info")
        nodoLi.innerHTML=listaCupones.nombre + listaCupones.porcentaje;
        listaCuponesTotales.appendChild(nodoLi);        
    })
}





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