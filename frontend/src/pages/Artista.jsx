import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { waveform } from 'ldrs' 

export default function Artista() {

    waveform.register();

    const {id} = useParams()
    const [artista, setArtista] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
            const puxarArtista = async () => {
        try{
            const artista = await fetch(`https://spotify-deploy-api.vercel.app/artistas/${id}`);
            const resposta = await artista.json();
            setArtista(resposta);
            }
        catch (error) {
                console.error('Error fetching data:', error);
        }
        finally {
            setIsLoading(false);
        }
    }
    puxarArtista();

    },[])
   
    
    return (
        <div className="bg-gray-900 rounded-md w-8/12 p-10">
        {isLoading ?
          <div className="flex flex-col flex-wrap justify-center items-center w-full font-bold gap-4">
            <p>Carregando...</p>
              <l-waveform
                size="55"
                stroke="3.5"
                speed="1"
                color="white" 
              ></l-waveform>
            </div>
          :
          <>
            <div className="flex items-center mb-4 gap-5">
                <img src={artista.capa? artista.capa : '/capa.jpg'} alt="Capa do artista" className="w-[100px] h-[100px]"/>
                <h1 className="text-7xl font-bold">{artista.name}</h1>
            </div>
            <p>{artista.bio}</p>
          </>
        }
        </div>
    )
}