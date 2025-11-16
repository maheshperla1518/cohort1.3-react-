import users from "../Users"
import UserDetails from "../Components/UserDetails";

let Requests = ()=>{
    return(
        <>
          <div className=" w-[550px] mx-auto mt-12">
            <h1 className="text-center text-4xl mt-9 font-bold mb-2">This is Users details page</h1>
            <p className="text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non natus sunt nam, atque accusantium nemo dolor ratione inventore sint molestiae at impedit ex beatae pariatur.</p>
          
          </div>
          <div className="py-8">
            {
              users.map((user)=><UserDetails name={user.name} desc={user.desc} image={user.image} prof={user.profession} username={user.username}/>)
            }
          </div>
        </>
    )
}
export default Requests;