 require('dotenv').config() ; 


 let express = require('express') ; 
 let  app= express() ; 
   

const PORT = process.env.PORT || 4000;


 let mongoose = require('mongoose') ; 
const User = require('./user');



 mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
  then(()=>{
   console.log("database connected");
  })

  
   app.use(express.json()) ;


    app.post('/register' ,  async (req , res )=>{ 


       let { username , email , password } = req.body  ; 
        console.log(username   , email , password ) 

         let  user = await User.findOne({email })  ; 

          
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
 

   

     
    app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    // 2️⃣ Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User Not Registered");
    }

    // 3️⃣ Password check
    if (user.password !== password) {
      return res.status(401).send("Invalid password");
    }

    // 4️⃣ ✅ SUCCESS RESPONSE (THIS WAS MISSING)
    return res.status(200).json({
      message: "Login successful",
      email: user.email
    });

  } catch (error) {
    return res.status(500).send("Server Error");
  }
});
 
   
  app.listen(PORT  , ()=>
    {
     
    console.log(" server running in port no 4000 ") ; 
  })