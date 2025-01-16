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

// Alta de producto
document
  .getElementById("formProducto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nuevoProducto = {
      titulo: document.getElementById("titulo").value,
      descripcion: document.getElementById("descripcion").value,
      precio: parseFloat(document.getElementById("precio").value),
      ubicacion: document.getElementById("ubicacion").value,
      imagen: "images/dragodevs_logo.jpeg", // Imagen predeterminada (puedes agregar un campo para cargar imágenes)
    };

    productos.push(nuevoProducto);
  });

// Función para renderizar las tarjetas
function renderizarProductos() {
  const contenedor = document.querySelector(".album .container .row");
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
