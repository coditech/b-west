import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log('Insta banner Us Home Section Model path: b-west/src/api/model/instaBanner.js ' + message);

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


const instaBanner_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const instaBanner_update = (request, resources, next) => {

    let files = request.files;
    console.log(request.body);

    uploadImagesToStorage(files, 'instaBanner')
        .then(response => {
            let data = {

            };
            const image = response['backgroundImage'];
            if (image) {
                data.backgroundImage = image.url;

            } else {
                log('Image  not found')
            }
            firebaseUpdateData({
                databaseRef: 'instaBanner',
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
        })

};

export {
    instaBanner_get,
    instaBanner_update
}