export interface Usuario {
    success: never[];
    id?: number,
    nome: string,
    email: string
    senha: string,
    access_token: string
}