let express = require('express') ; 
 let  app= express() ; 
  

 let mongoose = require('mongoose') ; 



 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(()=>{
   console.log("database connected");
  })

  



    app.get('register' , (req , res )=>{
       
    })
 

  app.use(express.json()) ;
 


   
  app.listen(4000  ,  ()=>
    {
     
    console.log(" server running in port no 3000 ") ; 
  })