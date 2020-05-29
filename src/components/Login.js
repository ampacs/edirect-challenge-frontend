import React from 'react';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            accessToken: '',
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    handleLogin() {
        const instance = this;
        fetch("http://localhost:5000/api/user/login", {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: instance.state.username,
                    password: instance.state.password
                })
            })
            .then(res => res.json())
            .then(result => {
                instance.setState({
                    accessToken: result.access_token
                })
            })
            .catch(error => {
                instance.setState({
                    accessToken: '',
                    error
                })
            });
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        console.log("HEY");
        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div className="login">
                    <div className="form">
                        <form className="login-form">
                            <input type="text" value={this.state.username} onChange={this.onChangeUsername} placeholder="username"/>
                            <input type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="password"/>
                            <button onClick={this.handleLogin}>login</button>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default Login;