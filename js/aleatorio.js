const nomes = ["Wesley", "Jucisvaldo", "Tonho", "Cleide", "Marcos", "Virginia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
