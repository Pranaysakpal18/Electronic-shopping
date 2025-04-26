import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Products = ({items ,card,setCard}) => {

    const addToCard=(id,price,title,description,imgSrc)=>{
        const obj={
            id,price,title,description,imgSrc
        }
        setCard([...card,obj])
        console.log(card)
        toast('Added Item Successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
  return (
    <div>
        <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        <div className="conatiner flex flex-wrap">
            {
                items.map((products)=>{
                    return(
                        <div key={products.id} className='card border-2 m-2 bg-gray-100 p-2 w-70'>
                        <Link to={`/Products/${products.id}`}>
                        < img className='w-60 h-60 justify-center mx-3' src={products.imgSrc}/>
                        </Link>
                        <h5 className='font-bold text-center mt-2 text-2xl h-1.5'>{products.title}</h5>
                        <p className='text-center h-4 mt-17'>{products.description}</p>
                        <div className="buttons text-center mt-17 mb-2">
                        <button onClick={()=>addToCard(products.id,products.price,products.title,products.description,products.imgSrc)} className='border-2 bg-green-600 p-3 rounded-2xl mx-1.5 cursor-pointer hover:bg-green-700'>Add To card</button>
                        <button  className='border-2 bg-blue-700 text-white p-3 rounded-2xl'>{products.price}</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Products
