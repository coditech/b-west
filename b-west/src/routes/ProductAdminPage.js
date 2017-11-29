import React from "react";
import superagent from "superagent";
import CKEditor from "react-ckeditor-component";
import {websiteUrl} from "../helpers";

class ProductAdminPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            ...props,
            content: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        });
    }

    onChange(evt) {
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        alert(0);
        let formData = new FormData();
        const files = this.filesInput.files;
        for (var key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append("file", files[key]);
            }
        }

        const form = evt.target;

        // IMAGES MISSING IN THE FORM DATA
        formData.append("name", form.name.value);
        formData.append("status", form.status.value);
        formData.append("price", form.price.value);
        formData.append("content", this.state.content);

        superagent
            .post(websiteUrl + "api/homeheader")
            .send(formData)
            .set('x-access-token', this.state.auth.token)
            .end((err, response) => {
                if (err) {
                    //there was an error, handle it here
                    alert(-1);
                } else if (response.ok) {
                    //this was successful, handle it here
                    alert(1);
                }
            })
            .then(x => {
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Product Admin Page</h2>
                </div>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="Name" className={" "}>
                                Name
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"name"}
                                name={"name"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="content" className={" "}>
                                Description
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
                            <label htmlFor="Status" className={" "}>
                                Status
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"status"}
                                name={"status"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="Status" className={" "}>
                                Price
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"price"}
                                name={"price"}
                            />
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
                            <input type="submit" className={"form-control btn"}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export {ProductAdminPage};
