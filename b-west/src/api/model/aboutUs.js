import {subscribe} from "../firebaseData";
import {firebaseInsertData, firebaseUpdateData, firebasePushData, firebaseDeleteData} from '../firebaseData';
import {isEmpty} from "../../helpers/index";
import {uploadImageToStorage} from "../firebaseStorage";

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

const aboutUs_create = (request, resources, next) => {
    const {title, content, alt} = request.body;

    let files = request.files;

    if (files.length > 0) {
        for (let file in files) {
            const uploadFile = files[file];
            console.log("FIle Name : ", files[file]);


                const imagePath = new Promise((resolve, reject) => {
                    if (title === 'error') {
                        reject("error");
                    }
                    if (uploadFile.fieldname === "image") {


                        uploadImageToStorage(uploadFile, 'aboutUs')
                            .then(success => {
                                resolve(success);

                            })
                            .catch((err) => {
                                next(err);
                                reject(err)
                            })
                    }else {
                        resolve('')
                    }
                }).then(resp => {

                    console.log('resp =>' , resp);
                    firebasePushData({
                        databaseRef: 'aboutUs',
                        data: {
                            title: title,
                            content: content,
                            image: {
                                alt: alt,
                                src: resp
                            }
                        }
                    }).then(res => {
                        console.log(res);
                        resources.send({
                            res
                        })
                    })

                });


        }
    } else {
        console.log("else");
    }
    // firebaseInsertData({databaseRef: 'aboutUs', data: {}}).then(response => {
    //
    // })
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
        console.log('Error deleting data:', error);
        resources.send({status: 'error', error: error});
    });
};


export default {
    aboutUs_create,
    aboutUs_get,
    aboutUs_remove,
    aboutUs_update
}