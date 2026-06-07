// # Ponto de entrada. Instancia os serviços, injeta as dependências e 
// inicia o loop principal do menu.
import { CatalogoPokemon } from "./services/BoxService";
import { buscarPokemon } from "./services/PokeApiService";
async function main() {
    const catalogo = new CatalogoPokemon();
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
    await buscarPokemon("pokemon-inexistente");
    catalogo.listar();
    catalogo.remover(25);
    catalogo.listar();
}
main();
//# sourceMappingURL=main.js.map