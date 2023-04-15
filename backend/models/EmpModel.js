var mongoose  =  require('mongoose');  
   
var empSchema = new mongoose.Schema({  
    FirstName:{  
        type:String  
    },  
    LastName:{  
        type:String  
    },  
    Email:{  
        type:String  
    },   
    PhoneNumber:{  
        type:Number  
    }  
});  
   
module.exports = mongoose.model('empModel', empSchema);