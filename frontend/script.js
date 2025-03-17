// frontend/script.js
fetch('/api/mensaje')
    .then(response => response.json())
    .then(data => {
        console.log(data.mensaje); // Muestra "Hola desde el backend!"
    })
    .catch(error => console.error('Error:', error));