mostrarProductos();
generarCupones();


let misCupones = "";

function mostrarProductos() {
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
            <a href="#" class="btn btn-success">Añadir</a>
            </div>`;
        nodoProductos.appendChild(card);

    });
}


function generarCupones() {
    const nodoBody = document.getElementById("main");
    const divCupones = document.createElement("div");
    const tituloCupones=document.createElement("h3");
    const listaCuponesTotales = document.createElement("ul");
    const opacity=document.getElementById("opacity");
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
        opacity.style.opacity="1"
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



// function listarProductos() {
//     productosTotales.forEach((opcion) =>
//         listado += opcion.nombre + " " + opcion.precio + "\n");
// }


// let verificar = true;
// let listado = [];

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