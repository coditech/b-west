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


const rootRef = db.ref("/");
const aboutUsRef = db.ref("/aboutUs");
const aboutUsHomeSectionRef = db.ref("/aboutUsHomeSection");
const constactUsRef = db.ref("/constactUs");
const featuredProductsRef = db.ref("/featuredProducts");
const featuredStoriesRef = db.ref("/featuredStories");
const findAStoreRef = db.ref("/findAStore");
const homeHeaderRef = db.ref("/homeHeader");
const instaBannerRef = db.ref("/instaBanner");
const productsRef = db.ref("/products");
const productsPageHeaderRef = db.ref("/productsPageHeader");
const subscriberBannerRef = db.ref("/subscriberBanner");
const villagersStoriesRef = db.ref("/villagersStories");
const villagersStoriesHeaderRef = db.ref("/villagersStoriesHeader");


let allData = {};
let aboutUsData = [];
let featuredProductsData = [];
let aboutUsHomeSectiondData = {};
let constactUsData = {};
let featuredStoriesData = {};
let findAStoreData = {};
let homeHeaderData = {};
let instaBannerData = {};
let productsData = [];
let productsPageHeaderData = {};
let subscriberBannerData = {};
let villagersStoriesData = [];
let villagersStoriesHeaderData = {};

aboutUsRef.on("value", function (snapshot) {
    console.log(snapshot.val());

    let items = snapshot.val();
    aboutUsData = [];
    console.log('dddd', items);
    for (let item in items) {
        const itemData = items[item];
        aboutUsData.push({
            ...itemData,
            id: item,

        });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

featuredProductsRef.on("value", function (snapshot) {
    console.log(snapshot.val());

    let items = snapshot.val();
    featuredProductsData = [];
    for (let item in items) {
        const itemData = items[item];
        featuredProductsData.push({
            ...itemData,
            id: item,

        });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

findAStoreRef.on("value", function (snapshot) {
    console.log(snapshot.val());

    let items = snapshot.val().stores;
    findAStoreData = snapshot.val();
    let stores = [];
    for (let item in items) {
        const itemData = items[item];
        stores.push({
            ...itemData,
            id: item,

        });
    }
    findAStoreData.stores = stores;

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

productsRef.on("value", function (snapshot) {
    // console.log(snapshot.val());
    //
    let items = snapshot.val();
    productsData = [];
    for (let item in items) {
        const itemData = items[item];
        productsData.push({
            ...itemData,
            id: item,

        });
    }
    console.log('items =>', items);

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

villagersStoriesRef.on("value", function (snapshot) {
    // console.log(snapshot.val());
    //
    villagersStoriesData = snapshot.val();
    let images = snapshot.val().images;
    let storiesImages = [];
    for (let item in images) {
        const itemData = images[item];
        storiesImages.push({
            ...itemData,
            id: item,

        });
    }
    villagersStoriesData.images = images;


}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

aboutUsHomeSectionRef.on("value", function (snapshot) {
    aboutUsHomeSectiondData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
constactUsRef.on("value", function (snapshot) {
    constactUsData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

featuredStoriesRef.on("value", function (snapshot) {
    featuredStoriesData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
homeHeaderRef.on("value", function (snapshot) {
    homeHeaderData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});
instaBannerRef.on("value", function (snapshot) {
    instaBannerData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

productsPageHeaderRef.on("value", function (snapshot) {
    productsPageHeaderData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

subscriberBannerRef.on("value", function (snapshot) {
    subscriberBannerData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

villagersStoriesHeaderRef.on("value", function (snapshot) {
    villagersStoriesHeaderData = snapshot.val();
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


api.get('/aboutUs', (request, resources, next) => {


    resources.send(villagersStoriesHeaderData)

});

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

// const upload = multer({ dest: 'uploads/' })


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


});


api.get('/about', (req, res, next) => {

    const aboutRef = rootRef.child('about');
    aboutRef.on("value", function (snapshot) {

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
    let allData = {};
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
    let allData = {};

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


})
//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;

api.get('/*', (req, res, next) => {
    let allData = {};
    res.send(allData)
})
export default api;
