import React from 'react';
import {NavLink} from "react-router-dom";

const ContactUsAdminPage = ({contactUs}) => {

    return (
        <div className={'text-center'}>
            <h2>Contact Us </h2>
            <NavLink to={'/admin/contact-us/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>

            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Show Background Image</th>
                            <td>
                                {
                                    contactUs.showBackgroundImage.toString()
                                }
                            </td>
                        </tr>
                        <tr>
                            <th>Image</th>
                            <td><img className={'img-responsive'} src={contactUs.bannerBackgroundImage}
                                     alt={'Contact Us Banner '}/></td>
                        </tr>
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