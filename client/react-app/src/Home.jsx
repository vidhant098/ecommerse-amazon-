import React, { useEffect, useState } from 'react'
import axios from "axios";
const Home = () => {


     const  [product   , setProduct]  = useState([])  

     const [search ,  setSearch] = useState("");
     const[query , serQuery] = useState("");

    useEffect(()=>{ 

    axios.get("https://dummyjson.com/products" ).then((res)=>{
    console.log(res.data.products) 
     setProduct(res.data.products)

      }) 
 }  , []) 
 


   let  seachproduct =   product.filter((   e )=> 
   e.title.toLowerCase().includes(search.toLowerCase())
     
      


   )
  
    const handlekey = (e)=>{
      if(e.kiy==="Enter")
      {
         serQuery(search) ; 
      }
    } ; 


  return ( 
    <div>   

       <input  
          type='text '
          placeholder='search products'
           
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
       />  
 
      {  


        product.map((e)=>(
                   <> 

               <img  src={e.images} /> 
                   <p key={e.id}>   Name : { e.title}</p>  

                   <p> Details :{e.description}</p> 

                   <br></br>
                  <h1> price :{e.price}</h1>
            <h2> {e.reting}</h2>

            </>


        )) 



       
      }

    </div>
  )
}

export default Home