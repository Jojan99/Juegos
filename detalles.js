document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const vehiculoId = parseInt(urlParams.get('id'));

    if (!isNaN(vehiculoId)) {
        const vehiculo = baseDeDatos.find(item => item.id === vehiculoId);

        if (vehiculo) {
            const nombreElement = document.getElementById('nombre');
            const descripcionElement = document.getElementById('descripcion');
            const precioElement = document.getElementById('precio');
            const imagenElement = document.getElementById('imagen');

            nombreElement.textContent = vehiculo.nombre;
            descripcionElement.textContent = vehiculo.descripcion;
            precioElement.textContent = `$${vehiculo.precio.toLocaleString()}`;
            imagenElement.src = vehiculo.imagen;
        } else {
            alert('Vehículo no encontrado');
        }
    } else {
        alert('ID de vehículo no válido');
    }
});
