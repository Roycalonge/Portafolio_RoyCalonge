const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname, '../')));

// Servir archivos estáticos desde la carpeta "assets"
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Rutas para otras páginas
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

app.get('/excel-solutions', (req, res) => {
    res.sendFile(path.join(__dirname, '../excel-solutions.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../projects.html'));
});

app.get('/soporte-tec', (req, res) => {
    res.sendFile(path.join(__dirname, '../soporte-tec.html'));
});

app.get('/web-design', (req, res) => {
    res.sendFile(path.join(__dirname, '../web-design.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});