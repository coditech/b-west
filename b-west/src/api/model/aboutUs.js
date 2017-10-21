import {subscribe} from "../firebaseData";
import {firebaseInsertData, firebaseUpdateData, firebasePushData, firebaseDeleteData} from '../firebaseData';
import {isEmpty} from "../../helpers/index";

let allData = {};
if (isEmpty(allData)) {
    setTimeout(()=> firebasePushData({
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

const aboutUs_create = (request, resources, next) => {
    firebaseInsertData({databaseRef: 'aboutUs', data: {}}).then(response => {

    })
};

const aboutUs_get = (request, resources, next) => {

    resources.send({
        test: allData
    });
};
const aboutUs_update = (request, resources, next) => {

    resources.send({
        test: true
    });
};
const aboutUs_remove = (request, resources, next) => {

    resources.send({
        test: true
    });
};


export default {
    aboutUs_create,
    aboutUs_get,
    aboutUs_remove,
    aboutUs_update
}