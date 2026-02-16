import React, { useEffect, useState } from 'react'
import axios from "axios";
const Home = () => {


     const  [product   , setProduct]  = useState([])  

 useEffect(()=>{ 

    axios.get("https://dummyjson.com/products" ).then((res)=>{
   console.log(res.data.products) 
     setProduct(res.data.products)

      }) 
 }  , []) 

  return ( 

    <div>  

        

      {
        product.map((e)=>(
              
         
            <> 

               <p key={e.id}> { e.title}</p> 
               <img>{e.emages}</img>
            </>


        ))
      }

    </div>
  )
}

export default Home