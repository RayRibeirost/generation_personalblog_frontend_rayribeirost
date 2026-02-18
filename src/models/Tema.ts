import type Postagem from "./Postagem";

export default interface Tema {
    id: number;
    description: string;
    post?: Postagem[] | null;
}