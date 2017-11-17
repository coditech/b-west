import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";

class FindAStoreHeaderAdminEditPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        const {findAStore} = props;
        const {title, bannerBackgroundImage, showBackgroundImage} = findAStore;
        this.state = {
            ...props,
            inputs: {
                title,
                bannerBackgroundImage,
                showBackgroundImage

            }
        }
    }

    handleFormSubmit(evt, history, refreshData) {
        evt.preventDefault();
        let formData = new FormData();
        const files = this.filesInput.files;
        for (let key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append("bannerBackgroundImage", files[key]);
            }
        }
        const titleInput = this.state.inputs.title;
        const showBackgroundImage = this.state.inputs.showBackgroundImage;
        alert(titleInput);
        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", titleInput);
        formData.append("showBackgroundImage", showBackgroundImage);
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
                    this.state.refreshData();
                    this.state.history.push('/admin/find-a-store-header')


                }
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newState = {
            ...this.state,
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        };
        console.log(newState.inputs);
        this.setState(newState);
    }

    render() {
        const {inputs, history, refreshData} = this.state;
        const {title, bannerBackgroundImage} = inputs;

        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Find A Store Header Section</h2>

                </div>
                <NavLink to={'/admin/find-a-store-header'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.handleFormSubmit(event, history, refreshData)}>
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
                                onChange={event => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6 col-sm-push-3">
                            <input
                                type={"checkbox"}
                                name={"showBackgroundImage"}
                                id={"showBackgroundImage"}
                                defaultChecked={this.state.inputs.showBackgroundImage}
                                onChange={event => {
                                    this.handleInputChange(event)
                                }}
                            /><label htmlFor={'showBackgroundImage'}>Select if action button is available on Home
                            Header</label>
                        </div>
                    </div>
                    {
                        bannerBackgroundImage ? <div className="row">
                            <div className="col-xs-4">
                                <img className={'img-responsive'} src={bannerBackgroundImage}
                                     alt={'background '}/>
                            </div>
                        </div> : null
                    }

                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Find A store Image
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                accept={"image/*"}
                                ref={input => {
                                    this.filesInput = input;
                                }}
                                id={"image"}
                                name={"image"}
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
    }
}


export {FindAStoreHeaderAdminEditPage};