// frontend/script.js

// Función para obtener datos del backend
async function obtenerDatosDelBackend() {
    try {
        // Hacer una solicitud GET al backend
        const respuesta = await fetch('/api/mensaje');
        
        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos del backend');
        }

        // Convertir la respuesta a JSON
        const datos = await respuesta.json();

        // Mostrar los datos en la página
        mostrarDatosEnPagina(datos);
    } catch (error) {
        console.error('Error:', error);
        mostrarErrorEnPagina('Hubo un error al cargar los datos.');
    }
}

// Función para mostrar los datos en la página
function mostrarDatosEnPagina(datos) {
    // Seleccionar el elemento donde se mostrarán los datos
    const contenedorMensaje = document.getElementById('mensaje');

    // Actualizar el contenido del elemento con los datos recibidos
    if (contenedorMensaje) {
        contenedorMensaje.textContent = datos.mensaje;
    }
}

// Función para mostrar un mensaje de error en la página
function mostrarErrorEnPagina(mensaje) {
    // Seleccionar el elemento donde se mostrará el error
    const contenedorError = document.getElementById('error');

    // Mostrar el mensaje de error
    if (contenedorError) {
        contenedorError.textContent = mensaje;
    }
}

// Llamar a la función para obtener datos cuando la página cargue
document.addEventListener('DOMContentLoaded', obtenerDatosDelBackend);