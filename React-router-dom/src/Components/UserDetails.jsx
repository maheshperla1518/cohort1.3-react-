import {Link} from "react-router-dom";

let UserDetails = ({image,name,prof,username})=>{
    return(
        <>
          <Link to={"/"+username} className="cursor-pointer">
            <div className="w-[550px] px-4 py-2 flex items-center shadow bg-purple-50 mx-auto mb-2 rounded-xl hover:bg-blue-50 transition">
                <div className="flex gap-3">
                    <img className="h-14 w-14 rounded-full" src={image} alt="" />
                    <div className="text-base font-medium text-neutral-600">
                    <p>{name}</p>
                    <p>{prof}</p>
                </div>
                </div>
            </div>
          </Link>
        </>
    )
}
export default UserDetails;