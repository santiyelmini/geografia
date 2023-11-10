
let temas = [];

async function obtenerTemas() {
    const response = await fetch("./js/temas.json");
    const data = await response.json();
    temas = data;
    mostrarTemas(temas);
}

obtenerTemas();

const temasContenedor = document.querySelector(".temas-container")

function mostrarTemas() {
    temas.forEach((tema) => {
        const temaElemento = document.createElement("div")
        temaElemento.classList.add("tema");
        temaElemento.innerHTML = `            
        <a class="tema" href="${tema.url}">
            <h3 class="tema-nombre">${tema.nombre}</h3>
        </a>`;
        temasContenedor.append(temaElemento);
    })
}
mostrarTemas()

const formularioBuscar = document.querySelector(".buscar-tema");
formularioBuscar.addEventListener("submit", buscarTema);

function buscarTema(evento) {
    evento.preventDefault();
    const inputBuscar = document.querySelector(".buscar-input");
    const valorBuscar = inputBuscar.value.trim().toLowerCase();
    const temasFiltrados = temas.filter((tema) =>
      tema.nombre.toLowerCase().includes(valorBuscar)
    );
    temasContenedor.innerHTML = "";
    if (temasFiltrados.length === 0) {
      alert("No hay resultados");
      mostrarTemas();
    } else {
    temasFiltrados.forEach((tema) => {
        const temaElemento = document.createElement("div");
        temaElemento.classList.add("tema");
        temaElemento.innerHTML = `
        <a class="tema" href="${tema.url}">
            <h3 class="tema-nombre">${tema.nombre}</h3>
        </a>`;
        temasContenedor.append(temaElemento);
    });
}
}