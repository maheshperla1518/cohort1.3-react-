import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../Components/Card';

function Products() {
  let [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((products)=>{
    setProducts(products.data);
    console.log(products);
    })
  },[])
  return (
    <div className='flex flex-wrap justify-center gap-4 mx-auto w-[990px] mt-8 '>
      {
        products.length>=0 ? products.map((product)=><Card image={product.image} id={product.id} price={product.price} description={product.description} key={product.id} title={product.title}/>) : <div className='text-center'>Loading...</div>
      }
    </div>
  )
}

export default Products;

