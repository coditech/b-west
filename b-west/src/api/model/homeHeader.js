import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log('About Us Home Section Model path: b-west/src/api/model/aboutUsHomeSection.js ' + message)

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


const homeHeader_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const  homeHeader_update = (request, resources, next) => {

    const {title, content, subTitle, imageAlt, actionButtonShow, actionButtonText, actionButtonUrl} = request.body;
    let files = request.files;
    console.log(request.body);

    uploadImagesToStorage(files, 'homeHeader')
        .then(response => {
            let data = {
                title,
                content,
                subTitle,
                imageAlt,
                actionButtonText,
                actionButtonUrl,
                actionButtonShow
            };
            const image = response['imageSrc'];
            if (image) {
                data.imageSrc = image.url;

            } else {
                log('Image  not found')
            }
            firebaseUpdateData({
                databaseRef: 'homeHeader',
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
     homeHeader_get,
     homeHeader_update
}