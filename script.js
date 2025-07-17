console.log("Carga exitosa - Malla UGM");

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.innerHTML += `
        <h2>Universidad Gabriela Mistral</h2>
        <div class="controls">
            <button>Prueba botón</button>
        </div>
    `;
});
