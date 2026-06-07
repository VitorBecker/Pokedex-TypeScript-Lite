// # Ponto de entrada. Instancia os serviços, injeta as dependências e 
// inicia o loop principal do menu.

import { CatalogoPokemon } from "./services/BoxService.js";
import { buscarPokemon } from "./services/PokeApiService.js";


async function main() { 
 
  const catalogo = new CatalogoPokemon(); 
  catalogo.listar(); 
  
  const pikachu = await buscarPokemon("pikachu"); 
 
  if (pikachu !== null) { 
    catalogo.adicionar(pikachu); 
  } 
 
  const charmander = await buscarPokemon("charmander"); 
 
  if (charmander !== null) { 
    catalogo.adicionar(charmander); 
  } 
 
  const pikachuDuplicado = await buscarPokemon("pikachu"); 
 
  if (pikachuDuplicado !== null) { 
    catalogo.adicionar(pikachuDuplicado); 
  } 
 
  await buscarPokemon("superhomem"); 
  catalogo.listar(); 
  catalogo.remover(25);
  catalogo.remover(24); 
  catalogo.listar(); 
 
} 
 
main();