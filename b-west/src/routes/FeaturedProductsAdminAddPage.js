import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";
import {Quill} from "../components/Quill";


class FeaturedProductsAdminAddPage extends React.Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            ...props,
            name:'',
            slug: '',
            description: '',
            price: '',
            status: '',
            imageAlt: ''

        };

        this.refreshData = props.refreshData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);
    }


    handleQuillChange(value) {
        this.setState({description: value});
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
                formData.append("image", files[key]);
            }
        }
        // IMAGES MISSING IN THE FORM DATA
        formData.append("status", this.state.status);
        formData.append("name", this.state.name);
        formData.append("price", this.state.price);
        formData.append("slug", this.state.slug);
        formData.append("description", this.state.description);
        formData.append("imageAlt", this.state.imageAlt);
        superagent
            .post(websiteUrl + "api/featured-products/")
            .send(formData)
            .end((err, res) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    alert('Record Updated');
                    this.refreshData();
                    this.state.history.push('/admin/featured-products')


                }
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/featured-products'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="name" className={" "}>
                                Product Name
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"name"}
                                name={"name"}
                                defaultValue={this.state.featuredProducts.name}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="slug" className={" "}>
                                Product Slug
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"slug"}
                                name={"slug"}
                                defaultValue={this.state.featuredProducts.slug}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="price" className={" "}>
                                Product Price
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"price"}
                                name={"price"}
                                defaultValue={this.state.featuredProducts.price}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="status" className={" "}>
                                Product Status
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"status"}
                                name={"status"}
                                defaultValue={this.state.featuredProducts.status}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="description" className={" "}>
                                Product Description
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <Quill content={this.state.featuredProducts.description} onChange={this.handleQuillChange}/>

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
                                Product Image
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
                            <label htmlFor="imageAlt" className={" "}>
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
                            <button type={'submit'} className={'btn btn-block'}>Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export {FeaturedProductsAdminAddPage};