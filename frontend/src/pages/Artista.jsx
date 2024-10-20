import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Artista() {

    const {id} = useParams()
    const [artista, setArtista] = useState({})
    useEffect(() => {
            const puxarArtista = async () => {
        try{
            const artista = await fetch(`https://spotify-deploy-api.vercel.app/artistas/${id}`);
            const resposta = await artista.json();
            setArtista(resposta);
            }
        catch (error) {
                console.error('Error fetching data:', error);
        }
    }
    puxarArtista();

    },[])
   
    
    return (
        <div className="bg-gray-900 rounded-md w-8/12 p-10">
            <div className="flex items-center mb-4 gap-5">
                <img src={artista.capa? artista.capa : '/capa.jpg'} alt="Capa do artista" className="w-[100px] h-[100px]"/>
                <h1 className="text-7xl font-bold">{artista.name}</h1>
            </div>
            <p>{artista.bio}</p>
        </div>
    )
}