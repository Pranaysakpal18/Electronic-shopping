import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Products'

const ProductDetails = ({card,setCard}) => {
  const {id}=useParams()

  const [product,setProduct]=useState({})
  const [relatedproducts,setRelatedproducts]=useState([])

  useEffect(()=>{
    const FilterProduct=items.filter((product)=>product.id==id)
    setProduct(FilterProduct[0])

    const relatedproducts=items.filter((pranay)=>pranay.category === product.category)
    setRelatedproducts(relatedproducts)
  },[id,product.category])
  


  return (
    <div className='container w-250  mx-70 mt-5'>
      
      <div className="img w-120 flex">
        <img src={product.imgSrc} alt="Image" />
      
      <div className="details p-10">
        <h5 className='font-bold text-6xl p-3'>{product.title}</h5>
        <p className='text-2xl mt-5'>{product.description}</p>
        <div className="buttons text-center mt-5 text-amber-50">
        <button className='border-2 p-2 bg-green-700 rounded-2xl w-25 mx-2 cursor-pointer'>Add Me</button>
        <button className='border-2 p-2 bg-blue-500 rounded-2xl w-25 cursor-pointer'>{product.price}</button>
      </div>
      </div>
      </div>

      <h1 className='text-4xl text-center mb-5 font-bold'>Related Products</h1>

      <Product card={card} setCard={setCard} items={relatedproducts}/>
      
    

      
    </div>
    
  )
}

export default ProductDetails
