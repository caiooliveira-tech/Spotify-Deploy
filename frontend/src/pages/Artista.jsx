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
        <div>
            <h1>{artista.name}</h1>
            <p>{artista.bio}</p>
        </div>
    )
}