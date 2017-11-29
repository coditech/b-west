import React from "react";
import {Cell, Column} from "fixed-data-table-2";
import {ActionCell, ContentCell, DataTable, TextCell} from '../components/DataTable'
import {NavLink} from "react-router-dom";

const ProductsAdminPage = (props) => {

    const {products, refreshData, auth} = props;
    return (
        <div id={'table-container'}>
            <div className="row">
                <h2 className="col-sm-6 col-sm-push-3">Products Section</h2>

            </div>

                    <NavLink to={'/admin/products/create'}>
                        <button className={'btn'}>Add New Entry</button>
                    </NavLink>
            <DataTable rowsCount={products.length} containerId={'table-container'}>

                <Column
                    columnKey="name"
                    cell={<TextCell data={products}/>}
                    header={<Cell>Product Name</Cell>}
                    fixed={true}
                    width={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="slug"
                    cell={<TextCell data={products}/>}
                    header={<Cell>Product Slug</Cell>}
                    width={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="price"
                    cell={<ContentCell data={products}/>}
                    header={<Cell>Price</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="status"
                    cell={<ContentCell data={products}/>}
                    header={<Cell>Status</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="imageAlt"
                    cell={<ContentCell data={products}/>}
                    header={<Cell>Product Image Alt</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey={"id"}
                    header={<Cell>Action</Cell>}
                    cell={<ActionCell data={products} action={{
                        refreshData,
                        action_delete: '/api/products',
                        action_url: '/admin/products',
                        token: auth.token
                    }}
                    />}
                    fixed={true}

                    width={300}
                    flexGrow={1}
                />

            </DataTable>
        </div>)

}
export {ProductsAdminPage};
