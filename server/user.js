   let mongoose =  require('mongoose') ; 

    let userSchema = mongoose.Schema({
        

        username:{
              type:String, 
               required : true 

        } , 
 

          email:{
     type:String , 
     required: true 

          } ,
         password:
         {
          type: String, 
         required : true  
  
         }  , 
          
//  role:
//   {
//      type: String , 

//       enum:['admin' ,'Marchent' , 'Buyer'] , 
//        default:"buyer"
//   }
       
    }) 

    let User = mongoose.model('user'   ,userSchema ) 
       module.exports= User