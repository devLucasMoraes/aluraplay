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

    const conexaoJson = await conexao.json();

    return conexaoJson;

}


export const conectaApi = {
    listaVideosJson,
    criaVideo
}