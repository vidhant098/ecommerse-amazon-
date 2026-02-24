   let mongoose =  require('mongoose') ; 

    let userSchema = mongoose.Schema({
        

        userName:{
              type:String, 
               required : true 

        } , 

         paassword:
         {
 type: String, 
 required : true  
  
  


         }  , 
          
 role:
  {
     type: String , 

      enum:['admin' ,'Marchent' , 'Buyer'] , 
       default:"buyer"
  }
       
    }) 

    let User = mongoose.model('user' )