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
const aboutUsHomeSection_updates = (request, resources, next) => {

    const {title, content, subTitle, altOne, altTwo} = request.body;
    let files = request.files;
    if (files.length > 0) {

        uploadImagesToStorage(files, 'aboutUsHomeSection')
            .then(resp => {
                let data = {
                    title,
                    content,
                    subTitle,
                };
                if (resp['imageOne']) {
                    data.imageOne = {
                        alt: altOne,
                        src: resp['imageOne'].url
                    }
                }
                if (resp['imageTwo']) {
                    data.imageTwo = {
                        alt: altTwo,
                        src: resp['imageTwo'].url
                    }
                }

                log('Data', data);
                firebaseUpdateData({
                    databaseRef: 'aboutUsHomeSection',
                    data
                }).then(res => {
                    resources.send({
                        res
                    })
                })
            })
            .catch((err) => {
                next(err);
            });


    } else {
        // update without Image
        firebaseUpdateData({
            databaseRef: 'aboutUsHomeSection',
            data: {
                title,
                content,
                subTitle,


            }
        }).then(res => {
            resources.send({
                res
            })
        })
    }
};

const aboutUsHomeSection_update = (request, resources, next) => {

    const {title, content, subTitle, altOne, altTwo} = request.body;
    let files = request.files;
    console.log(request.body);

    uploadImagesToStorage(files, 'aboutUsHomeSection')
        .then(response => {
            let data = {
                title,
                content,
                subTitle,
            };
            const imageOne = response['imageOne'];
            if (imageOne) {
                data.imageOne = {
                    src: imageOne.url,
                    alt: altOne
                }

            } else {
                log('Image One not found')
            }
            const imageTwo = response['imageTwo'];
            if (imageTwo) {
                data.imageTwo = {
                    src: imageTwo.url,
                    alt: altTwo
                }

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