import express from 'express';
import db from '../databaseConnection';
import multer from 'multer';

const api = express();

let upload = multer({dest: 'uploads/'})
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

api.post('/homeheader', (req, res, next) => {
    const usersRef = rootRef.child("users");
    usersRef.set({});
    var post_body = req.body;

    console.log('Req body', req.body);
    console.log('Req params', req.params);
    res.send({
        body: req.body || 'none',
        params: req.params || 'none'
    });
})

api.get('/*', (req, res, next) => {
    res.send(allData)
})
export default api;
