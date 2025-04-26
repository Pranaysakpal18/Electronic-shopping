import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'


const SeachItem = ({card,setCard}) => {
  const{term}=useParams()
  const [filterData,setFilterData]=useState([]);

  useEffect(()=>{
    const filteredData=()=>{
      const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data)
    }
    filteredData();
  },[term])


  


  return (
    <div>
      {filterData.length === 0 ? (
        <h2 className='text-center mt-70 text-2xl text-gray-400'>No data found</h2>
      ) : (
        <Products card={card} setCard={setCard} items={filterData} />
      )}
    </div>
  )
}

export default SeachItem
