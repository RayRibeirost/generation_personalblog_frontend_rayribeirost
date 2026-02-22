/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom"
import CardPostagem from "../cardpostagem/CardPostagem"
import { useContext, useEffect, useState } from "react"
import type Postagem from "../../../models/Postagem"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar } from "../../../services/Service"
import { SyncLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function ListaPostagem() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [postagem, setPostagem] = useState<Postagem[]>([])
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarPostagem()
    }, [postagem.length])

    async function buscarPostagem() {
        try {
            setIsLoading(true)
            await buscar('/postagens', setPostagem, { headers: { Authorization: token } })
        } catch(error: any) {
            if(error.toString().includes('401')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <>
        {
            isLoading
            &&
            (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader color="#312e81" size={32}/>
                </div>
            )
        }

        <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col mx-2">

                {
                    (!isLoading && postagem.length === 0) 
                    &&
                    (
                        <span  className="text-3xl text-center my-8">
                            Nenhuma postagem foi encontrada!
                        </span>
                    ) 
                }

                <div className="container mx-auto my-4 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        postagem.map((post) => (
                            <CardPostagem key={post.id} postagem={post} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default ListaPostagem