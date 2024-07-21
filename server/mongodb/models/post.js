import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name:{type: String, required : true},
    prompt:{type: String, required : true},
    photo:{type: String, required : true}
})

const PostSchema = mongoose.model('Post', Post); 
//This method creates a Mongoose model named Post based on the Post schema that we created above.

export default PostSchema;
//now it can be used while creating a new post