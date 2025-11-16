import { useState } from "react";

let Counter = ()=>{
    let [counter, SetCounter] = useState(0);
     function incrementHandler(){
        SetCounter((prev)=>prev+1);
     }
     function decrementHandler(){
        if(counter>0){
            SetCounter((prev)=>prev-1);
        }
     }
     function clearHandler(){
        SetCounter(0)
     }
    return(
        <>
           <div className="shadow w-[400px] p-4 mx-auto my-12 rounded-2xl">
                <h1 className="text-4xl font-black text-center">Simple Counter App</h1>
                <p className=" text-neutral-400 mt-2 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis aperiam porro, eligendi saepe hic.</p>
                <h1 className="font-black text-6xl text-center mb-2 mt-2">{counter}</h1>
                <div className="flex items-center justify-around">
                    <button onClick={incrementHandler} className="bg-orange-300 text-white px-3 py-2 hover:bg-amber-800 rounded-full hover:text-black">Increment</button>
                    <button onClick={decrementHandler} className="bg-orange-300 text-white px-3 py-2 hover:bg-amber-800 rounded-full hover:text-black">Decrement</button>
                    <button onClick={clearHandler} className="bg-orange-300 text-white px-3 py-2 hover:bg-amber-800 rounded-full hover:text-black">Clear</button>
                </div>
            </div> 
        </>
    )
}
export default Counter;