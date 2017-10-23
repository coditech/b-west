import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";
import {Quill} from "../components/Quill";


class AboutUsAdminEditPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        const id = props.match.params.id;
        const aboutUs = props.aboutUs.find(item => {
            return item.id === id
        });
        let state = {
            ...props,
            aboutUs,
            id,
            title: aboutUs.title,
            content: aboutUs.content,
            imageAlt: aboutUs.imageAlt,
            imageSrc: ''
        };
        if (aboutUs.imageSrc) {
            state.imageSrc = aboutUs.imageSrc;
        }

        this.state = state;

        this.refreshData = props.refreshData;
        this.onChange = this.onChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);
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
        formData.append("imageAlt", this.state.imageAlt);
        superagent
            .put(websiteUrl + "api/aboutpage/" + this.state.id)
            .send(formData)
            .end((err, res) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    alert('Record Updated');
                    this.refreshData();
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
                                defaultValue={this.state.aboutUs.title}
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
                            <Quill content={this.state.aboutUs.content} onChange={this.handleQuillChange}/>

                        </div>
                    </div>
                    {
                        this.state.imageSrc ? <div className="row">
                            <div className="col-xs-4">
                                <img className={'img-responsive'} src={this.state.imageSrc}
                                     alt={this.state.imageAlt || ''}/>
                            </div>
                        </div> : null
                    }

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
                                defaultValue={this.state.imageAlt}
                                onChange={(event) => this.handleInputChange(event)}
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

export {AboutUsAdminEditPage};