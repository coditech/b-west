import {STATUS, websiteUrl} from '../../commanConfig';

function fetchJson(url) {
    return fetch(websiteUrl + '/api/' + url).then(res => res.json())
}

function fetchPostJson(url, settings) {
    return fetch(websiteUrl + '/api/' + url, settings).then(res => res.json())
}

const fetchHomeHeaderData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: STATUS.READY
                , image: {
                    src: '/header.jpg',
                    alt: 'Header Image'
                }
                , title: 'Hello world this is a title'
                , subTitle: 'Hello world this is a subtitle'
                , actionButton: {
                    text: 'Hello World'
                    , actionFunction: this.actionFunctionButton
                    , url: ''
                }
            })
        }, 200)
    })
}
const fetchFindAStoreHeaderData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: STATUS.READY
                , image: {
                    src: '/buylocal.jpg',
                    alt: 'Header Image'
                }
                , title: 'Hello world this is a title'
                , subTitle: 'Hello world this is a subtitle'
                , actionButton: {
                    text: 'Hello World'
                    , actionFunction: this.actionFunctionButton
                    , url: ''
                }
            })
        }, 200)
    })
}
const WebsiteStructure = {

    menu: [
        {
            name: 'String'
            , url: 'String'
            , active: 'Boolean'
        }

    ]
    , header: {
        title: ''
        , subTitle: ''
        , actionButton: {
            text: 'String'
            , url: ''
        }
    }
    , about: {
        title: ''
        , content: {
            short: ''
            , full: ''
        }
    }
    , product: []
    , stories: [
        {
            title: ''
            , content: {
            short: ''
            , full: ''
        }
            , images: [
            {
                url: ''
                , alt: ''
            }
        ]
        }
    ]
    , subscribers: {
        //    on || off
        status: false,
        mailchimpUrl: ''
    }
    , findAStore: [
        {
            name: 'String'
            , lat: 'Float 8'
            , lang: 'Float 8'
            , description: 'String'
        }
    ]
}

const api = {
    fetchHomeHeaderData
    , fetchFindAStoreHeaderData
}
export {fetchHomeHeaderData, fetchFindAStoreHeaderData}
export default api;