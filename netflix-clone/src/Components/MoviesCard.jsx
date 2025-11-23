import { Link } from "react-router-dom";

let MoviesCard = ({img,slug})=>{
    return(
        <>
            <Link to={`/details/${slug}`}>
                <div className="rounded-xl mt-2">
                    <img className="w-50 rounded-xl cursor-pointer" src={img} alt="" />
                </div>
            </Link>
        </>
    )
}
export default MoviesCard;