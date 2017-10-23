import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";
import {Quill} from "../components/Quill";

class AboutUsHomeSectionAdminEditPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        const aboutUsHomeSection = props.aboutUsHomeSection;
        this.state = {
            ...props,
            ...aboutUsHomeSection,
            altOne: aboutUsHomeSection.imageOne.alt,
            altTwo: aboutUsHomeSection.imageTwo.alt,

        };
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
        alert(9);
        console.log('this.filesInputTwo', this.filesInputTwo.files);
        console.log(this.filesInputOne.files);
        const imageOne = this.filesInputOne.files;
        const imageTwo = this.filesInputTwo.files;
        let formData = new FormData();

        for (let key in imageOne) {
            // check if this is a file:
            if (imageOne.hasOwnProperty(key) && imageOne[key] instanceof File) {
                formData.append("imageOne", imageOne[key]);
            }
        }
        for (let key in imageTwo) {
            // check if this is a file:
            if (imageTwo.hasOwnProperty(key) && imageTwo[key] instanceof File) {
                formData.append("imageTwo", imageTwo[key]);
            }
        }
        // IMAGES MISSING IN THE FORM DATA
        formData.append("title", this.state.title);
        formData.append("subTitle", this.state.subTitle);
        formData.append("content", this.state.content);
        formData.append("altOne", this.state.altOne);
        formData.append("altTwo", this.state.altTwo);

        superagent
            .put(websiteUrl + "api/aboutus-home")
            .send(formData)
            .end((err, res) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    alert('Record Updated');
                    this.refreshData();
                    this.state.history.push('/admin/aboutus-home')


                }
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/aboutus-home'}>
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
                                defaultValue={this.state.title}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="title" className={" "}>
                                Sub Title
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"title"}
                                name={"title"}
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
                    <div className="row">
                        <div className="col-xs-4">
                            <img className={'img-responsive'} src={this.state.imageOne.src}
                                 alt={this.state.altOne}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Image One
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                accept={"image/*"}
                                ref={input => {
                                    this.filesInputOne = input;
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
                                id={"altOne"}
                                name={"altOne"}
                                defaultValue={this.state.altOne}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4">
                            <img className={'img-responsive'} src={this.state.imageTwo.src}
                                 alt={this.state.altTwo}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="image" className={" "}>
                                Image 2
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="file"
                                accept={"image/*"}
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
                            <label htmlFor="alt" className={" "}>
                                Image Two Alt
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"altTwo"}
                                name={"altTwo"}
                                defaultValue={this.state.altTwo}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3 col-sm-push-3">
                            <button type={'submit'} className={'btn btn-block'} >Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export {AboutUsHomeSectionAdminEditPage};