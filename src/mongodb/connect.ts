import { MongoClient } from "mongodb";

export const connect = (mongoUrl : string = 'mongodb://0.0.0.0:27017/') =>
    MongoClient.connect(mongoUrl)