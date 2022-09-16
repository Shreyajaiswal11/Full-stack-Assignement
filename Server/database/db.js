import mongoose from "mongoose"

const Connection =async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-upncjil-shard-00-00.vuactif.mongodb.net:27017,ac-upncjil-shard-00-01.vuactif.mongodb.net:27017,ac-upncjil-shard-00-02.vuactif.mongodb.net:27017/?ssl=true&replicaSet=atlas-51ivsp-shard-0&authSource=admin&retryWrites=true&w=majority`;
try{
await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
console.log("database connected successfully")
}catch(error){
    console.log('Error while coonecting with the database',error)
}
}
export default Connection;
