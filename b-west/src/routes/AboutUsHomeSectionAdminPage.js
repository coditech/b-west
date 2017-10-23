import React from 'react';
import {NavLink} from "react-router-dom";

const AboutUsHomeSectionAdminPage = ({aboutUsHomeSection}) => {

    return (
        <div className={'text-center'}>
            <h2>About Us </h2>
            <NavLink to={'/admin/aboutus-home/edit'}>
                <button className={'btn'}>Edit</button>
            </NavLink>
            <div className="row">
                <div className="col-sm-8">
                    <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{aboutUsHomeSection.title}</td>
                        </tr>
                        <tr>
                            <th>Sub Title</th>
                            <td>{aboutUsHomeSection.subTitle}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>
                                <div dangerouslySetInnerHTML={{__html: aboutUsHomeSection.content}}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Image One</th>
                            <td><img className={'img-responsive'} src={aboutUsHomeSection.imageOne.src}
                                     alt={aboutUsHomeSection.imageOne.alt}/></td>
                        </tr>
                        <tr>
                            <th>Alt</th>
                            <td>{aboutUsHomeSection.imageOne.alt}</td>
                        </tr>
                        <tr>
                            <th>Image Two</th>
                            <td><img className={'img-responsive'} src={aboutUsHomeSection.imageTwo.src}
                                     alt={aboutUsHomeSection.imageTwo.alt}/></td>
                        </tr>
                        <tr>
                            <th>Alt</th>
                            <td>{aboutUsHomeSection.imageTwo.alt}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};

export {AboutUsHomeSectionAdminPage}