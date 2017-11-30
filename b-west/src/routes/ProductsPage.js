import React from "react";
import "../styles/StoreLocator.css";
import Header from "../components/Header";
import {STATUS} from "../commanConfig";
import Product from "../components/Product";

const iframe =
    '<iframe allowfullscreen=\'true\' frameborder="0" width="100%" height="700px"\n' +
    '                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBZ6uoGFiBceh7ni0WpT9B_iA9BO6ERIjA&amp;center=-33.8569%2C151.2152&amp;zoom=11"></iframe>';

class ProductsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            status: STATUS.NONE,
            headerData: {
                status: STATUS.READY,
                title: "",
                subTitle: "",
                additionalClass: "find-a-store dark-pattern"
            },
            fileteredProducts: null,
            products: props.products,
            productsPageHeader: props.productsPageHeader,
            limit: 8,
            showMore: false
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleShowMore = this.handleShowMore.bind(this);
    }

    handleSearch(event) {
        const searchTerm = event.target.value;
        let filtered = [];
        this.state.products.map((product) => {
            if (
                product.name
                    .toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) === -1
            ) {
                return 1;
            }
            filtered.push(product);
            return 0;
        });
        this.setState({
            fileteredProducts: filtered
        });
    }

    handleShowMore() {
        this.setState({
            ...this.state,
            limit: this.state.products.length,
            showMore: true
        })

    }

    iframe() {
        return {
            __html: iframe
        };
    }


    render() {
        const {products, productsPageHeader, fileteredProducts} = this.state;
        const headerData = {
            ...productsPageHeader,
            actionButton: {
                show: false
            }
        };
        return (
            <div>
                <Header {...headerData} additionalClass={"products-header"}/>
                <div className="container store-locator">
                    <div className="popurlar_product ">

                        <div className="row">
                            <div className="col-sm-6 col-sm-push-3">
                                <input type="text" onChange={e => this.handleSearch(e)} className={"form-control"}
                                       placeholder="Take A Look At Our Different Products" id="search-product-input"/>
                            </div>
                        </div>

                        <ul className="row">
                            {fileteredProducts
                                ? fileteredProducts.map((product, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            {...product}
                                            classContainer={"col-sm-3"}
                                        />
                                    )
                                })
                                : products.map((product, index) => {

                                    if (this.state.limit > index) {
                                        return (

                                            <Product
                                                key={index}
                                                {...product}
                                                classContainer={"col-sm-3"}
                                            />
                                        )
                                    }
                                    return '';
                                })}
                        </ul>
                        {
                            !this.state.showMore ? <div className="row text-center margin-bottom-30">
                                <button className={'btn '} onClick={this.handleShowMore}>
                                    Show more...
                                </button>
                            </div> : null
                        }
                        <div className="margin-bottom-90"/>

                    </div>
                </div>
            </div>
        );
    }
}

export {ProductsPage};
