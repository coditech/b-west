import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import  {db_mongoose} from "../databaseConnection";
import {
    aboutUsHomeSectionModel,
    aboutUsModel,
    contactUsModel,
    featuredProductsModel,
    productsModel,
    findAStoreModel,
    homeHeaderModel,
    instaBannerModel
} from "./model"
import {aboutUsHomeSectionRef, contactUsRef, firebasePushData, subscribe} from "./firebaseData";
import {uploadGoogle, uploadImageToStorage} from "./firebaseStorage";
import {isEmpty} from "../helpers/index";
import {getUsers, login, signup, updateUser, verifyAuth} from "./routes/user";

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


// Body parser and Morgan middleware
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(morgan('dev'));
// Enable CORS so that we can make HTTP request from webpack-dev-server
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});
router.post('/login', login);

router.post('/users_get', verifyAuth,getUsers);
router.post('/users', verifyAuth, signup);
router.put('/users', verifyAuth, updateUser);
// router.get('/users', getUsers);
router.get('/users', (req, res) => {
    res.send({
        success: true
    })
});
router.get("/aboutUs", (request, resources, next) => {
    resources.send(allData);
});
router.get("/aboutpage", uploadGoogle.any(), aboutUsModel.aboutUs_get);
router.post("/aboutpage", verifyAuth, uploadGoogle.any(), aboutUsModel.aboutUs_create);
router.delete("/aboutpage/:id", verifyAuth, uploadGoogle.any(), aboutUsModel.aboutUs_remove);
router.put("/aboutpage/:id", verifyAuth, uploadGoogle.any(), aboutUsModel.aboutUs_update);

router.put("/aboutus-home", verifyAuth, uploadGoogle.any(), aboutUsHomeSectionModel.aboutUsHomeSection_update);

router.put("/contact-us", verifyAuth, uploadGoogle.any(), contactUsModel.contactUs_update);

router.post("/featured-products", verifyAuth, uploadGoogle.any(), featuredProductsModel.featuredProducts_create);
router.put("/featured-products/:id", verifyAuth, uploadGoogle.any(), featuredProductsModel.featuredProducts_update);
router.delete("/featured-products/:id", verifyAuth, uploadGoogle.any(), featuredProductsModel.featuredProducts_remove);

router.post("/products", verifyAuth, uploadGoogle.any(), productsModel.products_create);
router.put("/products/:id", verifyAuth, uploadGoogle.any(), productsModel.products_update);
router.delete("/products/:id", verifyAuth, uploadGoogle.any(), productsModel.products_remove);

router.put("/find-a-store-header", verifyAuth, uploadGoogle.any(), findAStoreModel.findAStore_header_update);

router.put("/home-header", verifyAuth, uploadGoogle.any(), homeHeaderModel.homeHeader_update);

router.put("/instagram-banner", verifyAuth, uploadGoogle.any(), instaBannerModel.instaBanner_update);

router.post('/homeheader', verifyAuth, uploadGoogle.any(), (req, res, next) => {

    res.send({
        req: req.body
    })

});
router.post('/about-us-home', verifyAuth, uploadGoogle.any(), (req, res, next) => {
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
router.post("/about-us-home", verifyAuth, uploadGoogle.any(), (req, res, next) => {
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
router.post("/contact-us", verifyAuth, uploadGoogle.any(), (req, res, next) => {
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
