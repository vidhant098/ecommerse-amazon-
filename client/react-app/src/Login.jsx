 import React, { useState } from 'react'
   
import axios from "axios";


 const Login = () => { 

  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    

    const handleLogin  =  (e)=>{
   try{ 

     axios.post ("http://localhost:4000/login"{
     email:email , 
      password:password}

     )   
alert("Account created successfully");

 setEmail("")
 setPassword("")


     
     

   } 
    catch(error){
        console.log(error )
    }



    } ; 



   return (
     <div>    
     <h2>
  Login hare 

     </h2>


 <div>
  <form   onSubmit={handleLogin}>
    <label className="block text-sm font-medium mb-1">
   Email 
    </label> 


   <input  type='email'  placeholder='Enter Email hare'   value={email}  onChange={(e) => setEmail(e.target.value)}
>
   
   </input> 
    <label   className='vlock text-sm font-medium mb-2'>

    </label>
    

     <input  type='password'  placeholder='Enter password hare '   value={password}  onChange={(e) => setPassword(e.target.value)}>
     
     </input>

  </form>


 </div>


     </div>
   )
 }
 
 export default Login