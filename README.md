# Pokédex TypeScript Lite

## Sobre o projeto 
O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript 
que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um 
catálogo local durante a execução do programa. 

## Objetivo 
Praticar os principais conceitos do Módulo 01:
- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban. 


## Tecnologias utilizadas
- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub 


## Pré-requisitos 
Antes de executar o projeto, é necessário ter instalado:
- Node.js
- npm
- Git
- tsx 

## Como instalar 

### Clone o repositório: 
```bash
git clone https://github.com/VitorBecker/Pokedex-TypeScript-Lite.git
```
> Acesse a pasta do projeto:
cd Pokedex-TypeScript-Lite

> Instale as dependências: 
npm install

> Como executar 
Execute o projeto em ambiente de desenvolvimento: 
npm run dev 


> Estrutura do projeto 

pokedex-typescript-lite/ 
│ 
├── src/ 
│   ├── main.ts
│   ├── controllers/ 
│   │   └── TerminalController.ts # implementação futura
│   │ 
│   ├── services/ 
│   │   ├── PokeApiService.ts 
│   │   └── BoxService.ts
│   │ 
│   ├── models/ 
│   │   ├── Pokemon.ts
│   │   └── CustomErrors.ts # implementação futura
│   │ 
│   └── utils/ 
│       └── textFormatters.ts # implementação futura 
│ 
├── pc_box.json # implementação futura
├── package-lock.json
├── README.md
├── tsconfig.json 
└── package.json

## Funcionalidades
- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Exemplos de execução
- Busca válida 


# Lista catálogo (vazio)
Entrada testada: `catalogo.listar()` antes de qualquer pokemon adicionado.
Saída obtida: [AVISO] Catálogo vazio.

# Busca válida
Entrada testada: `buscarPokemon("charmander")`
Saída obtida: [OK] charmander adicionado ao catálogo.

# Busca válida
Entrada testada: `buscarPokemon("pikachu")`
Saída obtida: [OK] pikachu adicionado ao catálogo.

# Duplicidade 
Entrada testada: `buscarPokemon("pikachu")` pela 2ª vez.
Saída obtida: [AVISO] pikachu já está no catálogo.

# Busca inválida 
Entrada testada: `buscarPokemon("superhomem")` 
Saída obtida: [ERRO] Pokémon não encontrado.

# Lista catálogo
Entrada testada: `catalogo.listar()` após pokemons adicionados.
Saída obtida: #25 - pikachu | Tipos: electric
              #4 - charmander | Tipos: fire

# Remoção
Entrada testada: `catalogo.remover(25)` 
Saída obtida: [OK] Pokémon removido do catálogo. 

# Remoção inválida
Entrada testada: `catalogo.remover(24)` 
Saída obtida: [AVISO] Nenhum Pokémon encontrado com esse ID. 

# Lista catálogo (após remoção do id 25)
Entrada testada: `catalogo.listar()`
Saída obtida: #4 - charmander | Tipos: fire


## Conceitos aplicados

# TypeScript 
Miniprojeto desenvolvido em modo estrito. A tipagem forte foi utilizada nos parâmetros e métodos da classe CatalogoPokemon, na função buscarPokemon, nas interfaces e nas funções assíncronas.

# Interface PokemonResumo 
PokemonApiResponse foi criada para mapear a estrutura da API pública. Já a interface PokemonResumo, é uma simplificação da interface anterior, mantendo apenas dados necessários e traduzindo para o pt-br.

# Fetch e async/await 
São realizadas requisições para a pokeAPI, de forma assíncrona, e o algoritmo garante que o código espere o restorno da API e sua conversão para JSON, antes de prosseguir com o mapeamento.

# Tratamento de erros 
Explique como o projeto lida com Pokémon inexistente ou erro de busca.
O try/catch é o responsável por isto, pois ele tenta localizar o pokemon na API, se não encontrar, apresenta mensagem de erro `console.log("[ERRO] Pokémon não encontrado.")`, também é apresentado erro caso a conexão falhe, catch: `console.log("[ERRO] Não foi possível buscar o Pokémon.")`.

# Métodos de array 
1. Foram usados na `classe CatalogoPokemon` 
- some (2x)
- forEach
- filter

2. Foi usado na `function buscarPokemon`
- map


# Classe CatalogoPokemon 
Explique quais atributos e métodos foram criados.

1. Classe inserida no `BoxService.ts`, possui os atributos da interface `PokemonResumo`.
2. Métodos:
**adicionar** - Valida se já existe o pokemon e insere no array, apresenta erro de duplicidade caso já exista o pokemon.
**listar** - Lista os pokemons, desde que a lista não esteja vazia.
**remover** - Remove o pokemon desde que ele exista, apresenta erro caso o ID não exista.

  

# Organização do Kanban
Link do Kanban: https://github.com/users/VitorBecker/projects/1


Branches utilizadas
- main 
- feat/pokedex 
- docs/readme 

Melhorias futuras
- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express 