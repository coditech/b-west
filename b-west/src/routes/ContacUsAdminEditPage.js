import React from "react";
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {Quill} from "../components/Quill";
import {NavLink} from "react-router-dom";

class ContactUsAdminEditPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const {contactUs} = props;
        this.state = {
            ...props,
            content: contactUs.content,
            headerTitle: contactUs.headerTitle,
            title: contactUs.title,
            showBackgroundImage: contactUs.showBackgroundImage
        };
        this.onChange = this.onChange.bind(this);
        this.refreshData = props.refreshData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);

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

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleQuillChange(value) {
        this.setState({content: value});
    }


    onSubmit(evt) {
        evt.preventDefault();
        alert(0);
        let formData = new FormData();
        const files = this.filesInput.files;
        for (let key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append("bannerBackgroundImage", files[key]);
            }
        }

        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", this.state.title);
        formData.append("content", this.state.content);
        formData.append("headerTitle", this.state.headerTitle);
        formData.append("showBackgroundImage", this.state.showBackgroundImage);


        superagent
            .put(websiteUrl + "api/contact-us")
            .set('x-access-token', this.state.auth.token)
            .send(formData)
            .end((err, response) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    console.log('response =<', response);
                    alert('Record Updated');
                    this.refreshData();
                    this.state.history.push('/admin/contact-us')


                }
            })
    }

    render() {
        const {title, bannerBackgroundImage, content, headerTitle, showBackgroundImage} = this.state;

        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Contact Us Admin Page</h2>
                </div>
                <NavLink to={'/admin/contact-us'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-6 col-sm-push-3">
                            <input
                                type={"checkbox"}
                                name={"showBackgroundImage"}
                                id={"showBackgroundImage"}
                                defaultChecked={showBackgroundImage.toString() === 'true'}
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
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="title" className={" "}>
                                Header Title
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"headerTitle"}
                                name={"headerTitle"}
                                defaultValue={headerTitle}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="contactinformation" className={" "}>
                                Contact Information
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <Quill content={content} onChange={this.handleQuillChange}/>
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

export {ContactUsAdminEditPage};
