import {firebaseDeleteData, firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log(' villagersStories Model path: b-west/src/api/model/villagersStories.js ' + message);
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
const {products} = allData;

const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

const villagersStories_create = (request, resources, next) => {
    const {contentFull, contentShort, slogan, title} = request.body;

    let files = request.files;

    const slug = slugify(title);
    uploadImagesToStorage(files, 'villagersStories')
        .then(response => {
            let data = {
                slug,
                contentFull,
                contentShort,
                slogan
            };
            // const image = response['image'];
            // if (image) {
            //     data.imageSrc = image.url;
            //
            // } else {
            //     log('Image not found')
            // }
            firebasePushData({
                databaseRef: 'villagersStories',
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

const villagersStories_get = (request, resources, next) => {

    resources.send({
        test: allData
    });
};
const villagersStories_update = (request, resources, next) => {

    const {contentFull, contentShort, slogan, title} = request.body;
    const key = request.params.id;


    let files = request.files;

    const slug = slugify(title);


    uploadImagesToStorage(files, 'products')
        .then(response => {
            let data = {
                contentShort,
                contentFull,
                slogan,
                title,
                slug


            };
            // const image = response['image'];
            // if (image) {
            //     data.imageSrc = image.url
            //
            // } else {
            //     log('Image not found')
            // }
            firebaseUpdateData({
                databaseRef: 'villagersStories',
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
const villagersStories_remove = (request, resources, next) => {


    firebaseDeleteData({
        databaseRef: 'villagersStories',
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
    villagersStories_create,
    villagersStories_get,
    villagersStories_remove,
    villagersStories_update
}