import React from "react";
import {Cell, Column} from "fixed-data-table-2";
import {ActionCell, ContentCell, DataTable, TextCell} from '../components/DataTable'
import {NavLink} from "react-router-dom";

const AboutUsAdminPage = (props) => {

    const {aboutUs, refreshData} = props;
    return (
        <div id={'table-container'}>
            <div className="row">
                <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

            </div>
            <NavLink to={'/admin/aboutpage/create'}>
                <button className={'btn'}>Add New Entry</button>
            </NavLink>
            <DataTable rowsCount={aboutUs.length} containerId={'table-container'}>

                <Column
                    columnKey="title"
                    cell={<TextCell data={aboutUs}/>}
                    header={<Cell>Title</Cell>}
                    fixed={true}
                    width={200}
                    flexGrow={2}
                />
                <Column
                    columnKey="content"
                    cell={<ContentCell data={aboutUs}/>}
                    header={<Cell>Content</Cell>}
                    width={200}
                    height={200}
                    flexGrow={2}
                />
                <Column
                    columnKey={"id"}
                    header={<Cell>Action</Cell>}
                    cell={<ActionCell data={aboutUs} action={{
                        refreshData,
                        action_delete: '/api/aboutpage',
                        action_url: '/admin/aboutpage'
                    }}
                    />}
                    width={300}
                    flexGrow={1}
                />

            </DataTable>
        </div>)

}
export {AboutUsAdminPage};
