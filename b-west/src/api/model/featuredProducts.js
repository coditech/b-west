import {firebaseDeleteData, firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log('featured Products Model path: b-west/src/api/model/featuredProducts.js ' + message);
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

const featuredProducts_create = (request, resources, next) => {
    const {name, description, price, status, imageAlt, slug} = request.body;

    let files = request.files;


    uploadImagesToStorage(files, 'featuredProducts')
        .then(response => {
            let data = {
                status,
                name,
                price,
                imageAlt,
                classContainer: "col-sm-4 col-xs-6",
                description,
                slug


            };
            const image = response['image'];
            if (image) {
                data.imageSrc = image.url;

            } else {
                log('Image not found')
            }
            firebasePushData({
                databaseRef: 'featuredProducts',
                data
            }).then(response => {
                resources.send({
                    success: true,
                    error: null,
                    data: data
                })
            });


        })
        .catch((err) => {
            next(err);
            resources.send({
                success: false,
                error: err
            })
        })


};

const featuredProducts_get = (request, resources, next) => {

    resources.send({
        test: allData
    });
};
const featuredProducts_update = (request, resources, next) => {

    const {name, description, price, status, imageAlt, slug} = request.body;
    const key = request.params.id;

    let files = request.files;


    uploadImagesToStorage(files, 'featuredProducts')
        .then(response => {
            let data = {
                status,
                name,
                price,
                imageAlt,
                classContainer: "col-sm-4 col-xs-6",
                description,
                slug


            };
            const image = response['image'];
            if (image) {
                data.imageSrc = image.url

            } else {
                log('Image not found')
            }
            firebaseUpdateData({
                databaseRef: 'featuredProducts',
                data,
                key
            }).then(response => {
                resources.send({
                    success: true,
                    response,
                    error: null,
                    data: data
                })
            }).catch(err => {
                log(err);
                resources.send({
                    success: false,
                    error: err,
                    data: data
                })
            });


        })
        .catch((err) => {
            next(err);
            resources.send({
                success: false,
                error: err
            })
        })

};
const featuredProducts_remove = (request, resources, next) => {


    firebaseDeleteData({
        databaseRef: 'featuredProducts',
        key: request.params.id


    }).then(function (error) {
        resources.send({
            success: true,
            params: request.params,
            error
        })
    }).catch(function (error) {
        log('Error deleting data:', error);
        resources.send({status: 'error', error: error});
    });
};

export {
    featuredProducts_create,
    featuredProducts_get,
    featuredProducts_remove,
    featuredProducts_update
}