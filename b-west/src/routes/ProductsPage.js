import React from "react";
import "../styles/StoreLocator.css";
import Header from "../components/Header";
import { STATUS } from "../commanConfig";
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
      fileteredProducts:null,
      products: props.products,
      productsPageHeader: props.productsPageHeader
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
   const searchTerm = event.target.value;
    var filtered = [];
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

  iframe() {
    return {
      __html: iframe
    };
  }


  render() {
    const { products, productsPageHeader,fileteredProducts } = this.state;
      const headerData = {
          ...productsPageHeader,
          actionButton: {
              show: false
          }
      }
    return (
      <div>
        <Header {...headerData} additionalClass={"products-header"} />
        <div className="container store-locator">
          <div className="popurlar_product ">

            <div className="row">
              <div className="col-sm-6 col-sm-push-3">
              <input type="text" onChange={e => this.handleSearch(e)} className={"form-control"} placeholder="Take A Look At Our Different Products" id="search-product-input" />
              </div>
            </div>
            
            <ul className="row">
              {fileteredProducts
                ? fileteredProducts.map((product, index) => (
                    <Product
                      key={index}
                      {...product}
                      classContainer={"col-sm-3"}
                    />
                  ))
                : products.map((product, index) => (

                    <Product
                      key={index}
                      {...product}
                      classContainer={"col-sm-3"}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { ProductsPage };
