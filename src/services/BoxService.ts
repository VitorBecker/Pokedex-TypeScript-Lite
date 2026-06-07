// # Camada de Persistência Local (node:fs/promises). 
// Aplica métodos funcionais validados pelo TS.


import type { PokemonResumo } from "../models/Pokemon.ts";

// let catalogo: PokemonResumo[] = []; 


export class CatalogoPokemon { 
  private pokemons: PokemonResumo[] = []; 
  adicionar(pokemon: PokemonResumo): void { 
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id); 
 
    if (jaExiste) { 
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`); 
      return; 
    } 
 
    this.pokemons.push(pokemon); 
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`); 
 
  } 
 
  listar(): void { 
    if (this.pokemons.length === 0) { 
      console.log("[AVISO] Catálogo vazio."); 
      return; 
    } 
 
    this.pokemons.forEach((pokemon) => { 
      console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(",")}` 
      ); 
    }); 
  } 
 
  remover(id: number): void { 
    const existe = this.pokemons.some((pokemon) => pokemon.id === id); 
 
    if (!existe) { 
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID."); 
      return; 
    } 
 
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id); 
    console.log("[OK] Pokémon removido do catálogo."); 
  } 
} 

// ENTENDO QUE ESSAS FUNÇÕES NÃO SÃO NECESSÁRIAS, POIS A CLASSE JÁ POSSUI ESSAS FUNÇÕES COMO MÉTODOS.
/* function adicionarAoCatalogo( 
    catalogo: PokemonResumo[], 
    pokemon: PokemonResumo 
): PokemonResumo[] { 
    // implementação: SOME..

}


function listarCatalogo(catalogo: PokemonResumo[]): void { 
    // implementação: FILTER ou FOREACH ...

}


function removerDoCatalogo( 
    catalogo: PokemonResumo[], 
    id: number 
): PokemonResumo[] { 
    // implementação: FILTER ou FIND..

}
 */