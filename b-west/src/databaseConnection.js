import * as adminFirebase from "firebase-admin";
import serviceAccount from './b-west-firebase-adminsdk.json';
import mongoose from 'mongoose';


adminFirebase.initializeApp({
    credential: adminFirebase.credential.cert(serviceAccount),
    databaseURL: "https://b-west.firebaseio.com"
});
const db = adminFirebase.database();


// DB connection through Mongoose
const options = {
    useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/B-West-database', options);

export const db_mongoose = mongoose.connection;
export default db;