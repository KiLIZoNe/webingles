// Validación Básica del Formulario de Voluntariado
document.addEventListener('DOMContentLoaded', () => {
    // Manejo del envío del formulario de contacto
    const formularioContacto = document.querySelector('#contacto form');

    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación de los campos
        if (nombre === '' || correo === '' || mensaje === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            formularioContacto.reset(); // Limpia el formulario después de enviar
        }
    });

    // Modo oscuro
    const button = document.getElementById('toggleDarkMode');

    // Verifica si el botón existe para evitar errores
    if (button) {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const mode = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
            button.textContent = mode;
        });
    }
}); // Asegúrate de cerrar la función DOMContentLoaded aquí
