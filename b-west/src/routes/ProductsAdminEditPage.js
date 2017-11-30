import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";
import {Quill} from "../components/Quill";
import Select from "react-select";
import 'react-select/dist/react-select.css';

class ProductsAdminEditPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        const id = props.match.params.id;
        const product = props.products.find(item => {
            return item.id === id
        });
        const option_products = props.products.filter(item => {
            return item.id !== id
        }).map(item => {
            return {label: item.name, value: item.id}
        });
        const {name, description, slug, price, status, imageAlt, related_products = []} = product;
        const selected_related_products = related_products.map(id => {
            const product = props.products.find(item => {
                return id === item.id
            });
            return {label: product.name, value: id}
        });
        alert(JSON.stringify(related_products));
        let state = {
            ...props,
            product,
            inputs: {
                ...product
            },
            id,
            name,
            description,
            price,
            status,
            imageAlt,
            slug,
            related_products,
            selectOptions: {
                options: option_products,
                selected_related_products,
            }

        };
        if (product.imageSrc) {
            state.imageSrc = product.imageSrc;
        }

        this.state = state;

        this.refreshData = props.refreshData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
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

    handleSelectChange(value) {
        console.log('You\'ve selected:', value);
        this.setState({
            ...this.state,
            selectOptions: {
                ...this.state.selectOptions,
                selected_related_products: value,
            }

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
        const related_products = this.state.selectOptions.selected_related_products.map(({value}) => value);
        // IMAGES MISSING IN THE FORM DATA
        formData.append("status", this.state.inputs.status);
        formData.append("name", this.state.inputs.name);
        formData.append("price", this.state.inputs.price);
        formData.append("slug", this.state.inputs.slug);
        formData.append("description", this.state.inputs.description);
        formData.append("imageAlt", this.state.inputs.imageAlt);
        formData.append('related_products', JSON.stringify(related_products));
        superagent
            .put(websiteUrl + "api/products/" + this.state.inputs.id)
            .set('x-access-token', this.state.auth.token)
            .send(formData)
            .end((err, res) => {
                if (err) {
                    alert('something went wrong please try again');
                }
                else {
                    alert('Record Updated');
                    this.refreshData();
                    this.state.history.push('/admin/products')


                }
            })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/products'}>
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
                                defaultValue={this.state.inputs.name}
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
                                defaultValue={this.state.inputs.slug}
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
                                defaultValue={this.state.inputs.price}
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
                                defaultValue={this.state.inputs.status}
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
                            <Quill content={this.state.inputs.description} onChange={this.handleQuillChange}/>

                        </div>
                    </div>
                    {
                        this.state.imageSrc ? <div className="row">
                            <div className="col-xs-4">
                                <img className={'img-responsive'} src={this.state.inputs.imageSrc}
                                     alt={this.state.inputs.imageAlt || ''}/>
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
                            <label htmlFor="alt" className={" "}>
                                Image Alt
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"imageAlt"}
                                name={"imageAlt"}
                                defaultValue={this.state.inputs.imageAlt}
                                onChange={(event) => this.handleInputChange(event)}
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
                            <Select
                                closeOnSelect={false}
                                disabled={false}
                                multi
                                onChange={this.handleSelectChange}
                                options={this.state.selectOptions.options}
                                placeholder="Select Related Products"
                                removeSelected={this.state.removeSelected}
                                value={this.state.selectOptions.selected_related_products}
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

export {ProductsAdminEditPage};