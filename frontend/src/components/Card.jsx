import { Link } from "react-router-dom";
import { generateRandomColor } from "../services/card-services";

function Card({_id, name, capa}) {
    
    const randomColor = generateRandomColor();

    return ( 

        <Link to={`/artistas/${_id}`}>
            <div className="w-36 h-36 m-5 flex flex-col justify-start items-center pt-3 relative rounded-md overflow-hidden" style={{backgroundColor: randomColor}}>
                <h1 className="w-3/4 h-7 text-white font-bold">{name}</h1>
                <img src={capa === "capa.jpg"? capa : "capa.jpg"} alt="Capa do Album" className="w-2/3 h-2/3 absolute bottom-0 -right-2 rounded-sm rotate-[25deg] translate-x-[18%] translate-y-[-2%]" />
            </div>
        </Link>
     );
}

export default Card;