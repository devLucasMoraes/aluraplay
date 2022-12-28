async function listaVideosJson() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoJson = await conexao.json();
    console.log(conexaoJson);
    return conexaoJson;
}


export const conectaApi = {
    listaVideosJson
}