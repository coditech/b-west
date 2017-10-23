import util from "util";
import multer from "multer";

const googleStorage = require("@google-cloud/storage");


const storage = googleStorage({
    projectId: "b-west",
    keyFilename: "../b-west/src/b-west-firebase-adminsdk-e58gj-0315440c03.json"
});
const bucket = storage.bucket("b-west.appspot.com");


const uploadGoogle = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    },
    fileFilter: function fileFilter(req, file, callback) {
        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted
        let fileType = file.mimetype;
        if (
            fileType !== "image/png" &&
            fileType !== "image/jpeg" &&
            fileType !== "image/gif" &&
            fileType !== "image/jpg"
        ) {
            return callback(new Error("Only images are allowed"));
        }
        callback(null, true);
    }
});

/**
 * Upload the image file to Google Storage
 * @param {File} file object that will be uploaded to Google Storage
 * @param {String} file Path of the directory where the file gonna be uploaded
 */
const uploadImageToStorage = (file, path) => {
    new Promise((resolve, reject) => {
        if (!file) {
            reject('No image file');
        }
        const directory = path ? path + '/' : '';
        let newFileName = `${directory}${Date.now()}_${file.originalname}`;
        let fileUpload = bucket.file(newFileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });

        blobStream.on("error", error => {
            reject("Something is wrong! Unable to upload at the moment.", error);
        });
        blobStream.on("finish", () => {
            // The public URL can be used to directly access the file via HTTP.
            const url = util.format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
            //const f = bucket.file(url)
            return fileUpload.makePublic()
                .then(() => resolve(url))
                .catch(reject)
        });

        blobStream.end(file.buffer);
    });
    return promise;
};
const uploadImagesToStorage = (files, path) => {
    return new Promise((resolve, reject) => {
        if (!files) {
            reject(new Error('No image file'));
        }
        let urls = [];
        const directory = path ? path + '/' : '';
        const promises = files.map(file =>
            new Promise((resolve, reject) => {
                const fieldname = file.fieldname;
                let newFileName = `${directory}${Date.now()}_${file.originalname}`;

                let fileUpload = bucket.file(newFileName);

                const blobStream = fileUpload.createWriteStream({
                    metadata: {
                        contentType: file.mimetype
                    }
                });

                blobStream.on('error', (error) => {
                    reject('Something is wrong! Unable to upload at the moment.', error);
                });
                blobStream.on('finish', () => {
                    // The public URL can be used to directly access the file via HTTP.
                    const url = util.format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
                    const fileInfo = {
                        url,
                        file: file
                    };
                    urls[fieldname] = fileInfo;
                    resolve(fileInfo)
                });
                blobStream.end(file.buffer);

            })
        );
        return Promise.all(promises)
            .then(() => resolve(urls))
            .catch((e) => {
                throw e
            });
    })
};

export {uploadImagesToStorage, uploadImageToStorage, uploadGoogle};