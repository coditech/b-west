import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import {websiteUrl} from "../helpers";

class HomeHeaderAdminPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "Old Title",
            content: "Old content",
            actionUrl: "",
            actionText: ""
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
                console.log("key ==> ", key);
                formData.append("file", files[key]);
            }
        }

        const form = evt.target;

        // HEADER IMAGE MISSING IN THE FORM DATA
        formData.append("title", form.title.value);
        formData.append("subTitle", form.subTitle.value);
        formData.append("content", this.state.content);
        formData.append("actionButton", form.actionButton.value);
        formData.append("actionUrl", form.actionUrl.value);
        formData.append("actionText", form.actionText.value);

        superagent
            .post(websiteUrl + "api/homeheader")
            .send(formData)
            .then((res) => res.json())
            .then(x => {
                console.log("x =>", x);
            })
            .catch(err => {
                console.error(err)
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Home Header Admin Page</h2>
                </div>

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
                                defaultValue={this.state.title}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="subTitle" className={" "}>
                                Sub Title
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"subTitle"}
                                name={"subTitle"}
                                defaultValue={this.state.title}
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
                        <div className="col-sm-6 col-sm-push-3">
                            <input
                                type={"checkbox"}
                                name={"actionButton"}
                                id={"actionButton"}
                                value={"false"}
                            />Select if action button is available on Home Header
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="actionUrl" className={" "}>
                                Action Url
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"actionUrl"}
                                name={"actionUrl"}
                                defaultValue={this.state.actionUrl}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="actionText" className={" "}>
                                Action Text
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"actionText"}
                                name={"actionText"}
                                defaultValue={this.state.actionText}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Header image
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
                                name={"file"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3 col-sm-push-3">
                            <input
                                type="submit"
                                className={"form-control btn"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export {HomeHeaderAdminPage};
