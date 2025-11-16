import users from "../Users";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Feed from "../Components/Feed"

let UserCard = ()=>{
    let {username} = useParams();
    let user = users.find(user=>user.username == username);
    if(!user) return (<ErrorPage/>)
    return(
        <>
          <div className="flex  p-5 gap-4 items-center mx-auto my-14 w-[600px]">
                <img src={user.image} className="h-32 w-32 rounded-full" alt="borken" />
                <div>
                    <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">{username}</p>
                    <button className="bg-neutral-600 text-white rounded-2xl px-4 py-2">Following</button>
                    <button className="bg-neutral-600 text-white rounded-2xl px-4 py-2">Message</button>
                </div>
                <div className="flex items-center mt-3 justify-between">
                    <p className="font-xl">122 Posts</p>
                    <p className="font-xl">{user.followers} followers</p>
                    <p className="font-xl">{user.following} following</p>
                </div>
                <p className="mt-2">{user.name}</p>
                <p className="mt-1">{user.profession}</p>
                <p className="text-neutral-500">{user.desc}</p>
                </div>
          </div>

          <div className="">
            <div className="flex flex-wrap w-[990px] mx-auto items-center justify-center mb-18 gap-0.5">
                {
                    user.posts.map(post=><Feed image={post.image} id={post.id} />)
                }
            </div>
          </div>


        </>
    )
}
export default UserCard;