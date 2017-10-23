import {firebaseDeleteData, firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage, uploadImageToStorage} from "../firebaseStorage";

const log = (message) => console.log('About Us Model path: b-west/src/api/model/aboutUs.js ' + message)
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
const {aboutUs} = allData;

const aboutUs_create = (request, resources, next) => {
    const {title, content, alt} = request.body;

    let files = request.files;
    let counter = 0;


    uploadImagesToStorage(files, 'aboutUs')
        .then(response => {
            let data = {
                title: title,
                content: content,
                image: {}
            }
            const image = response['image'];
            if (image) {
                data.image = {
                    src: image.url,
                    alt
                }

            } else {
                log('Image not found')
            }
            firebasePushData({
                databaseRef: 'aboutUs',
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

const aboutUs_get = (request, resources, next) => {

    resources.send({
        test: allData
    });
};
const aboutUs_update = (request, resources, next) => {

    const {title, content, alt} = request.body;
    const key = request.params.id;

    let files = request.files;


    uploadImagesToStorage(files, 'aboutUs')
        .then(response => {
            let data = {
                title: title,
                content: content
            };
            const image = response['image'];
            if (image) {
                data.image = {
                    src: image.url,
                    alt
                }

            } else {
                log('Image not found')
            }
            firebaseUpdateData({
                databaseRef: 'aboutUs',
                data,
                key
            }).then(response => {
                resources.send({
                    success: true,
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
const aboutUs_remove = (request, resources, next) => {


    firebaseDeleteData({
        databaseRef: 'aboutUs',
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
    aboutUs_create,
    aboutUs_get,
    aboutUs_remove,
    aboutUs_update
}