import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import SeachItem from "./components/SeachItem";
import Card from "./components/Card";
import { items } from "./components/Data";



const App=()=>{
  const [data,setData]=useState([...items])
  const [card,setCard]=useState([])


  return(
    
  <>
  <Router>

  <Navbar card={card} setData={setData}/>

  <Routes>
    <Route path="/" element={<Products card={card} setCard={setCard} items={data}/>}/>
    <Route path="/products/:id" element={<ProductDetails card={card} setCard={setCard}/>}/>
    <Route path="/search/:term" element={<SeachItem card={card} setCard={setCard}/>}/>
    <Route path="/card" element={<Card card={card} setCard={setCard}/>}/>
    
  </Routes>


  

  </Router>
  
  </>

)

}
export default App;