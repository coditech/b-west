import React from 'react';
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";

class AboutUsAdminAddPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ...props,
            title: '',
            content: '',
            alt: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        let formData = new FormData();
        const files = this.filesInput.files;
        for (let key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append("image", files[key]);
            }
        }
        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", this.state.title);
        formData.append("content", this.state.content);
        formData.append("alt", this.state.alt);

        console.log('this.state', this.state);
        superagent
            .post(websiteUrl + "api/aboutpage")
            .send(formData)
            .end((err, res)=>{
            console.log(err);
            if(err){
                alert('something went wrong please try again');
            }
            else {
                alert('Record Added');
                console.log(res.body);
               this.state.history.push('/admin/aboutpage')


            }
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/aboutpage'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.onSubmit(event)}>
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
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="content" className={" "}>
                                Content
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <CKEditor
                                activeClass="p10"
                                content={this.state.content}
                                events={{
                                    change: this.onChange
                                }}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Background Image
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                ref={input => {
                                    this.filesInput = input;
                                }}
                                id={"image"}
                                name={"image"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="alt" className={" "}>
                                Image Alt
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"alt"}
                                name={"alt"}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3 col-sm-push-3">
                            <input type="submit" className={"form-control btn"}/>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export {AboutUsAdminAddPage};