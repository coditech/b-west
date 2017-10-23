import React from "react";
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {Quill} from "../components/Quill";

class ContactUsAdminEditPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const {contactUs } = props;
        this.state = {
            ...props,
            content: contactUs.content,
            headerTitle: contactUs.headerTitle,
            title: contactUs.title
        }
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

        const form = evt.target;

        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", this.state.title);
        formData.append("content", this.state.content);
        formData.append("headerTitle", this.state.headerTitle);


        superagent
            .put(websiteUrl + "api/contact-us")
            .send(formData)
            .end((err, response) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    console.log('response =<', response)
                    alert('Record Updated');
                    this.refreshData();
                    this.state.history.push('/admin/contact-us')


                }
            })
    }

    render() {
        return (
            <div>
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
                                defaultValue={this.state.headerTitle}
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
                            <Quill content={this.state.content} onChange={this.handleQuillChange}/>
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
