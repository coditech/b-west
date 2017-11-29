import React from 'react';
import superagent from "superagent";
import {websiteUrl} from "../helpers";
import {NavLink} from "react-router-dom";

class UsersAdminAddPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            ...props,

            inputs: {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: {
                username: '',
                email: '',
                password: '',
            }
        };

        this.refreshData = props.refreshData;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const newState = {
            ...this.state,
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        };
        this.setState(newState);
    }

    validatePassword() {
        const {password, confirmPassword} = this.state.inputs;
        if (password !== confirmPassword || password.length < 6) {
            const oldState = this.state;
            const newState = {
                ...oldState,
                errors: {
                    ...oldState.errors,
                    password: 'password and confirm password need to be the same and more then 6 character'
                }
            };
            this.setState(newState);

            return false;
        }
        return true;
    }

    onSubmit(evt) {
        evt.preventDefault();
        // this.state.getUsersData();
        if (!this.validatePassword()) {
            alert('Check Errors and re-submit');
        } else {
            superagent
                .post(websiteUrl + "api/users")
                .set('x-access-token', this.state.auth.token)
                .send({
                    ...this.state.inputs
                })
                .end((err, res) => {
                    if (err) {
                        alert('something went wrong please try again');
                    }
                    else {
                        alert('Record Updated');
                        this.refreshData();
                        this.state.history.push('/admin/users')


                    }
                })

        }

    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>

                </div>
                <NavLink to={'/admin/users'}>
                    <button className={'btn'}>Back</button>
                </NavLink>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="name" className={" "}>
                                username
                            </label>
                            <span style={{color: 'red', display: 'block'}}>{this.state.errors.username}</span>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"username"}
                                name={"username"}
                                defaultValue={this.state.inputs.username}
                                required={true}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="slug" className={" "}>
                                Email
                            </label>
                            <span style={{color: 'red', display: 'block'}}>{this.state.errors.email}</span>

                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="email"
                                id={"email"}
                                name={"email"}
                                defaultValue={this.state.inputs.email}
                                required={true}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="price" className={" "}>
                                Password
                            </label>
                            <span style={{color: 'red', display: 'block'}}>{this.state.errors.password}</span>

                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"password"}
                                name={"password"}
                                defaultValue={this.state.inputs.password}
                                onChange={(event) => this.handleInputChange(event)}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="status" className={" "}>
                                Confirm Password
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"confirmPassword"}
                                name={"confirmPassword"}
                                defaultValue={this.state.inputs.confirmPassword}
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

export {UsersAdminAddPage};