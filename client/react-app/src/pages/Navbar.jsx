import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav   className='  flex justify-around  mt-0  h-[60px] w-full  font-weight: 800  text-3xl  ring-2 ring-offset-2 ring-offset-black hover:ring-offset-black-500  '>

   <button  className='	font-weight: 500  '> 
    < img  src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-mp-c815b6.svg'/>
   </button> 

   <input  
      placeholder='Search hare ' alt='search hare'   className='m-0  w-[700px] border-indigo-500/100 h-[40px]   mt-2  rounded-2xl'> 
                        

   </input> 

<h2>
   Login
</h2>

    <button> 
      
    </button>
         
 < button> 
  More
  
  </button> 

    < button> 
     Cart 
    
      </button>
          
 </nav>
         
        
    </div>
  )
}

export default Navbar