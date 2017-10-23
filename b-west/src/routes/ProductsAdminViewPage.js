import React from 'react';
import {NavLink} from "react-router-dom";

const ProductsAdminViewPage = ({featuredProducts, match}) => {
    featuredProducts = featuredProducts.find(item => {
        return item.id === match.params.id
    });
    return (

        <div className={'text-center'}>
            <h2>About Us </h2>
            <NavLink to={'/admin/featured-products'}>
                <button className={'btn'}>Back</button>
            </NavLink>
            {
                featuredProducts.length < 3 ?
                    <NavLink to={'/admin/featured-products/create'}>
                        <button className={'btn'}>Add New Entry</button>
                    </NavLink> : null
            }
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Product Name</th>
                            <td>{featuredProducts.name}</td>
                        </tr>
                        <tr>
                            <th>Product Slug</th>
                            <td>{featuredProducts.slug}</td>
                        </tr>
                        <tr>
                            <th>Product Price</th>
                            <td>{featuredProducts.price}</td>
                        </tr>
                        <tr>
                            <th>Product Status</th>
                            <td>{featuredProducts.status}</td>
                        </tr>
                        <tr>
                            <th>Product Description</th>
                            <td>
                                <div dangerouslySetInnerHTML={{__html: featuredProducts.description}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Image</th>
                            <td><img className={'img-responsive'} src={featuredProducts.imageSrc}
                                     alt={featuredProducts.imageAlt}/></td>
                        </tr>
                        <tr>
                            <th>Alt</th>
                            <td>{featuredProducts.imageAlt}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {ProductsAdminViewPage}