import React from 'react'
import { useState } from 'react'
 import axios from "axios"
const Register = () =>  
  {
const [email ,   setEmail]=useState("") 

const [username  , setUsername] =useState("") 
const [password , setpassword]=useState("") 
  

 const   handleRegister =  async ( e )=>{  
      
e.preventDefault()
 try{

    const response= await   axios.post("http://localhost:4000/register" ,
         {
             username:username  , 
             email :email  , 
              password :password    
            
            });  

             alert("axxount created successfully ")



 }  catch(error )
 {
     console.log(error.response.data)
 }


 }

  return (
    <div>

    <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <br /><br />


        <button type="submit">Submit</button>

      </form>


    </div>
  )
}

export default Register