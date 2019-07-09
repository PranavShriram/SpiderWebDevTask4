var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{type:String,required:true},
    salt:{type:String,required:true},
    hash:{type:String,required:true},
    favourites:[String],
    watched:[String],
    watchLater:[String],
    activity:[{
         name:String,
         Date:String,
         object:String
    }],
    state:{
        type:String,
        default:"Public"
    }
 
});

var User = mongoose.model('User',userSchema);

module.exports = User;