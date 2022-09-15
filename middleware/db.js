import mongoose from "mongoose";
const connection = {}
const connectToDb = async()=>{
    if(connection.isConnected){
        console.log("using existing connection");
        return connection.isConnected;
    }
    const db = await mongoose.connect(`${process.env.mongodb}`);
    connection.isConnected = db.connections[0].readyState;
}
export default connectToDb;