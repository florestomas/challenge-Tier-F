let productos = [
  {
    titulo: "Producto 1",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices sodales egestas. Cras fringilla a lacus vel efficitur. Duis aliquet arcu in finibus molestie. Phasellus vel venenatis enim. Vestibulum a.",
    precio: 22,
    imagen: "images/dragodevs_logo.jpeg",
  },
  {
    titulo: "Producto 2",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin dui ut commodo efficitur. Phasellus tincidunt velit eget sapien sodales, vel vehicula odio dictum. Phasellus ullamcorper neque ut orci tincidunt.",
    precio: 22,
    imagen: "images/dragodevs_logo.jpeg",
  },
  {
    titulo: "Producto 3",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a rutrum ligula, ut luctus lorem. Proin metus nisl, faucibus nec fringilla non, dapibus quis ante. Morbi facilisis tortor id egestas.",
    precio: 22,
    imagen: "images/dragodevs_logo.jpeg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const formProducto = document.getElementById("formProducto");

  formProducto.addEventListener("submit", function (event) {
    // Evita que la página se recargue
    event.preventDefault();

    // Captura los datos del formulario
    const nuevoProducto = {
      titulo: document.getElementById("titulo").value,
      descripcion: document.getElementById("descripcion").value,
      precio: parseFloat(document.getElementById("precio").value),
      ubicacion: document.getElementById("ubicacion").value,
    };

    console.log(nuevoProducto);
    // Agrega el nuevo producto al array
    productos.push(nuevoProducto);

    // Recarga las cards
    renderizarProductos();

    // Cierra el modal
    $("#formModal").modal("hide");

    // Limpia el formulario
    formProducto.reset();
  });
});

// Función para renderizar las tarjetas
function renderizarProductos() {
  const contenedor = document.querySelector(".album .container .row");

  // Limpia el contenido previo del contenedor
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.innerHTML = `
          <div class="card mb-4">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
            <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="btn btn-primary">Añadir al carrito</a>
                <span>Precio: $${producto.precio} USD</span>
              </div>
            </div>
          </div>
        `;
    contenedor.appendChild(card);
  });
}

// Llamamos a la función cuando la página se carga
document.addEventListener("DOMContentLoaded", renderizarProductos);
