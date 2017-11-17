import React from 'react';
import {NavLink} from "react-router-dom";

const HomeHeaderAdminPage = ({homeHeader}) => {

    return (
        <div className={'text-center'}>
            <h2>About Us </h2>
            <NavLink to={'/admin/home-header/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{homeHeader.title}</td>
                        </tr>
                        <tr>
                            <th>Sub Title</th>
                            <td>{homeHeader.subTitle}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>
                                <div dangerouslySetInnerHTML={{__html: homeHeader.content}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Image One</th>
                            <td><img className={'img-responsive'} src={homeHeader.imageSrc}
                                     alt={homeHeader.imageAlt}/></td>
                        </tr>
                        <tr>
                            <th>Alt</th>
                            <td>{homeHeader.imageAlt}</td>
                        </tr>
                        <tr>
                            <th style={{textAlign: 'center'}} colSpan={2}>Action Button</th>
                        </tr>
                        <tr>
                            <th>Available</th>
                            <td>{(homeHeader.actionButtonShow === true || homeHeader.actionButtonShow === 'true') ? 'true' : 'false'}</td>
                        </tr>
                        <tr>
                            <th>Action Button text</th>
                            <td>{homeHeader.actionButtonText}</td>
                        </tr>
                        <tr>
                            <th>Action Button url</th>
                            <td>{homeHeader.actionButtonUrl}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {HomeHeaderAdminPage}