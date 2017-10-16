import React from 'react';
import '../styles/StoreLocator.css';
import Header from "../components/Header";
import {STATUS} from "../commanConfig";
import {fetchFindAStoreHeaderData} from "../helpers/index";
import Product from "../components/Product";

const iframe = '<iframe allowfullscreen=\'true\' frameborder="0" width="100%" height="700px"\n' +
    '                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBZ6uoGFiBceh7ni0WpT9B_iA9BO6ERIjA&amp;center=-33.8569%2C151.2152&amp;zoom=11"></iframe>';

class ProductsPage extends React.Component {


    constructor(props, context) {

        super(props, context);
        this.state = {
            status: STATUS.NONE
            , headerData: {
                status: STATUS.READY
                , image: {
                    src: '',
                    alt: ''
                }
                , title: ''
                , subTitle: ''
                , actionButton: {
                    text: ''
                    , actionFunction: ''
                },
                additionalClass: 'find-a-store'
            }
        }

    }

    iframe() {
        return {
            __html: iframe
        }
    }

    componentDidMount() {
        const oldState = this.state;

        this.setState({...oldState, headerData: {...oldState.headerData, status: STATUS.LOADING}});
        fetchFindAStoreHeaderData()
            .then(headerData => {
                this.setState((oldState) => ({
                    ...oldState
                    , status: STATUS.READY
                    , headerData: {...headerData, additionalClass: 'find-a-store'}
                }))
            })

    }


    render() {
        const products = [
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_1.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: { src: '/product_2.jpg', alt: 'product 2' },
                classContainer: 'col-sm-4 col-xs-6'
            },
            {
                status: 'sale',
                productUrl: '/productUrl',
                name: 'Labneh',
                price: "32",
                image: {src: '/product_3.jpg', alt: 'product 1'},
                classContainer: 'col-sm-4 col-xs-6'
            },
        ]
        return (
            <div>
                <Header {...this.state.headerData}/>
                <div className="container-fluid store-locator">
                    <div className="popurlar_product">
                        <ul className="row">
                            {
                                products.map((product, index) => <Product key={index} {...product}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export {ProductsPage}
