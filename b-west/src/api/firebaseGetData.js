import db from '../databaseConnection';

const rootRef = db.ref("/");
const aboutUsHomeSectionRef = db.ref("/aboutUsHomeSection");

let allData = {
    aboutUsData: [],
    featuredProductsData: [],
    aboutUsHomeSectionData: {},
    contactUsData: {},
    featuredStoriesData: {},
    findAStoreData: {},
    homeHeaderData: {},
    instaBannerData: {},
    productsData: [],
    productsPageHeaderData: {},
    subscriberBannerData: {},
    villagersStoriesData: [],
    villagersStoriesHeaderData: {}
};
let aboutUsData = [];
let featuredProductsData = [];
let productsData = [];

const log = (thing) => {
    console.log("[firebaseGetData]", thing)
};

rootRef.on("value", function (snapshot) {

    let allItems = snapshot.val();

    allData.aboutUsHomeSectionData = allItems.aboutUsHomeSection;
    allData.contactUsData = allItems.contactUs;
    allData.featuredStoriesData = allItems.featuredStories;
    allData.homeHeaderData = allItems.homeHeader;
    allData.instaBannerData = allItems.instaBanner;
    allData.productsPageHeaderData = allItems.productsPageHeader;
    allData.subscriberBannerData = allItems.subscriberBanner;
    allData.villagersStoriesHeaderData = allItems.villagersStoriesHeader;
    /**/
    let aboutUsItems = allItems.aboutUs;
    aboutUsData = [];
    for (let itemKey in aboutUsItems) {
        const itemData = aboutUsItems[itemKey];
        aboutUsData.push({
            ...itemData,
            id: itemKey,

        });
    }
    allData.aboutUsData = aboutUsData;
    /**/

    /**/

    let featuredProductsItems = allItems.featuredProducts;
    featuredProductsData = [];
    for (let itemKey in featuredProductsItems) {
        const itemData = featuredProductsItems[itemKey];
        featuredProductsData.push({
            ...itemData,
            id: itemKey,

        });
    }
    allData.featuredProductsData = featuredProductsData;

    /**/

    /**/
    let findAStoreItems = allItems.findAStore;
    let sotresItems = findAStoreItems.stores;
    let stores = [];
    for (let itemKey in sotresItems) {
        const itemData = sotresItems[itemKey];
        stores.push({
            ...itemData,
            id: itemKey,

        });
    }
    findAStoreItems.stores = stores;
    allData.findAStoreData = findAStoreItems;
    /**/

    /**/

    let productsItems = allItems.products;
    productsData = [];
    for (let itemKey in productsItems) {
        const itemData = productsItems[itemKey];
        productsData.push({
            ...itemData,
            id: itemKey,

        });
    }
    allData.productsData = productsData;
    /**/

    /**/

    let villagersStoriesItems = allItems.villagersStories;

    let villagersStoriesData = [];
    for (let itemKey in villagersStoriesItems) {

        let imagesData = [];
        const itemData = villagersStoriesItems[itemKey];
        let images = itemData.images;

        for (let imageKey in images) {
            imagesData.push({
                ...images[imageKey],
                id: imageKey,

            });
        }
        itemData.images = imagesData;
        villagersStoriesData.push({
            ...itemData,
            id: itemKey,

        });
    }
    allData.villagersStoriesData = villagersStoriesData;

    /**/

}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});

/*
villagersStoriesRef.on("value", function (snapshot) {
    //
    villagersStoriesData = snapshot.val();
    let images = snapshot.val().images;
    let storiesImages = [];
    for (let itemKey in images) {
        const itemData = images[itemKey];
        storiesImages.push({
            ...itemData,
            id: itemKey,

        });
    }
    villagersStoriesData.images = images;
    allData.villagersStoriesData = villagersStoriesData;


}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});


aboutUsHomeSectionRef.on("value", function (snapshot) {
    allData.aboutUsHomeSectionData = snapshot.val();

}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
contactUsRef.on("value", function (snapshot) {
    allData.contactUsData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
featuredStoriesRef.on("value", function (snapshot) {
    allData.featuredStoriesData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
homeHeaderRef.on("value", function (snapshot) {
    allData.homeHeaderData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
instaBannerRef.on("value", function (snapshot) {
    allData.instaBannerData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
productsPageHeaderRef.on("value", function (snapshot) {
    allData.productsPageHeaderData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
subscriberBannerRef.on("value", function (snapshot) {
    allData.subscriberBannerData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});
villagersStoriesHeaderRef.on("value", function (snapshot) {
    allData.villagersStoriesHeaderData = snapshot.val();
}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});*/

const listeners = [];

export const once = (listener) => {
    subscribe((data) => {
        listener(data);
        unsubscribe(listener);
    })
}

export const subscribe = (listener) => {
    listeners.push(listener)
    return unsubscribe.bind(null, listener);
}

export const unsubscribe = (listener) => {
    const index = listeners.indexOf(listener)
    if (index >= 0) {
        listeners.splice(index, 1)
        return subscribe.bind(null, listener)
    }
}

const trigger = () => {
    listeners.forEach(listener => listener(allData))
}


let _hasLoaded = false;

export const hasLoaded = () => {
    return _hasLoaded
}

rootRef.on("value", trigger)

once(() => {
    _hasLoaded = true
})

export {aboutUsHomeSectionRef}