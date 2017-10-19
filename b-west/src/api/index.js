import express from 'express';
import db from '../databaseConnection';
import multer from 'multer';
import path from 'path';
import {rootPath} from '../helpers'
import bodyParser from 'body-parser';

const api = express();
console.log('process.env.RAZZLE_PUBLIC_DIR===>,', process.env.MAN)
api.use(bodyParser.json());
// api.use(express.static(rootPath + '/api/public'));

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
const storageTemp = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './temp');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: function fileFilter(req, file, callback) {

        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted
        var fileType = file.mimetype;
        if (fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/gif' && fileType !== 'image/jpg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
});
api.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
const rootRef = db.ref("/");
// const upload = multer({ dest: 'uploads/' })

let allData = [];

rootRef.once("value", function (snapshot) {
    allData = snapshot.val();
    console.log(snapshot.val());
});

api.post('/test', (req, res, next) => {
    res.send(406, 'Invalid because of this');
    return next(new Error(['Data not dound']));


}, upload.any(), (req, res, next) => {

    res.send({
        req: req.body,
        files: req.file
    })


})

// upload = multer({dest:'/uploads',validate:(req,file,next)=>{
//    if(dsdfdsf){return next(null,true)}
//    else{next(new Error('file is not valid'))}
// }})

//api.post('/j',upload.any(),(req,res,next)=>{
//
// })

api.post('/homeheader', (req, res, next) => {
    upload.single('file')(req, res, function (err) {
        if (err) {
            res.end('Error Uploading file');

        }
        else {
            console.log('File Uploaded to ')
            res.send({
                req: req.body,
                file: req.file,
                files: req.files,
            });
            res.end('file is uploaded')
        }
    })


})

api.get('/', (req, res, next) => {

    rootRef.once("value", function (snapshot) {
        allData = snapshot.val();
        res.send({
            success: true,
            data: allData
        });
    });
});


api.get('/about', (req, res, next) => {

    const aboutRef = rootRef.child('about');
    aboutRef.once("value", function (snapshot) {

        let items = snapshot.val();
        let allData = [];
        for (let item in items) {
            allData.push({
                id: item
            });
        }
        res.send({
            success: true,
            data: allData
        });
    });
});

api.get('/products', (req, res, next) => {

    const productsRef = rootRef.child('products');
    productsRef.once("value", function (snapshot) {

        let items = snapshot.val();
        let allData = [];
        for (let item in items) {
            allData.push({
                id: item
            });
        }
        res.send({
            success: true,
            data: allData
        });
    });
});

api.get('/contact', (req, res, next) => {

    const productsRef = rootRef.child('products');
    productsRef.once("value", function (snapshot) {
        allData = snapshot.val();
        res.send({
            success: true,
            data: allData
        });
    });
});


// Insert and overide all list
api.get('/insert', (req, res, next) => {
    const usersRef = rootRef.child("users");
    usersRef.set({
        alanisawesome: {
            date_of_birth: "June 23, 1912",
            full_name: "Alan Turing"
        },
        gracehop: {
            date_of_birth: "December 9, 1906",
            full_name: "Grace Hopper"
        }
    }, function (error) {
        if (error) {
            console.log("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
        }
    });
    res.send({
        active: true
    });
});

// Insert and overide all list
api.get('/insertvalidate', (req, res, next) => {
    const validate = rootRef.child("/validate");
    validate.set({
        string: "23",
        number: '23'
    }, function (error) {
        if (error) {
            console.log("Data could not be saved." + error);
            res.send(error);
        } else {
            res.send({
                active: true
            });
        }
    });

})

// Insert To The list then send all post data
api.get('/insert_list', (req, res, next) => {
    const postsRef = rootRef.child("posts");

    const newPostRef = postsRef.push();
    newPostRef.set({
        author: "gracehop",
        title: "Announcing COBOL, a New Programming Language",
        date: Date.now()
    });
    postsRef.once("value", function (snapshot) {
        allData = snapshot.val();
        console.log(snapshot.val());
        res.send(allData)
    });

})
//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;

api.get('/*', (req, res, next) => {
    res.send(allData)
})
export default api;
