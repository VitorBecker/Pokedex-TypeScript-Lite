// # Interfaces/Types e Classes de Entidade.
// Molde rigoroso dos atributos consumidos da API.

// # Camada de Integração Externa (fetch nativo). 
// Retorna Promises tipadas com Interfaces.


export interface PokemonResumo { 
id: number; 
nome: string; 
tipos: string[]; 
altura: number; 
peso: number; 
}

export interface PokemonApiResponse { 
id: number; 
name: string; 
height: number; 
weight: number; 
types: { 
type: { 
name: string;
}; 
}[]; 
} 
