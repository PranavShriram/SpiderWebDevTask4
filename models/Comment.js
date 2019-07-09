var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    Title:String,
    user:String,
    value:String

});

var Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;