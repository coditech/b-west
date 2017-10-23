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


const aboutUsHomeSection_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const aboutUsHomeSection_update = (request, resources, next) => {

    const {title, content, subTitle, imageOneAlt, imageTwoAlt} = request.body;
    let files = request.files;
    console.log(request.body);

    uploadImagesToStorage(files, 'aboutUsHomeSection')
        .then(response => {
            let data = {
                title,
                content,
                subTitle,
                imageOneAlt,
                imageTwoAlt
            };
            const imageOne = response['imageOne'];
            if (imageOne) {
                data.imageOneSrc = imageOne.url;

            } else {
                log('Image One not found')
            }
            const imageTwo = response['imageTwo'];
            if (imageTwo) {
                data.imageTwoSrc = imageTwo.url;

            } else {
                log('Image Two not found')
            }
            firebaseUpdateData({
                databaseRef: 'aboutUsHomeSection',
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
    aboutUsHomeSection_get,
    aboutUsHomeSection_update
}