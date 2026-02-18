import type Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    username: string;
    email: string;
    password: string;
    photo: string;
    post?: Postagem[] | null
}