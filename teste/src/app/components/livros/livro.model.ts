export interface Livro {
    id: number
    nome: string
    autor: string,
    paginas?: number,
    sinopse: string[],
    alugado?: boolean
}