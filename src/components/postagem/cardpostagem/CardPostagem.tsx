import { Link } from "react-router-dom";
import type Postagem from "../../../models/Postagem";

interface CardPostagemProps {
    postagem: Postagem
}

function CardPostagem({ postagem }:  CardPostagemProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex 2-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            src={
              postagem.user?.photo ||
              "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo=w240-h480-rw"
            }
            alt={postagem.user?.username}
            onError={(e) =>
              (e.currentTarget.src =
                "https://play-lh.googleusercontent.com/PfOLuH_dQOHO68PpuKcNi0lwuglClpVIthdngIVYxJZ2vkEFkOfnS4k8u6j0_W56zRo=w240-h480-rw")
            }
            className="h-12 w-12 rounded-full border-2 border-indigo-900"
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.user?.username}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.title}</h4>
          <p>{postagem.text}</p>
          <p>{postagem.theme?.description}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.post_date))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
