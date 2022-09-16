import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const userSchema=mongoose.Schema({
    username:String,
    email:String,
    actiontype:String,
    actionname:String
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');

const user=mongoose.model('user',userSchema)
export default user;