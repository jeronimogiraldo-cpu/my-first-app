// Obtener los elementos HTML
const contador = document.getElementById("contador");
const tituloEvento = document.getElementById("tituloEvento");
const campoTitulo = document.getElementById("nuevoTitulo");

const botonClick = document.getElementById("botonClick");
const botonReiniciar = document.getElementById("botonReiniciar");

// Variable para almacenar los clics
let clicks = 0;

// Registrar un evento
function incrementarContador() {
    clicks++;
    actualizarContador();
}

// Reiniciar el contador a cero
function reiniciarContador() {
    clicks = 0;
    actualizarContador();
}

// Actualizar el número mostrado en pantalla
function actualizarContador() {
    contador.textContent = clicks;

    // Animación del número
    contador.style.transform = "scale(1.12)";

    setTimeout(() => {
        contador.style.transform = "scale(1)";
    }, 150);
}

// Cambiar el título en tiempo real
campoTitulo.addEventListener("input", function () {
    const texto = campoTitulo.value.trim();

    tituloEvento.textContent = texto || "Contador de Eventos";
});

// Conectar los botones con sus funciones
botonClick.addEventListener("click", incrementarContador);

botonReiniciar.addEventListener("click", reiniciarContador);