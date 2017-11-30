import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";

const log = (message) => console.log('Subscriber banner Us Home Section Model path: b-west/src/api/model/subscriberBanner.js ' + message);

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


const subscriberBanner_get = (request, resources) => {

    resources.send({
        test: allData
    });
};
const subscriberBanner_update = (request, resources, next) => {
    const data = {
        display: request.body.display,
        mailcimpUrl: request.body.mailcimpUrl,
    }
    firebaseUpdateData({
        databaseRef: 'subscriberBanner',
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
    subscriberBanner_get,
    subscriberBanner_update
}