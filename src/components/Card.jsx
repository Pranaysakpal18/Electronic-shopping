import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Card = ({card,setCard}) => {
  



  return (
    <>
        <div className="container">
          {
            card.length==0 ?(
              <>
              <div className='text-center mt-50'>
                <h1 className='font-bold text-3xl mb-5'>You Cart is Empty</h1>
                <Link className='bg-blue-500 text-white p-2' to={'/'}>Continue Shopping</Link>
              </div>
              
              </>

            ):
          card.map((product)=>{
            return(
              <>
              <div className="cart border-2 justify-center mx-100 mt-3 border-gray-300">
              <div className="imgsection flex">
            <img className='w-80' src={product.imgSrc}alt="Images" />
            <div className="info mt-10">
          <h5 className='text-3xl font-bold'>{product.title}</h5>
          <p className='mt-5'>{product.description}</p>
          <div className="buttons mt-12 mx-5">
          <button className='bg-blue-500 p-2 mx-2 cursor-pointer hover:bg-blue-600 text-white'>Buy Now</button>
          <button className='bg-red-500 p-2 cursor-pointer hover:bg-red-600 text-white'>{product.price}</button>
          </div>
          </div>
          </div>
          </div>

              </>
            )

          })

          }
          
        </div>

        {
          card.length !=0 && (
            <div className="clear-card">
          <button onClick={()=>setCard("")} className='mx-180 mt-10 p-1 bg-red-400 text-white border-2 cursor-pointer hover:bg-gray-700 mb-5'>Clear Cart</button>
        </div>

          )
        }


        
      
        </>
  )
}

export default Card
