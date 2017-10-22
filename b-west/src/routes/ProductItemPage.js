import React from 'react';
import Header from "../components/Header";


class ProductItemPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            products: props.products,
            productFound: props.productFound,

        }
    }

    render() {
        const {products, productFound} = this.state;
        if (productFound) {
            return (

                <div className={'product-item'}>
                    <Header title={products[0].name} additionalClass={'product-item-header dark-pattern'}/>
                    <div className="container margin-top-80 margin-bottom-80">
                        {
                            products.map(({name, price, image, status, slug,description}, index) => {
                                return (
                                    <div className={'row product'}>
                                        <div className="col-sm-5">
                                            <div className="items-in ">
                                                {status ? <div className="shop-tags" style={{backgroundColor: 'rgba(67, 125, 67, 0.65)', color: '#fff', fontSize: '1.5em'}}>{status}</div> : ""}
                                                <img src={image.src} className={'img-responsive'} alt={image.url}/>
                                            </div>

                                        </div>
                                        <div className="col-sm-6 large-detail">
                                            <h2 className="margin-top-0 margin-bottom-20">{name}</h2>
                                           <div dangerouslySetInnerHTML={{__html: description}}/>
                                            <hr/>
                                            <div className="some-info no-border">

                                            </div>
                                            <div className="price">Price <br/><span

                                                className="font-crimson">$ {price}</span></div>


                                            <div className="clearfix"/>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        return (
            <div className={'product-item'}>
                <Header title={'Page Not Found'} additionalClass={'product-item-header dark-pattern'}/>

            </div>
        )
    }
}

export {ProductItemPage}