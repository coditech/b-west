import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";

const FindAStoreHeaderAdminEditPage = (props) => {
    const {findAStore, history, refreshData} = props;

    const onSubmit = (evt, history, refreshData) => {
        evt.preventDefault();
        let formData = new FormData();
        const titleInput = evt.target.title.value;
        alert(titleInput);
        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", titleInput);
        console.log();

        superagent
            .put(websiteUrl + "api/find-a-store-header")
            .send(formData)
            .end((err, res) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    alert('Record Updated');
                    refreshData();
                    history.push('/admin/find-a-store-header')


                }
            })
    }
    const {title} = findAStore;
    console.log(JSON.stringify(title));
    return (
        <div>
            <div className="row">
                <h2 className="col-sm-6 col-sm-push-3">Find A Store Header Section</h2>

            </div>
            <NavLink to={'/admin/aboutus-home'}>
                <button className={'btn'}>Back</button>
            </NavLink>
            <form onSubmit={event => onSubmit(event, history, refreshData)}>
                <div className="row form-group text-center">
                    <div className="col-sm-3">
                        <label htmlFor="title" className={" "}>
                            Title
                        </label>
                    </div>
                    <div className="col-sm-6">
                        <input
                            className={"form-control"}
                            type="text"
                            id={"title"}
                            name={"title"}
                            defaultValue={title}
                        />
                    </div>
                </div>
                <div className="row form-group text-center">
                    <div className="col-sm-3 col-sm-push-3">
                        <button type={'submit'} className={'btn btn-block'}>Submit</button>
                    </div>
                </div>

            </form>
        </div>

    )
};


export {FindAStoreHeaderAdminEditPage};