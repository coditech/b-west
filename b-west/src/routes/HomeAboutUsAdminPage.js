import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import {websiteUrl} from "../helpers";

class HomeAboutUsAdminPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "Old Title",
            subTitle: "Old subTitle ",
            alt_image_one: "alt_image_one",
            alt_image_two: "alt_image_two",
            content: "Old Content"
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
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        let formData = new FormData();
        const filesOne = this.filesInputOne.files;
        const filesTwo = this.filesInputTwo.files;
        formData.append("imageOne", filesOne[0]);
        formData.append("imageTwo", filesTwo[1]);

        formData.append("title", this.state.title);
        formData.append("subTitle", this.state.subTitle);
        formData.append("content", this.state.content);
        formData.append("alt_image_one", this.state.alt_image_one);
        formData.append("alt_image_two", this.state.alt_image_two);

        superagent
            .post(websiteUrl + "api/about-us-home")
            .send(formData)
            .then((res) => res.json())
            .then(x => {
                console.log("x =>", x);
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (<div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Home About Admin Page</h2>
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
                                onChange={this.handleInputChange}
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
                                defaultValue={this.state.subTitle}
                                onChange={this.handleInputChange}
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
                            <label htmlFor="image1" className={" "}>
                                Image 1
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                ref={input => {
                                    this.filesInputOne = input;
                                }}
                                id={"image1"}
                                name={"image1"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="title" className={" "}>
                                Image 1 ALT
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"alt_image_one"}
                                name={"alt_image_one"}
                                defaultValue={this.state.alt_image_one}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image1" className={" "}>
                                Image 2
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                ref={input => {
                                    this.filesInputTwo = input;
                                }}
                                id={"image2"}
                                name={"image2"}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="title" className={" "}>
                                Image 2 ALT
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"alt_image_two"}
                                name={"alt_image_two"}
                                defaultValue={this.state.alt_image_two}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="row form-group text-center">
                        <div className="col-sm-3 col-sm-push-3">
                            <input type="submit" className={" btn btn-secondary"}/>
                        </div>
                    </div>
                </form>


            </div>
        );
    }
}

export {
    HomeAboutUsAdminPage
};
