import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {

    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta("Você precisa estar logado", 'info')
            navigate("/")
        }
    }, [usuario.token])

  return (
    <div className="flex justify-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          src="https://i.imgur.com/ZZFAmzo.jpg"
          alt="Capa do perfil"
          className="w-full h-72 object-cover border-b-8 border-white"
        />
        <img src={usuario.photo} alt={`Foto de perfil de ${usuario.username}`} className="rounded-full w-56 mx-auto -mt-32 border-8 border-white relative z-10 "/>
        <div className="relative -mt-24 h-72 flex flex-col bg-sky-500 text-2xl items-center justify-center">
          <p>Nome: {usuario.username}</p>
          <p>Email: {usuario.user}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil