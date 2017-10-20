import express from 'express';
import multer from 'multer';
import util from 'util';
import db from '../databaseConnection';
import { subscribe, aboutUsHomeSectionRef} from "./firebaseGetData";


let allData = {}
subscribe((newData)=>{allData = newData});

const googleStorage = require('@google-cloud/storage');

const api = express();

console.log('process.env.RAZZLE_PUBLIC_DIR===>,', process.env.MAN);

// api.use(express.static(rootPath + '/api/public'));
const rootRef = db.ref("/");

api.get('/aboutUs', (request, resources, next) => {

    resources.send(allData);


});
//
const storage = googleStorage({
    projectId: 'b-west',
    keyFilename: "../b-west/src/b-west-firebase-adminsdk-e58gj-0315440c03.json"
});

const storageDisk = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const bucket = storage.bucket('b-west.appspot.com');
/*

const uploadGoogle = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
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
*/

const upload = multer({
    storage: storageDisk,
    limits: {
        fileSize: 5 * 1024 * 1024
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

api.post('/homeheader', upload.any(), (req, res, next) => {

        res.send({
            req: req.body
        })

    }
)
api.post('/about-us-home', upload.any(), (req, res, next) => {
    const {title, subTitle, content, alt_image_one, alt_image_two} = req.body;
    const test = req.file;

    let file = req.files;
    console.log('req.file =>', req.files);
    if (file) {
        uploadImagesToStorage(file).then((success) => {
            const dataUpdate = {
                title,
                subTitle,
                content,
                imageOne: {
                    alt: alt_image_one
                },
                imageTwo: {
                    alt_image_two
                }
            }
            aboutUsHomeSectionRef.set(dataUpdate, function (error) {
                if (error) {
                    console.log("Data could not be saved." + error);
                } else {
                    console.log("Data saved successfully.");
                }
            })


        }).catch((error) => {
            console.error(error);
        });
    } else {
        const dataUpdate = {
            title,
            subTitle,
            content,
            imageOne: {
                alt: alt_image_one
            },
            imageTwo: {
                alt_image_two
            }
        }
        aboutUsHomeSectionRef.set(dataUpdate, function (error) {
            if (error) {
                console.log("Data could not be saved." + error);
            } else {
                console.log("Data saved successfully.");
            }
        })

    }
    res.status(200).send(test);


})

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


})
//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;

api.get('/*', (req, res, next) => {
    let allData = {};
    res.send(allData)
})

/*
/!**
 * Upload the image file to Google Storage
 * @param {File} file object that will be uploaded to Google Storage
 *!/
const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No image file');
        }
        let newFileName = `${file.originalname}_${Date.now()}`;

        let fileUpload = bucket.file(newFileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.');
        });

        blobStream.on('finish', () => {
            // The public URL can be used to directly access the file via HTTP.
            const url = util.format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
            resolve(url);
        });

        blobStream.end(file.buffer);
    });
}*/
const uploadImagesToStorage = (files) => {
    return new Promise((resolve, reject) => {
        if (!files) {
            reject('No image file');
        }
        let urls = [];
        files.map(file => {
            console.log(file)
            const fieldname = file.fieldname;
            let newFileName = `${file.originalname}_${Date.now()}`;

            let fileUpload = bucket.file(newFileName);

            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype
                }
            });

            blobStream.on('error', (error) => {
                reject('Something is wrong! Unable to upload at the moment.');
            });
            blobStream.on('finish', () => {
                // The public URL can be used to directly access the file via HTTP.
                const url = util.format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
                urls[fieldname] = url;

            });
            blobStream.end(file.buffer);

        });
        console.log(urls);
        resolve(urls);


    });
}
export default api;
