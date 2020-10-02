import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const axios = require('axios');

class UserRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        const options = {
            method: 'post',
            url: 'http://localhost:8081/register/',
            data: {
                userName: user.username,
                passWord: user.password
            }
        }

        axios(options).then(function (response) {
            console.log(response)
        });

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> User Name:
                        <input onChange={this.handleChange} value={this.state.username} name="username"
                               placeholder="Name"/>
                    </label>
                    <label> Password:
                        <input onChange={this.handleChange} value={this.state.password} name="password"
                               placeholder="password"/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<UserRegistration/>
    ,
    document.getElementById('root')
);
