import { useEffect, useState } from "react";
import Card from "./components/Card"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import SliderCards from "./components/SliderCards";
import ConteudoPrincipal from "./pages/ConteudoPrincipal";
import 'ldrs/waveform'

function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);
      setTimeout(() => {
      fetch('https://spotify-deploy-api.vercel.app/novoArtistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
      }, 5000)
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <ConteudoPrincipal>
          {isLoading ?
          <div className="flex flex-col justify-center items-center w-full font-bold gap-4">
            <p>Carregando...</p>
              <l-waveform
                size="55"
                stroke="3.5"
                speed="1"
                color="black" 
              ></l-waveform>
            </div>
          :
          <>
          <SliderCards titulo="Rock">
            {artistas
            // .filter( genero => genero.genres.includes("Rock"))
            // .sort((a, b) => a.name.localeCompare(b.name))
            // .slice(0,5)
            .map(artista => (
              <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
          <SliderCards titulo="Pop">
            {artistas
            // .filter( genero => genero.genres.includes("Pop" || "Rap"))
            // .sort((a, b) => a.name.localeCompare(b.name))
            // .slice(0,5)
            .map(artista => (
              <Card key={artista._id} {...artista}/>
            ))}
          </SliderCards>
          </>
  }
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
