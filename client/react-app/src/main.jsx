import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx' 
import Login from './Login.jsx'
import Register from './Register.jsx'
  
import { BrowserRouter, Routes, Route } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
           <Routes>
              <Route  path='/' element={<Home />}/>
              <Route  path='/Login' element={<Login />}/>
              <Route  path='/Register' element={<Register />}/>
        
           </Routes>
      </BrowserRouter>
     
   
  </StrictMode>,
)
