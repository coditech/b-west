import React from 'react';
import {Login} from "../components/Login";

class LoginPage extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            history: props.history
        }
    }


    render() {
        const {history} = this.state;
        const passedProps = {
            history
        }
        return (
            <Login {...passedProps} />
        )
    }
}
export {LoginPage}