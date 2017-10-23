import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

const log = (message) => console.log('Contact Us Home Section Model path: b-west/src/api/model/contactUs.js ' + JSON.stringify(message))

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


const contactUs_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const contactUs_update = (request, resources, next) => {

    const {title, content, headerTitle} = request.body;
    const data = {
        title,
        content,
        headerTitle
    };
    log(data);
    firebaseUpdateData({
        databaseRef: 'contactUs',
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

};


export {
    contactUs_get,
    contactUs_update
}