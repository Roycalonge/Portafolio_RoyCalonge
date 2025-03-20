// Funcionalidad para mostrar/ocultar detalles en Mis Proyectos
function toggleDetalles(btn) {
    const detalles = btn.nextElementSibling;
    detalles.classList.toggle("activo");

    if (detalles.classList.contains("activo")) {
        btn.innerHTML = '<i>➖</i> Ver menos detalles';
    } else {
        btn.innerHTML = '<i>➕</i> Ver más detalles';
    }
}