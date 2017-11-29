import React from 'react';
import {NavLink} from "react-router-dom";

const UsersAdminViewPage = ({users, match}) => {
    const user = users.find(item => {
        return item._id === match.params.id
    });

    if (user) {
        return (

            <div className={'text-center'}>
                <h2>User </h2>
                <NavLink to={'/admin/users'}>
                    <button className={'btn'}>Back</button>
                </NavLink>

                <div className="row">
                    <div className="col-sm-8">
                        <table className="table table-bordered table-striped">
                            <tbody>
                            <tr>
                                <th>User Name</th>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{user.email}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }

};

export {UsersAdminViewPage}