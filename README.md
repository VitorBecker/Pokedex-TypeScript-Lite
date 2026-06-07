# **👾 Pokédex TypeScript Lite**


## **📌 Sobre o Projeto**

O **Pokédex TypeScript Lite** é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon em uma API pública, a **PokeAPI**.
Ele organiza grandes dados em formato simplificado e os organiza e armazena em um catálogo local durante a execução do programa.

O **Pokédex TypeScript Lite** foi desenvolvido como o mini-projeto avaliativo do curso de desenvolvedor Back-End Node.js.


### **🎯 Objetivos de Aprendizado**

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


## **🛠️ Tecnologias Utilizadas**

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub 


## **📋 Pré-requisitos**

Antes de executar o projeto, é necessário ter instalado:

- Node.js8
- npm
- Git


## **🚀 Como Instalar e Executar**

Siga o passo a passo abaixo para rodar o projeto localmente em sua máquina:

### **1\. Clonar o repositório:**
```bash
git clone https://github.com/VitorBecker/Pokedex-TypeScript-Lite.git
```
### **2\. Acessar a pasta do projeto:**
```bash
cd Pokedex-TypeScript-Lite
```

### **3\. Instalar as dependências de desenvolvimento:**
```bash
npm install
```

### **4\. Executar o projeto em modo de desenvolvimento:**
```bash
npm run dev
```


## **📂 Estrutura do Projeto**

```bash
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
```


## **⚙️ Funcionalidades**

* \[x\] Buscar Pokémon por nome ou ID diretamente da PokeAPI.  
* \[x\] Tratar erros de forma amigável quando um Pokémon não for localizado na base remota.  
* \[x\] Mapear dados JSON complexos da API externa para um formato de objeto local simplificado.  
* \[x\] Adicionar Pokémons consultados em um catálogo em memória durante o ciclo do app.  
* \[x\] Impedir registros duplicados de Pokémon com base no mesmo ID.  
* \[x\] Listar todos os elementos guardados no catálogo formatados de maneira legível.  
* \[x\] Remover Pokémons cadastrados utilizando seu ID identificador único.  
* \[x\] Centralizar mensagens operacionais legíveis e padronizadas no terminal.



## **🖥️ Exemplos de Execução (Roteiro de Testes)**

Abaixo estão testes realizados no terminal através do fluxo automatizado, implementado no `main.ts`:

### **1\. Listagem inicial (Catálogo vazio)**

* **Ação executada:** Chamada de catalogo.listar() antes de adicionar pokemons na lista.  
* **Saída obtida:**  
  \[AVISO\] Catálogo vazio.

### **2\. Busca válida (Adicionar Pikachu)**

* **Ação executada:** Busca por "pikachu" via API e inserção no catálogo.  
* **Saída obtida:** \[OK\] pikachu adicionado ao catálogo.

### **3\. Busca válida (Adicionar Charmander)**

* **Ação executada:** Busca por "charmander" via API e inserção no catálogo.  
* **Saída obtida:** \[OK\] charmander adicionado ao catálogo.

### **4\. Validação de Duplicidade (Pikachu)**

* **Ação executada:** Tentativa de adicionar o "pikachu" novamente.  
* **Saída obtida:** \[AVISO\] pikachu já está no catálogo.

### **5\. Busca por Pokémon inexistente**

* **Ação executada:** Busca por "superhomem".
* **Saída obtida:** \[ERRO\] Pokémon não encontrado.

### **6\. Listar Catálogo preenchido**

* **Ação executada:** Execução de catalogo.listar() com itens cadastrados.  
* **Saída obtida:**
```Bash
#25 - pikachu | Tipos: electric
#4 - charmander | Tipos: fire
```

### **7\. Remoção  válida**

* **Ação executada:** Execução de catalogo.remover(25) para excluir o Pikachu.  
* **Saída obtida:** \[OK\] Pokémon removido do catálogo.

### **8\. Tentativa de Remoção Inválida**

* **Ação executada:** Execução de catalogo.remover(24) (ID inexistente na lista).  
* **Saída obtida:** \[AVISO\] Nenhum Pokémon encontrado com esse ID.

### **9\. Listar atualizado, após remoção**

* **Ação executada:** Execução de catalogo.listar() final.  
* **Saída obtida:**
```bash
#4 - charmander | Tipos: fire
```


## **🧠 Conceitos Aplicados**

### **TypeScript**

Miniprojeto desenvolvido em modo estrito. A tipagem forte foi utilizada nos parâmetros e métodos da classe CatalogoPokemon, na função buscarPokemon, nas interfaces e nas funções assíncronas.

### **Interface PokemonResumo e PokemonApiResponse**

PokemonApiResponse foi criada para mapear a estrutura da API pública. Já a interface PokemonResumo, é uma simplificação da interface anterior, mantendo apenas dados necessários e traduzindo para o pt-br.

### **Fetch e async/await**

São realizadas requisições para a pokeAPI, de forma assíncrona, e o algoritmo garante que o código espere o restorno da API e sua conversão para JSON, antes de prosseguir com o mapeamento.

### **Tratamento de erros**

O try/catch é o responsável por isto, pois ele tenta localizar o pokemon na API, se não encontrar, apresenta mensagem de erro `console.log("[ERRO] Pokémon não encontrado.")`, também é apresentado erro caso a conexão falhe, catch: `console.log("[ERRO] Não foi possível buscar o Pokémon.")`.


### **Métodos de Array**

1. Foram usados na `classe CatalogoPokemon` 
* **some (2x)**
* **forEach**
* **filter**

2. Foi usado na `function buscarPokemon`
* **map**


### **Classe CatalogoPokemon**

1. Classe inserida no `BoxService.ts`, possui os atributos da interface `PokemonResumo`.
2. Métodos:
* **adicionar** - Valida se já existe o pokemon e insere no array, apresenta erro de duplicidade caso já exista o pokemon.
* **listar** - Lista os pokemons, desde que a lista não esteja vazia.
* **remover** - Remove o pokemon desde que ele exista, apresenta erro caso o ID não exista.


## **🗃️ Planejamento e Kanban**

O fluxo de progresso das demandas do projeto foi estruturado utilizando as diretivas de agilidade em um quadro de tarefas:

* **Link do Kanban:** [Projeto Kanban \- GitHub Projects](https://github.com/users/VitorBecker/projects/1)


### **Branches Utilizadas**
- main 
- feat/pokedex 
- docs/readme 

## **🔮 Melhorias Futuras**

* \[ \] Criar menu interativo no terminal.  
* \[ \] Salvar catálogo em arquivo JSON.  
* \[ \] Exibir HP, ataque e defesa.  
* \[ \] Criar filtros por tipo de Pokémon.
* \[ \] Criar uma API própria com Express.
