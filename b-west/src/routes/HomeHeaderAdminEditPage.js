import React from "react";
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {Quill} from "../components/Quill";

class HomeHeaderAdminEditPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        const homeHeader = props.homeHeader;
        const {title, content, subTitle, imageSrc, imageAlt, actionButtonShow, actionButtonText, actionButtonUrl} = homeHeader;
        this.state = {
            ...props,
            title: title || '',
            content: content || '',
            subTitle: subTitle || '',
            imageSrc: imageSrc || '',
            imageAlt: imageAlt || '',
            actionButtonShow: actionButtonShow || false,
            actionButtonText: actionButtonText || '',
            actionButtonUrl: actionButtonUrl || ''

        };
        this.onChange = this.onChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        });
    }

    onChange(evt) {
        const newContent = evt.editor.getData();
        this.setState({
            content: newContent
        });
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


    onSubmit(evt) {
        evt.preventDefault();
        let formData = new FormData();
        const files = this.filesInput.files;
        for (let key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append("imageSrc", files[key]);
            }
        }

        // HEADER IMAGE MISSING IN THE FORM DATA
        formData.append("title", this.state.title);
        formData.append("subTitle", this.state.subTitle);
        formData.append("content", this.state.content);
        formData.append("imageAlt", this.state.imageAlt);
        formData.append("actionButtonShow", this.state.actionButtonShow);
        formData.append("actionButtonUrl", this.state.actionButtonUrl);
        formData.append("actionButtonText", this.state.actionButtonText);

        superagent
            .put(websiteUrl + "api/home-header")
            .send(formData)
            .then(response => {
                console.log('success =>', response.body);
                const {success} = response.body;
                if (success) {
                    console.log(this);
                    alert('Change done');
                    setTimeout(() => {

                        this.state.history.push('/admin/home-header')
                    }, 500);
                } else {
                    alert('Please Try Again');
                }
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
                                onChange={(event) => this.handleInputChange(event)}
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
                            <Quill content={this.state.content} onChange={this.handleQuillChange}/>

                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6 col-sm-push-3">
                            <input
                                type={"checkbox"}
                                name={"actionButtonShow"}
                                id={"actionButtonShow"}
                                defaultChecked={this.state.actionButtonShow}
                            /><label htmlFor={'actionButtonShow'}>Select if action button is available on Home
                            Header</label>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="actionButtonUrl" className={" "}>
                                Action Url
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"actionButtonUrl"}
                                name={"actionButtonUrl"}
                                defaultValue={this.state.actionButtonUrl}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="actionButtonText" className={" "}>
                                Action Text
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"actionButtonText"}
                                name={"actionButtonText"}
                                defaultValue={this.state.actionButtonText}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-4">
                            <img className={'img-responsive'} src={this.state.imageSrc}
                                 alt={this.state.imageAlt}/>
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
                        <div className="col-sm-3">
                            <label htmlFor="actionButtonText" className={" "}>
                                Image Alt
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"imageAlt"}
                                name={"imageAlt"}
                                defaultValue={this.state.imageAlt}
                                onChange={(event) => this.handleInputChange(event)}
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

export {HomeHeaderAdminEditPage};
