import React from 'react';
import {NavLink} from "react-router-dom";

const AboutUsAdminViewPage = ({aboutUs, match}) => {
    aboutUs = aboutUs.find(item => {
        return item.id === match.params.id
    });
    return (
        <div className={'text-center'}>
            <h2>About Us </h2>
            <NavLink to={'/admin/aboutpage'}>
                <button className={'btn'}>Back</button>
            </NavLink>
            <NavLink to={'/admin/aboutpage/create'}>
                <button className={'btn'}>Add New Entry</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{aboutUs.title}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>
                                <div dangerouslySetInnerHTML={{__html: aboutUs.content}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Image</th>
                            <td><img className={'img-responsive'} src={aboutUs.imageSrc} alt={aboutUs.imageAlt}/></td>
                        </tr>
                        <tr>
                            <th>Alt</th>
                            <td>{aboutUs.imageAlt}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {AboutUsAdminViewPage}