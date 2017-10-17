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
                , title: ''
                , subTitle: ''
                , additionalClass: 'find-a-store dark-pattern'
            },
            products: props.products,
            productsPageHeader: props.productsPageHeader
        }

    }

    iframe() {
        return {
            __html: iframe
        }
    }


    render() {
        const {products, productsPageHeader} = this.state;
        return (
            <div>
                <Header {...productsPageHeader} additionalClass={'products-header'}/>
                <div className="container-fluid store-locator">
                    <div className="popurlar_product">
                        <ul className="row">

                            {
                                products ? products.map((product, index) => <Product key={index} {...product}
                                                                                     classContainer={'col-sm-3'}/>) : null
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export {ProductsPage}
