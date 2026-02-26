let express = require('express') ; 
 let  app= express() ; 
  

 let mongoose = require('mongoose') ; 
const User = require('./user');



 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(()=>{
   console.log("database connected");
  })

  
   app.use(express.json()) ;


    app.get('/register' ,  async (req , res )=>{ 


       let { username , email , password } = req.body  ; 
        console.log(username   , email , password ) 

         let  user = await User.findOne({email})  ; 

          
          if(user)
          {
          return res.status(400).send(" user already exist ") ; 
          } 

           let userdata = new User({
            username  ,
             email, 
             password
           })

  await userdata.save() ;

   res.send(email , password , " Your Account has created Successfully ")
    })
 

 
 


   
  app.listen(4000  ,  ()=>
    {
     
    console.log(" server running in port no 3000 ") ; 
  })