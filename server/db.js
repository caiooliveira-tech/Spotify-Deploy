import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbPassword = process.env.REACT_DB_PASSWORD;

export default async function conectaNaDb(){
    mongoose.connect(`mongodb+srv://admin:${dbPassword}@cluster0.7txhn.mongodb.net/Spotify2?retryWrites=true&w=majority&appName=Cluster0`);

    return mongoose.connection;
}