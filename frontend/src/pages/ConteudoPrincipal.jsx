import { useEffect, useState } from "react";
import 'ldrs/waveform'  
import SliderCards from "../components/SliderCards";
import Card from "../components/Card";

export default function ConteudoPrincipal() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);
      setTimeout(() => {
      fetch('https://spotify-deploy-api.vercel.app/artistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
      }, 5000)
  },[])

    return(
        <div className="w-3/4 grid grid-cols-1 justify-items-start pl-7 pt-7">
         {isLoading ?
          <div className="flex flex-col justify-center items-center w-full font-bold gap-4">
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
          <SliderCards titulo="Rock">
            {artistas
            .filter( genero => genero.genres.includes("Rock"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
          <SliderCards titulo="Pop">
            {artistas
            .filter( genero => genero.genres.includes("Pop" || "Rap"))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0,5)
            .map(artista => (
                <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
          </>
  }
        </div>
    )
}