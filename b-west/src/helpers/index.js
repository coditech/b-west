import {STATUS, websiteUrl} from "../commanConfig";

function fetchJson(url) {
    return fetch(websiteUrl + "/api/" + url).then(res => res.json())
}

function fetchPostJson(url, settings) {
    return fetch(websiteUrl + "/api/" + url, settings).then(res => res.json())
}

const fetchHomeHeaderData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: STATUS.READY
                , image: {
                    src: "/header.jpg",
                    alt: "Header Image"
                }
                , title: "Hello world this is a title"
                , subTitle: "Hello world this is a subtitle"
                , actionButton: {
                    text: "Hello World"
                    , actionFunction: this.actionFunctionButton
                    , url: ""
                }
            })
        }, 200)
    })
}
const WebsiteStructure = {

    menu: [
        {
            name: "String"
            , url: "String"
        }

    ]
    , homeHeader: {
        title: ""
        , subTitle: ""
        , actionButton: {
            text: "String"
            , url: ""
        }
    }
    , about: [
        {
            title: "",
            content: '',
            image: ''
        }


    ], product: []
    , stories: [
        {
            title: ""
            , content: {
            short: ""
            , full: ""
        }
            , images: [
            {
                url: ""
                , alt: ""
            }
        ]
        }
    ]
    , subscribers: {
        //    on || off
        status: false,
        mailchimpUrl: ""
    }
    , findAStore: [
        {
            name: "String"
            , lat: "Float 8"
            , lang: "Float 8"
            , address: "string"
            , description: "String"
        }
    ]
    , contact: {
        image: {
            src: '',
            alt: ''
        },
        title: '',
        content: '',
        socialLinks: [
            {
                icon: '',
                url: ''
            }
        ]
    }
}
const homePage = {
    Header: WebsiteStructure.homeHeader,
    about: {
        title: '',
        content: '',
        imageOne: {
            src: '',
            alt: ''
        },
        imageTwo: {
            src: '',
            alt: ''
        }
    },
    stories: [
        {
            title: '',
            subTitle: '',
            image: {
                src: '',
                alt: ''
            }
        }
    ],
    instaFollow: {
        title: '',
        instaLink: '',
        backgroundImage: {
            src: '',
            alt: ''
        }
    },
    featuredProducts: [
        {
            productName: '',
            price: '',
            status: '',
            image: {
                src: '',
                alt: ''
            }
        }
    ],
    findAStore: {
        title: '',
        subTitle: '',
        backgroundImage: {
            src: '',
            alt: ''
        }
    },
    subscribe: {
        mailchimpUrl: false,
        display: false
    },
    footer: {
        socialLinks: [
            {
                icon: '',
                url: ''
            }
        ],
        menuItems: {
            name: "String",
            url: "String"
        },
        codiLogo: ""
    }

}
let n = 'till n number';
const aboutUsPage = {
    header: WebsiteStructure.about[0],
    content: [
        WebsiteStructure[1], WebsiteStructure[n]
    ],
    subscribe: {
        mailchimpUrl: false,
        display: false
    },
    footer: {
        socialLinks: [
            {
                icon: '',
                url: ''
            }
        ],
        menuItems: {
            name: "String",
            url: "String"
        },
        codiLogo: ""
    }
}
const contactPage = {
    header: WebsiteStructure.contact.image,
    content: WebsiteStructure.contact,
    subscribe: {
        mailchimpUrl: false,
        display: false
    },
    footer: {
        socialLinks: [
            {
                icon: '',
                url: ''
            }
        ],
        menuItems: {
            name: "String",
            url: "String"
        },
        codiLogo: ""
    }

}
const findAStorePage = {
    header: WebsiteStructure.findAStore,
    map: '',
    locations: [
        {
            lat: '',
            long: '',
            name: '',
            content: ''
        }
    ]
};

const productPage = {}
const api = {
    fetchHomeHeaderData
    , fetchFindAStoreHeaderData
}
export {fetchHomeHeaderData, fetchFindAStoreHeaderData}
export default api;