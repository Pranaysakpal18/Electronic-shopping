import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar=({setData,card})=>{
    const location =useLocation()

    const navigate=useNavigate()

    const [searchTerm,setSearchTerm]=useState("")

    

    const FilterByCategory =(category)=>{
        const element=items.filter((product)=>product.category === category)
        setData(element)
    }

    const FilterByPrice=(price)=>{
        const element=items.filter((product)=>{
            const productPrice=parseInt(product.price)
            return productPrice >=price
        });
        setData(element)
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")

    }



    return(
        <>    
        <header className="sticky top-0">
            <div className="navbar border-2 flex justify-between bg-blue-500 p-3.5 font-bold">
                <Link to={'/'} className="brand mx-2 text-3xl text-white">Electronic Center</Link>
                
                <form
                onSubmit={handleSubmit} 
                 className="search-bar bg-white p-2">
                    <input 
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    className="font-normal w-100 bg-white outline-none" type="text" placeholder="Search Product" />
                </form>

                <Link to={'/Card'} className="card mx-8 mt-2 text-3xl text-white flex"><FaCartArrowDown/><div className="-mt-3 text-white text-base mx-1 ">{card.length}</div></Link>
            </div>

            {
                location.pathname =='/' && (
                    <div className="navbar-wrapper flex justify-between bg-black text-white p-3 font-bold">
                <div className="items mx-1 cursor-pointer">Filter By {"=>"}</div>
                <div onClick={()=>setData(items)} className="items cursor-pointer">No Filter</div>
                <div onClick={()=>FilterByCategory('mobiles')} className="items cursor-pointer">Mobiles</div>
                <div onClick={()=>FilterByCategory('Laptops')} className="items cursor-pointer">Laptops</div>
                <div onClick={()=>FilterByCategory('tablets')} className="items cursor-pointer">Tablets</div>
                <div onClick={()=>FilterByPrice(29999)} className="items cursor-pointer">Price {">="}29999</div>
                <div onClick={()=>FilterByPrice(49999)} className="items cursor-pointer">Price {">="}49999</div>
                <div onClick={()=>FilterByPrice(69999)} className="items cursor-pointer mx-1">Price {">="}69999</div>
            </div>

                )
            }


            


        </header>
        
        
        </>



    )
}
export default Navbar;


