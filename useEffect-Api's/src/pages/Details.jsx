import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

let Details = ()=>{
     let [product,setProduct] = useState({});
    let {id} = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
            console.log(product.data);
            setProduct(product.data);
        })
    },[])
    return(
        <>
        <div className="w-[600px] items-center px-4 py-2 gap-4 mx-auto flex my-24">
            <img className="w-44 h-44 object-contain" src={product.image} alt="" />
            <div className="w-[60%]">
                <p className="text-xl font-medium text-neutral-800 truncate">{product.title}</p>
                <p className="text-neutral-500 text-sm font-sans mt-1">{product.description}</p>
                <p className=" font-medium text-neutral-800">INR: {product.price}</p>
                <button onClick={()=>{
                    alert(`${product.title} is added to Cart`)
                }} className="bg-purple-400 rounded-sm hover:bg-green-300 cursor-pointer px-4 text-white py-2 mt-2">Purchase</button>    
            </div> 
        </div>
        </>
    )
}
export default Details;