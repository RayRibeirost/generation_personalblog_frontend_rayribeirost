import type Tema from "./Tema";
import type Usuario from "./Usuario";
import type UsuarioLogin from "./UsuarioLogin";

export default interface Postagem {
    id: number;
    title: string;
    text: string;
    post_date: string;
    theme: Tema | null;
    user: Usuario | UsuarioLogin | null;
}