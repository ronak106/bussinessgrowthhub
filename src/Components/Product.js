import React, { useEffect, useState } from 'react'
import Product_card from './Product_card';

export default function Product() {
  const [data,setdata]=useState([])
  const [state,setstate]=useState(6)
  async function getdata(){
  // const dat=await 
  fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(dat=>{setdata(dat)
    console.log(dat)
  }
  
  )
  // const maindata=await dat.json();
  // console.log(maindata);
  // setdata(maindata)
  }
  
  useEffect(()=>{
    getdata();
  },[])

  let nextpage=()=>{
   
    if(state<20){
      setstate(state+6)
    }
    
  }
  let prevpage=()=>{
    if(state>6){
      setstate(state-6)
    }
  }

  
  
  return (
    <>
    <div className="product_containner">
    {data.map((value,index)=>{
      if(value.id>(state-6)&& value.id<=state){
      return(
        <Product_card key={index} title={value.title} image={value.image} cat={value.category} price={value.price} />
      )}
      
    })}

    

    </div>
    <div className="pnbutton">
   
      <button className="prev" onClick={prevpage} disabled={state<7}>
      &larr; Prevs</button>
      <button className="next" disabled={state>20} onClick={nextpage}>Next &rarr;</button>
      </div>
    
    </>
    
  )
}
