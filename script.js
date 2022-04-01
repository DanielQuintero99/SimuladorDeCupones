obtenerProductos();
cuponesSweetAlert();
cargarCarrito();
validarCupones();
let carrito = cargarCarrito();
console.log(carrito);
let misCupones = "";

   
function loader(){
  let loader = document.getElementById("gridProductos");
  loader.innerHTML = `<div class="d-flex flex-column align-items-center m-5">
  <strong class="fs-1">Cargando Productos...</strong>
  <div class="spinner-border ms-auto" style="width: 20rem; height: 20rem; role="status" aria-hidden="true"></div>
</div>`;
;
}
function cargarCarrito() {
  let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
  console.log(contenidoEnStorage);
  if (contenidoEnStorage) {
    let array =[];
    contenidoEnStorage.forEach((elemento) => {
      let producto = new Producto(elemento,elemento.cantidad);
      producto.id = elemento.id;
      producto.nombre = elemento.nombre;
      producto.precio = elemento.precio;
      producto.precioTotal = elemento.precioTotal;
      array = [...array, producto];
    });
    // contenidoEnStorage.forEach((element) => {
    //   let producto = new Producto(element.nombre,element.cantidad,element.precioTotal,element.id);
    //   array=[...array,producto];
    // });
    return array;
  } else {
    return [];
  }
}

async function obtenerProductos() {
  try{
    await loader(); 
let data = await fetch("https://fakestoreapi.com/products");
  let productos = await data.json(); 
    loaderOff(); 
    await mostrarAddProductos(productos);   
  }
  catch(error){    
    loaderOff(); 
    let nodoError = document.getElementById("gridProductos"); 
    nodoError.innerHTML = `<div class="d-flex flex-column align-items-center m-5"> 
    <strong class="fs-1">Error al cargar los productos</strong> 
    `;
    let botonMostrarProductosLocales = document.createElement("button");
    botonMostrarProductosLocales.setAttribute("class", "btn btn-primary");
    botonMostrarProductosLocales.innerHTML = "Mostrar Productos Locales";
    nodoError.appendChild(botonMostrarProductosLocales);
    botonMostrarProductosLocales.addEventListener("click", async () => {
      data=await fetch("./data/data.json"); 
    productos=await data.json();    
    botonMostrarProductosLocales.remove(); 
    nodoError.innerHTML = "";   
    await mostrarAddProductos(productos);    
    })    
  }
}

function loaderOff(){
  let loader = document.getElementById("gridProductos");
  loader.innerHTML = "";
}

function mostrarAddProductos(data) {  
  const nodoProductos = document.getElementById("gridProductos");
  data.forEach((opcion) => {
    const card = document.createElement("div")
    card.setAttribute("class", "card");
    card.innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center">
            <h2 class="card-title ">${opcion.title}</h2>
            <div class="ContenedorImagen">
            <img class="img-fluid" style="height: 250px; width: 250px;" src="${opcion.image}">
            </div>
            <p class="card-text text-justify">${opcion.description}</p>
            <p class="card-text text-center">${opcion.price}$</p>
            <a id="añadir${opcion.id}" class="btn btn-success btnAñadir">Añadir</a>
            </div>`;
    nodoProductos.appendChild(card);
    const btnAdd = document.getElementById(`añadir${opcion.id}`);
    btnAdd.addEventListener("click", () => agregarAlCarrito(opcion.id,data));
    btnAdd.addEventListener("click", () => mostrarToast(opcion.title) );
  });
}

function agregarAlCarrito(idProducto,datos) {

  let itemCarrito = carrito.find((elemento) => elemento.id == idProducto);
  
  if (itemCarrito) {
    let mapped=carrito.map((elemento) => elemento.id);
    console.log(mapped);
    let index = mapped.findIndex((elemento) => elemento === itemCarrito.id);
    carrito[index].add();
    carrito[index].ActualizarPrecioTotal();
    
  } else {
    let agregar=new Producto(datos[idProducto-1],1);
    carrito=[...carrito,agregar];
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




