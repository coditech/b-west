import express from "express";
import db from "../databaseConnection";
import {aboutUsHomeSectionModel, aboutUsModel, contactUsModel, featuredProductsModel, productsModel, findAStoreModel} from "./model"
import {aboutUsHomeSectionRef, contactUsRef, firebasePushData, subscribe} from "./firebaseData";
import {uploadGoogle, uploadImageToStorage} from "./firebaseStorage";
import {isEmpty} from "../helpers/index";

let allData = {};
if (isEmpty(allData)) {
    setTimeout(() => firebasePushData({
            databaseRef: 'logs',
            data: {
                date: Date.now(),
                message: 'All Data is Empty server restart'
            }
        }
    ), 2000);

}
subscribe(newData => {
    allData = newData;
});
export {allData};


const router = express.Router();
const rootRef = db.ref("/");
router.get("/aboutUs", (request, resources, next) => {
    resources.send(allData);
});
router.get("/aboutpage", uploadGoogle.any(), aboutUsModel.aboutUs_get);
router.post("/aboutpage", uploadGoogle.any(), aboutUsModel.aboutUs_create);
router.delete("/aboutpage/:id", uploadGoogle.any(), aboutUsModel.aboutUs_remove);
router.put("/aboutpage/:id", uploadGoogle.any(), aboutUsModel.aboutUs_update);

router.put("/aboutus-home", uploadGoogle.any(), aboutUsHomeSectionModel.aboutUsHomeSection_update);

router.put("/contact-us", uploadGoogle.any(), contactUsModel.contactUs_update);

router.post("/featured-products", uploadGoogle.any(), featuredProductsModel.featuredProducts_create);
router.put("/featured-products/:id", uploadGoogle.any(), featuredProductsModel.featuredProducts_update);
router.delete("/featured-products/:id", uploadGoogle.any(), featuredProductsModel.featuredProducts_remove);

router.post("/products", uploadGoogle.any(), productsModel.products_create);
router.put("/products/:id", uploadGoogle.any(), productsModel.products_update);
router.delete("/products/:id", uploadGoogle.any(), productsModel.products_remove);

router.put("/find-a-store-header", uploadGoogle.any(),findAStoreModel.findAStore_header_update);

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.post('/homeheader', uploadGoogle.any(), (req, res, next) => {

    res.send({
        req: req.body
    })

});
router.post('/about-us-home', uploadGoogle.any(), (req, res, next) => {
    const {title, subTitle, content, alt_image_one, alt_image_two} = req.body;

    let files = req.files;


    if (files.length > 0) {

        for (let file in files) {
            const uploadFile = files[file];
            if (uploadFile.fieldname === 'imageOne') {
                uploadImageToStorage(uploadFile, 'about_us_home').then((success) => {
                    const dataUpdate = {
                        title,
                        subTitle,
                        content,
                        imageOne: {
                            alt: alt_image_one,
                            src: success
                        },
                        imageTwo: {
                            alt_image_two
                        }
                    };
                    aboutUsHomeSectionRef.set(dataUpdate, function (error) {
                        if (error) {
                            console.log("Data could not be saved." + error);
                        } else {
                            console.log("Data saved successfully.");
                        }
                    })

                }).catch(next);
            }
        }
    } else {

    }
});
router.post("/about-us-home", uploadGoogle.any(), (req, res, next) => {
    const {title, subTitle, content, alt_image_one, alt_image_two} = req.body;

    let files = req.files;

    if (files.length > 0) {
        for (let file in files) {
            const uploadFile = files[file];

            if (uploadFile.fieldname === "imageOne") {
                uploadImageToStorage(uploadFile)
                    .then(success => {
                        const dataUpdate = {
                            title,
                            subTitle,
                            content,
                            imageOne: {
                                alt: alt_image_one,
                                src: success
                            },
                            imageTwo: {
                                alt_image_two
                            }
                        };
                        aboutUsHomeSectionRef.set(dataUpdate, function (error) {
                            if (error) {
                                console.log("Data could not be saved." + error);
                            } else {
                                console.log("Data saved successfully.");
                            }
                        });
                    })
                    .catch(next);
            }
        }
    } else {
    }

    res.status(200).send({});
});
router.post("/contact-us", uploadGoogle.any(), (req, res, next) => {
    const {title, contactinfo} = req.body;

    const dataUpdate = {
        ...allData.contactUs,
        title,
        content: contactinfo
    };
    contactUsRef.set(dataUpdate, function (error) {
        if (error) {
            console.log("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
        }
    });
    res.status(200).send(test);
});
// Insert and overide all list
router.get("/insert", (req, res, next) => {
    const usersRef = rootRef.child("users");
    usersRef.set(
        {
            alanisawesome: {
                date_of_birth: "June 23, 1912",
                full_name: "Alan Turing"
            },
            gracehop: {
                date_of_birth: "December 9, 1906",
                full_name: "Grace Hopper"
            }
        },
        function (error) {
            if (error) {
                console.log("Data could not be saved." + error);
            } else {
                console.log("Data saved successfully.");
            }
        }
    );
    res.send({
        active: true
    });
});
// Insert and overide all list
router.get("/insertvalidate", (req, res, next) => {
    const validate = rootRef.child("/validate");
    validate.set(
        {
            string: "23",
            number: "23"
        },
        function (error) {
            if (error) {
                console.log("Data could not be saved." + error);
                res.send(error);
            } else {
                res.send({
                    active: true
                });
            }
        }
    );
});
// Insert To The list then send all post data
router.get("/insert_list", (req, res, next) => {
    const postsRef = rootRef.child("posts");

    const newPostRef = postsRef.push();
    newPostRef.set({
        author: "gracehop",
        title: "Announcing COBOL, a New Programming Language",
        date: Date.now()
    });
});

router.get("/alldata", (req, res, next) => {
    res.send({
        success: true,
        data: allData
    })
});

//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;
router.get("/*", (req, res, next) => {
    res.send({
        allData: allData,
        default: true
    });
});


export default router;
