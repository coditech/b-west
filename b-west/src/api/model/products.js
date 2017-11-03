import {firebaseDeleteData, firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log(' Products Model path: b-west/src/api/model/products.js ' + message);
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

const products_create = (request, resources, next) => {
    const {name, description, price, status, imageAlt, slug} = request.body;

    let files = request.files;


    uploadImagesToStorage(files, 'products')
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
                databaseRef: 'products',
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

const products_get = (request, resources, next) => {

    resources.send({
        test: allData
    });
};
const products_update = (request, resources, next) => {

    const {name, description, price, status, imageAlt, slug} = request.body;
    const key = request.params.id;

    let files = request.files;


    uploadImagesToStorage(files, 'products')
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
                databaseRef: 'products',
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
const products_remove = (request, resources, next) => {


    firebaseDeleteData({
        databaseRef: 'products',
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
    products_create,
    products_get,
    products_remove,
    products_update
}