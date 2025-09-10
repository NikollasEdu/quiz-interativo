const nomes = ["Juca", "Emerson", "Osvaldo", "Pipokinha", "Deolane", "Virginia"];

function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

const nome = aleatorio(nomes)