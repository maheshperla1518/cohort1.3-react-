import { useState } from "react";
 
let User = ()=>{
    let [user, setUser] = useState({
    name: "Aarav Patel",
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=600&w=600",
    requestSend : false,
  });
   
  let requestHandler = ()=>{
    setUser((prev)=>({
        ...prev,
        requestSend : true,
    }))
  }

    return(
        <>
           <div className=" w-[400px] shadow mx-auto my-6 rounded-xl px-4 py-2 bg-amber-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="h-14 w-14 rounded-full object-cover" src={user.image} alt="" />
                            <div className="text-sm font-medium text-neutral-600">
                                <p>{user.name}</p>
                                <p>{user.profession}</p>
                            </div>
                    </div>
                        <button onClick={requestHandler} className="text-sm font-medium text-neutral-600 cursor-pointer">{user.requestSend ? "Following" : "Follow"}</button>
                </div>
            </div>
        </>
    )
}
export default User;