import {Link} from "react-router-dom"

let Feed = ({image,id})=>{
    return(
        <>
         <Link to={`/post/${id}`}>
                <img className="w-[320px] h-[300px] " src={image} alt="broken" />
         </Link>
        </>
    )
}
export default Feed;