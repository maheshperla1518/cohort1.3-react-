import { useState } from "react";

function Alert(){
    let [alertStatus, setalertStatus] = useState(false);
    let alertStatusHandler = ()=>{
        setalertStatus((prev)=>!prev);
    }
    return(
        <>
            {
                alertStatus ? <div className="rounded-2xl px-4 py-2 text-xl bg-neutral-300 absolute top-8 right-8">react alert app</div> : ""
            }
            <div className="w-[420px] mx-auto my-24 px-5 py-3 border rounded-2xl">
              <h1 className="text-center text-4xl font-bold mb-2">This is a React Alert App</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta fugit illo illum exercitationem animi?</p>
              <div className="flex gap-3 mt-3 justify-center mb-3">
                 <button onClick={alertStatusHandler} className="bg-purple-300 rounded-4xl px-8 py-2 cursor-pointer hover:bg-red-500">{alertStatus ? "Hide" : "Show"} Alert</button>
              </div>
            </div> 
        </>
    )
}
export default Alert;