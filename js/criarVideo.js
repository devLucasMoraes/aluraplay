import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario');


async function criaVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector('[data-imagem').value;
    const url = document.querySelector('[data-url').value;
    const titulo = document.querySelector('[data-titulo').value;
    const descricao = '2.508.296 visualizações';
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem)
    
        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criaVideo(evento))