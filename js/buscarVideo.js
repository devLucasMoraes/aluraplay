import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDaPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDaPesquisa);

    const lista = document.querySelector('[data-lista]')
    lista.innerHTML = " ";

    busca.forEach(element => {
        lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    });
}

const btnPesquisa = document.querySelector('[data-btn-pesquisa]');

btnPesquisa.addEventListener("click", evento => buscarVideo(evento))