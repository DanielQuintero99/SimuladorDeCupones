mostrarAddProductos();
cuponesSweetAlert();
cargarCarrito();
validarCupones();
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
      array = [...array, producto];
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
    const btnAdd = document.getElementById(`añadir${opcion.id}`);
    btnAdd.addEventListener("click", () => agregarAlCarrito(opcion.id));
    btnAdd.addEventListener("click", () => mostrarToast(opcion.nombre) );
  });
}

function agregarAlCarrito(idProducto) {

  let itemCarrito = carrito.find((elemento) => elemento.id == idProducto);

  if (itemCarrito) {
    let index = carrito.findIndex((elemento) => elemento.id === itemCarrito.id);
    carrito[index].add();
    carrito[index].ActualizarPrecioTotal();
    
  } else {
    carrito.push(new Producto(productosTotales[idProducto], 1));
  }
  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  mostrarCarrito(carrito);
  
}

function mostrarToast(nombreProducto){
  Toastify({
    text: `Agregaste ${nombreProducto}`,
    className: "info",
    style: {
      background: "linear-gradient(to right, green,red, black,blue )",
    }
  }).showToast();
}
function mostrarCarrito(lista) {
  let divCarrito = document.getElementById("carrito");
  divCarrito.innerHTML = "";
  let precioTotal = obtenerPrecioTotal(lista);
  let table = document.createElement("div");
  let total = document.getElementById("total");
  total.innerHTML = `${precioTotal} $`
  table.innerHTML = `
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
  let btnEliminar = document.getElementById("btnEliminar");
  btnEliminar.addEventListener("click", borrarCarrito)
  let bodyTabla = document.getElementById("bodyTabla");
  lista.forEach((deseos) => {
    let datos = document.createElement("tbody");
    datos.innerHTML = `
        
    <tr>
      <th scope="row">${deseos.cantidad}</th>
      <td>${deseos.nombre}</td>
      <td>$${deseos.precioTotal}</td>
      <td><button id="eliminar${deseos.id}" type="button" class=" botonQuitar btn-dark" >-</button></td>
    </tr>          
     `;
    bodyTabla.appendChild(datos);
    let eliminarUnidad = document.getElementById(`eliminar${deseos.id}`);
    eliminarUnidad.addEventListener("click", () => {
      eliminarUnItem(deseos.id);
    })
  })

}

function obtenerPrecioTotal() {
  return carrito.reduce((total, elemento) => total + elemento.precioTotal, 0);
  
}

function validarCupones(){
  let btnValidar=document.getElementById("btnValidar").onclick=function(){
    let cuponIngresado=document.getElementById("validarCupon").value;
    let validacion = descuentos.find((element)=>cuponIngresado==element.nombre);
    let precioTotal=obtenerPrecioTotal()
    if (validacion) {
    let descuentoAplicado= validacion.descuento*precioTotal; 
    let descuentoEnpantalla=document.createElement("div");
    let totalPagar=document.createElement("div");
    totalPagar.innerHTML=`<b>Total a pagar ${precioTotal-descuentoAplicado}$ <b>`
    descuentoEnpantalla.innerHTML=`Descuento por cupon: ${descuentoAplicado} $`
    descuentoEnpantalla.setAttribute("class","descuentoEnPantalla");
    let divTotal=document.getElementById("total");
    divTotal.appendChild(descuentoEnpantalla); 
    divTotal.appendChild(totalPagar);
    Toastify({
      text: `Tu cupon es valido tienes un  ${validacion.descuento*100}% de descuento, difrutalo`,
      duration: 5000,
      className: "info",
      style: {
        background: "linear-gradient(to up, black,blue )",
      }
    }).showToast();
    }else{
      Swal.fire({
          icon: 'error',
          title: 'El cupon que ingresaste no es valido',
          text: 'Intentalo Nuevamente',
          width: 600,
          padding: '3em',
          color: 'black',
          background: '#fff',
          backdrop: `
        rgba(0,0,0,0.7)
        url("https://thumbs.gfycat.com/FreePiercingHamster.webp")
        right top
        no-repeat
      `
        })
  }
    
  } 
}

function eliminarUnItem(id) {
  let producto = carrito.find((producto) => producto.id == id);
  let index = carrito.findIndex((elemento) => {
    if (elemento.id === producto.id) {
      return true
    }
  });
  if (producto.cantidad > 1) {
    carrito[index].decrease();
    carrito[index].ActualizarPrecioTotal();
  } else {
    carrito.splice(index, 1);
  }
  localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
  mostrarCarrito(carrito)
}

function borrarCarrito() {
  carrito = [];
  mostrarCarrito(carrito);

}

function  generarCupones(){
  let cup=[];
 descuentos.forEach((element)=>cup=[...cup,element.nombre + element.porcentaje]);
 return cup;
}

function cuponesSweetAlert() {
  let cuponesMostrados=generarCupones();
  let nodo = document.getElementById("btnCupones");
  nodo.addEventListener("click", () => {
    Swal.fire({
      title: 'Difruta de estos cupones',
      text: `${cuponesMostrados}`,
      width: 600,
      padding: '3em',
      color: 'black',
      background: '#fff',
      backdrop: `
    rgba(0,0,0,0.7)
    url("https://pa1.narvii.com/6547/6ff6730ac7ae0ceaac2c00664f0016d794af4859_hq.gif")
    left top
    no-repeat
  `
    })
  })
}




