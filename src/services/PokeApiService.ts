
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


/* async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> { 
    //implementação
    try {
        const url = await https://pokeapi.co/api/v2/pokemon/nomeOuId
    } catch (erro) {
        console.error(null);
    }
}  */

import type { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`)
        if (!resposta.ok) {
            console.log("[ERRO] Pokémon não encontrado.");
            return null;
        }

        // const dados = await resposta.json();
        const dados: PokemonApiResponse = await resposta.json();

        const pokemonMapResumo: PokemonResumo = {
        id: dados.id,
        nome: dados.name,
        altura: dados.height,
        peso: dados.weight,
        tipos: dados.types.map((item) => item.type.name)
        };

        return pokemonMapResumo;

} catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
} 
}

