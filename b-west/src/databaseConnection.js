import * as adminFirebase from "firebase-admin";
import serviceAccount from './b-west-firebase-adminsdk-e58gj-0315440c03.json';


adminFirebase.initializeApp({
    credential: adminFirebase.credential.cert(serviceAccount),
    databaseURL: "https://b-west.firebaseio.com"
});
const db = adminFirebase.database();

export default db;