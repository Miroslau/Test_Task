import React, {Component} from 'react';
import './Login.scss';
import {Route} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           UserName: 'user',
           Password: 'user',
           errors: '',
           isLoggedIn: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let errors = '';
        e.preventDefault();
        const login = e.target.elements[0].value;
        const password = e.target.elements[1].value;
        if(login === this.state.UserName && password === this.state.Password) {
           this.props.history.push('/pofile');
           this.setState({isLoggedIn: true})
        } else {
            this.props.history.push('/login');
            errors = 'Sorry but you entered an incorrect username or password :(';
            this.setState({errors: errors})
        }
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>UserName: </label><br/>
                        <input value="user" type="text" name="UserName"/>
                    </p>
                    <p>
                        <label>Password: </label><br/>
                        <input value="user" type="password" name="Password"/>
                    </p>
                    <button type="Submit">Sig in</button><br/>
                    <span className="error">{this.state.errors}</span>
                </form>
            </div>
        );
    }
}

export default Login;