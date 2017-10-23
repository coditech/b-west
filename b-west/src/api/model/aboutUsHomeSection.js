import {firebasePushData, firebaseUpdateData, subscribe} from "../firebaseData";
import {isEmpty} from "../../helpers/index";
import {uploadImagesToStorage} from "../firebaseStorage";

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

                console.log('Data', data);
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

export {
    aboutUsHomeSection_get,
    aboutUsHomeSection_update
}