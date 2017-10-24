import React from 'react';
import {NavLink} from "react-router-dom";

const FindAStoreHeaderAdminPage = ({findAStore}) => {

    return (
        <div className={'text-center'}>
            <h2>Find A Store Header</h2>
            <NavLink to={'/admin/find-a-store-header/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{findAStore.title}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {FindAStoreHeaderAdminPage}