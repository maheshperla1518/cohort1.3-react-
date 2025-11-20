import {useParams} from "react-router-dom";
import movies from "../MockData/moviesData";

let Details = ()=>{
    let {slug} = useParams();
    let movie = movies.find((movie)=>movie.slug == slug);
    return(
        <>
            <div className="">
                <p>{slug}</p>
                <p>{movie.description}</p>
            </div>
        </>
    )
} 
export default Details;