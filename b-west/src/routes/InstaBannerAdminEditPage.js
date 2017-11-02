import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";
import {Quill} from "../components/Quill";

class InstaBannerAdminEditPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        const instaBanner = props.instaBanner;
        this.state = {
            ...props,
            ...instaBanner,


        };
        this.refreshData = props.refreshData;
        this.onChange = this.onChange.bind(this);

    }


    handleQuillChange(value) {
        this.setState({content: value});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onChange(evt) {
        let newContent = evt.editor.getData();
        this.setState({
            content: newContent
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        alert(9);
        const image = this.filesInput.files;
        let formData = new FormData();
        for (let key in image) {
            // check if this is a file:
            if (image.hasOwnProperty(key) && image[key] instanceof File) {

                formData.append("backgroundImage", image[key]);
                superagent
                    .put(websiteUrl + "api/instagram-banner")
                    .send(formData)
                    .end((err, res) => {
                        if (err) {
                            alert('something went wrong please try again');
                        }
                        else {
                            alert('Record Updated');
                            this.refreshData();
                            this.state.history.push('/admin/instagram-banner')


                        }
                    })
            }

        }

        // IMAGES MISSING IN THE FORM DATA


    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/instagram-banner'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row">
                        <div className="col-xs-4">
                            <img className={'img-responsive'} src={this.state.backgroundImage}
                                 alt={this.state.backgroundImage}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Image
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
                                required={true}
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
        );
    }
}

export {InstaBannerAdminEditPage};