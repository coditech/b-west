import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";

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

    const {title} = request.body;
    console.log(request.body);
    let data = {
        title
    };
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
};

export {
    findAStore_get,
    findAStore_header_update
}