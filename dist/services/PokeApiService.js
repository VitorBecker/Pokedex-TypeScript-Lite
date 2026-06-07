/*
Criar uma função assíncrona para buscar Pokémon por nome ou ID. Exemplo de assinatura:

A função deverá: - - - - - -
    receber uma string;
    usar fetch;
    consultar a PokeAPI;
    tratar erro quando o Pokémon não existir;
    retornar null em caso de erro;
    retornar um objeto PokemonResumo em caso de sucesso.
O TypeScript permite anotar o retorno de funções assíncronas com Promise<T>, o que se
conecta diretamente ao uso de async/await estudado na turma. (TypeScript)
*/
export async function buscarPokemon(nomeOuId) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (!resposta.ok) {
            console.log("[ERRO] Pokémon não encontrado.");
            return null;
        }
        // const dados = await resposta.json();
        const dados = await resposta.json();
        const pokemonMapResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };
        return pokemonMapResumo;
    }
    catch (erro) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
}
//# sourceMappingURL=PokeApiService.js.map