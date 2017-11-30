import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import {websiteUrl} from "../helpers";

class SubscriberBannerAdminEditPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ...props,
            inputs: {
                ...props.subscriberBanner
            },
            errors: {
                mailcimpUrl: '',
                display: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
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

    onSubmit(evt) {
        evt.preventDefault();

        superagent
            .put(websiteUrl + "api/subscriberBanner")
            .set('x-access-token', this.state.auth.token)
            .send({...this.state.inputs})
            .end((err, response) => {
                if (err) {
                    //there was an error, handle it here
                    console.log('err ->', err);
                    alert(JSON.stringify(err));
                } else if (response.ok) {
                    //this was successful, handle it here
                    console.log(response.body);
                    alert('Record Updated');
                    this.state.refreshData();
                    this.state.history.push('/admin/subscriberBanner')

                }
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="col-sm-6 col-sm-push-3">Subscriber Banner Admin Page</h2>
                </div>
                <form onSubmit={event => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="title1" className={" "}>
                                Display
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="checkbox"
                                id={"display"}
                                name={"display"}
                                defaultChecked={this.state.inputs.display}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-3">
                            <label htmlFor="slogan1" className={" "}>
                                Mail Chimp Url
                            </label>
                        </div>
                        <div className="col-sm-6">
                            <input
                                className={"form-control"}
                                type="text"
                                id={"mailcimpUrl"}
                                name={"mailcimpUrl"}
                                defaultValue={this.state.inputs.mailcimpUrl}
                                onChange={this.handleInputChange}

                            />
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

export {SubscriberBannerAdminEditPage};
