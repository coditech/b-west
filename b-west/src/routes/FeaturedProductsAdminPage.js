import React from "react";
import {Cell, Column} from "fixed-data-table-2";
import {ActionCell, ContentCell, DataTable, TextCell} from '../components/DataTable'
import {NavLink} from "react-router-dom";

const FeaturedProductsAdminPage = (props) => {

    const {featuredProducts, refreshData, auth} = props;
    return (
        <div id={'table-container'}>
            <div className="row">
                <h2 className="col-sm-6 col-sm-push-3">Featured Products Section</h2>

            </div>
            {
                featuredProducts.length < 3 ?
                    <NavLink to={'/admin/featured-products/create'}>
                        <button className={'btn'}>Add New Entry</button>
                    </NavLink> : null
            }

            <DataTable rowsCount={featuredProducts.length} containerId={'table-container'}>

                <Column
                    columnKey="name"
                    cell={<TextCell data={featuredProducts}/>}
                    header={<Cell>Product Name</Cell>}
                    fixed={true}
                    width={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="slug"
                    cell={<TextCell data={featuredProducts}/>}
                    header={<Cell>Product Slug</Cell>}
                    width={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="price"
                    cell={<ContentCell data={featuredProducts}/>}
                    header={<Cell>Price</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="status"
                    cell={<ContentCell data={featuredProducts}/>}
                    header={<Cell>Status</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="imageAlt"
                    cell={<ContentCell data={featuredProducts}/>}
                    header={<Cell>Product Image Alt</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey={"id"}
                    header={<Cell>Action</Cell>}
                    cell={<ActionCell data={featuredProducts} action={{
                        refreshData,
                        action_delete: '/api/featured-products',
                        action_url: '/admin/featured-products',
                        token: auth.token
                    }}
                    />}
                    width={300}
                    flexGrow={1}
                />

            </DataTable>
        </div>)

}
export {FeaturedProductsAdminPage};
