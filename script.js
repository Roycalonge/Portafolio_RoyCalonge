// Función para obtener datos del backend con manejo de errores mejorado
async function obtenerDatosDelBackend() {
    try {
        const respuesta = await fetch('https://portafolioroy-calonge.onrender.com/api/mensaje');

        
        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }

        // Convertir la respuesta a JSON
        const datos = await respuesta.json();

        // Mostrar los datos en la página
        mostrarDatosEnPagina(datos);
    } catch (error) {
        console.error('Error:', error);
        mostrarErrorEnPagina(`Hubo un error: ${error.message}`);
    }
}

// Función para mostrar los datos en la página
function mostrarDatosEnPagina(datos) {
    const contenedorMensaje = document.getElementById('mensaje');
    if (contenedorMensaje) {
        contenedorMensaje.textContent = datos.mensaje || 'No hay mensaje disponible.';
    }
}

// Función para mostrar un mensaje de error en la página
function mostrarErrorEnPagina(mensaje) {
    const contenedorError = document.getElementById('error');
    if (contenedorError) {
        contenedorError.textContent = mensaje;
    }
}

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', obtenerDatosDelBackend);

// Opcional: Actualizar datos cada 30 segundos
setInterval(() => {
    fetch('https://portafolioroy-calonge.onrender.com/api/mensaje')
        .catch(console.error);
}, 10 * 60 * 1000);
