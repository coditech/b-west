import React from 'react';
import {NavLink} from "react-router-dom";

const SubscriberBannerAdminPage = (props) => {
const {subscriberBanner}= props;
    return (
        <div className={'text-center'}>
            <h2>Subscriber Banner</h2>
            <NavLink to={'/admin/subscriberBanner/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Display</th>
                            <td>{subscriberBanner.display ? 'true': 'false'}</td>
                        </tr>
                        <tr>
                            <th>MailChimp Url</th>
                            <td>{subscriberBanner.mailcimpUrl}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {SubscriberBannerAdminPage}