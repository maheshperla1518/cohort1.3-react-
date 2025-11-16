import { useState } from "react";

let Loader = ()=>{
    let [loaderStatus, setLoaderStatus] = useState(false);
    let loaderStatusHandler = ()=>{
        setLoaderStatus((prev)=>!prev)
    }
    return(
        <>
            <div className="w-[420px] mx-auto my-24 px-5 py-3 border rounded-2xl">
              <h1 className="text-center text-4xl font-bold mb-2">This is a simple button Loader App</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta fugit illo illum exercitationem animi?</p>
              <div className="flex gap-3 mt-3 justify-center mb-3">
                 <button onClick={loaderStatusHandler} className="bg-red-400 rounded-4xl px-8 py-2 cursor-pointer text-white hover:bg-red-800">
                   <div className="flex gap-2 items-center">
                     <div>{loaderStatus ? "Stop loading" : "Load"} Data</div>
                     { loaderStatus ? <div className="loader"></div> : "" }
                   </div>
                 </button>
              </div>
          </div> 
        </>
    )
}
export default Loader;
