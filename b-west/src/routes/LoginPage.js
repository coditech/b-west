import React from 'react';
import {Login} from "../components/Login";

class LoginPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            ...props,

        }
    }


    render() {
        const passedProps = {
            ...this.state
        };
        return (
            <Login {...passedProps} />
        )
    }
}
export {LoginPage}