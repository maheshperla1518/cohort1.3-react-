import { useEffect, useState } from "react";

let Home = ()=>{
    let [data,setData] = useState(0);
    useEffect(()=>{
        console.log('Home Mounted');
        return()=>{
            console.log('Home unmounted')
        }
    },[])
    return(
        <>
            <div className="w-[400px] mx-auto my-24 text-center">
                <h1 className="text-2xl font-bold text-center mb-2">This is home page counter: {data}</h1>
                <button onClick={()=>{
                    setData((data)=>data+1);
                }} className="px-4 py-2 mt-2 rounded-xl text-white bg-black font-medium text-center">Update</button>
            </div>
        </>
    )
}
export default Home;