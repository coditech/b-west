import React from 'react';
import '../styles/Login.css';
import BWestImage from '../images/logo.png';

const logoStyle = {
    maxWidth: '100px'

};
const loginAction = (event, login, history) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password, history);
};
const Login = ({login, history}) => {


    return (

        <div className="login-clean">
            <form method="post" onSubmit={(event) => {
                loginAction(event, login, history)
            }}>
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration"><img src={BWestImage} alt={'B-West Logo'} style={logoStyle}/></div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" id={'email'} placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" id={'password'} placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Log In</button>
                </div>
                <a className="forgot">Forgot your email or password?</a></form>
        </div>
    )
}
export {Login}