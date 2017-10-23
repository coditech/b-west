import React from 'react';
import {NavLink} from "react-router-dom";

const ContactUsAdminPage = ({contactUs}) => {

    return (
        <div className={'text-center'}>
            <h2>About Us </h2>
            <NavLink to={'/admin/contact-us/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{contactUs.title}</td>
                        </tr>
                        <tr>
                            <th>Sub Title</th>
                            <td>{contactUs.headerTitle}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>
                                <div dangerouslySetInnerHTML={{__html: contactUs.content}}/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};
export {ContactUsAdminPage}