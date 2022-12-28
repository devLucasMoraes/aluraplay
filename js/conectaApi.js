const uri = 'http://localhost:3000/videos'
async function listaVideosJson() {
    const conexao = await fetch(uri);
    const conexaoJson = await conexao.json();
    return conexaoJson;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(uri, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok) {
        throw new Error("Não foi possivel enviar video")
    }

    const conexaoJson = await conexao.json();

    return conexaoJson;

}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`${uri}?q=${termoDeBusca}`);
    const conexaoJson = conexao.json();

    return conexaoJson;
}


export const conectaApi = {
    listaVideosJson,
    criaVideo,
    buscaVideo
}