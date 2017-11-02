import React from 'react';
import {NavLink} from "react-router-dom";

const InstaBannerAdminPage = ({instaBanner}) => {

    return (
        <div className={'text-center'}>
            <h2>Instagram Banner </h2>
            <NavLink to={'/admin/instagram-banner/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>

                        <tr>
                            <th>Image</th>
                            <td><img className={'img-responsive'} src={instaBanner.backgroundImage}
                                     alt={'Background Image'}/></td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {InstaBannerAdminPage}