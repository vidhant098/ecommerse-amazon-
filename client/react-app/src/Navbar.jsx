import React from 'react'
import { Link } from 'react-router-dom' 


const Navbar = () => {
  return (
    <div>

<nav className="bg-gray-800 text-white p-4 flex justify-between items-center"> 

  <Link to="/">Home</Link> 
  <Link to="/Login">login </Link>
 



    </nav>    </div>
  )
}

export default Navbar