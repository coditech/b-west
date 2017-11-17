import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log('Find A Store  Model path: b-west/src/api/model/findAStore.js ' + message);

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


const findAStore_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const findAStore_header_update = (request, resources, next) => {

    const {title, showBackgroundImage} = request.body;
    let files = request.files;
    uploadImagesToStorage(files, 'findAStore')
        .then(response => {
            let data = {
                title,
                showBackgroundImage
            };
            const image = response['bannerBackgroundImage'];
            if (image) {
                data.bannerBackgroundImage = image.url;
            } else {
                log('Image not found')
            }
            firebaseUpdateData({
                databaseRef: 'findAStore',
                data
            }).then(response => {
                if (response.success) {
                    resources.send({
                        success: true,
                        error: null,
                        data: data
                    })
                } else {
                    resources.send({
                        success: false,
                        error: response.error,
                        data: data
                    })
                }
            }).catch(error => {
                log(error);
                resources.send({
                    success: false,
                    error: error,
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
        });
};

export {
    findAStore_get,
    findAStore_header_update
}