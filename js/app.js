const form = document.querySelector('#formProducto');
const nombre = document.querySelector('#nombre');
const precio = document.querySelector('#precio');
const stock = document.querySelector('#stock');
const mensaje = document.querySelector('#mensaje');
const tablaProductos = document.querySelector('#tablaProductos');
form.addEventListener('submit', (event) => {
 event.preventDefault();
 const nombreProducto = nombre.value.trim();
 const precioProducto = Number(precio.value);
 const stockProducto = Number(stock.value);
 if (nombreProducto.length < 3) {
 mostrarMensaje('El nombre debe tener al menos 3 caracteres.', 'error');
 return;
 }
 if (precioProducto <= 0) {
 mostrarMensaje('El precio debe ser mayor que cero.', 'error');
 return;
 }
 if (stockProducto <= 0) {
 mostrarMensaje('El stock debe ser mayor a cero.', 'error');
 return;
 }
 agregarProducto(nombreProducto, precioProducto, stockProducto);
 mostrarMensaje('Producto agregado correctamente.', 'exito');
 form.reset();
 nombre.focus();
});
function agregarProducto(nombreProducto, precioProducto, stockProducto) {
 const fila = document.createElement('tr');
 fila.innerHTML = `
 <td>${nombreProducto}</td>
 <td>$${precioProducto}</td>
 <td>${stockProducto}</td>
 `;
 tablaProductos.appendChild(fila);
}
function mostrarMensaje(texto, tipo) {
 mensaje.textContent = texto;
 mensaje.className = tipo;
}
const formUsuarios = document.querySelector('#formUsuarios');
const usuarioNombre = document.querySelector('#usuarioNombre');
const usuarioEdad = document.querySelector('#usuarioEdad');
const usuarioCorreo = document.querySelector('#usuarioCorreo');
const usuarioMensaje = document.querySelector('#usuarioMensaje');
const tablaUsuarios = document.querySelector('#tablaUsuarios');

formUsuarios.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreVal = usuarioNombre.value.trim();
    const edadVal = Number(usuarioEdad.value);
    const correoVal = usuarioCorreo.value.trim();

    if (nombreVal === '') {
        mostrarMensajeUsuario('El nombre no puede estar vacío.', 'error');
        return;
    }

    if (usuarioEdad.value === '' || edadVal < 14) {
        mostrarMensajeUsuario('Debes ser mayor o igual a 14 años.', 'error');
        return;
    }

    if (!correoVal.includes('@')) {
        mostrarMensajeUsuario('El correo electrónico debe contener un "@".', 'error');
        return;
    }

    agregarUsuario(nombreVal, edadVal, correoVal);
    mostrarMensajeUsuario('¡Datos de usuario validados correctamente!', 'exito');
    formUsuarios.reset();
    usuarioNombre.focus();
});

function mostrarMensajeUsuario(texto, tipo) {
    usuarioMensaje.textContent = texto;
    usuarioMensaje.className = tipo;
}

function agregarUsuario(usuarioNombre, usuarioEdad, usuarioCorreo) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${usuarioNombre}</td>
    <td>${usuarioEdad}</td>
    <td>${usuarioCorreo}</td>
    `;
    tablaUsuarios.appendChild(fila);
}