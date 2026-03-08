import React from 'react'
import { useState } from 'react'

const Register = () =>  
  {
const [Email ,   setEmail]=useState("") 

const [user  , setUser] =useState("") 
const [password , setpassword]=useState("") 
  

 const   handleRegister =  async ( e )=>{  
      
e.preventdefault()  ;  

 try{

    const reaponse = await   axios.post("http://localhost:4000/register" ,
         {
             username:username  , 
             email:email  , 
              password :password    
            
            });  

             alert("axxount created successfully ")



 }catch(error )
 {
     console.log(error.responce.data)
 }


 }


 


  return (
    <div>

    <h2>Register</h2>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Username"
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
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>


    </div>
  )
}

export default Register