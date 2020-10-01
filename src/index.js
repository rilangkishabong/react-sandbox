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
            url: 'https://localhost:3000/register/',
            data: {
                userName: this.username,
                passWord: this.password
            }
        }

        axios(options).then(function (response) {
            console.log(response)
        });

    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> User Name:
                        <input onChange={this.handleChange} value={this.state.username} name="userName" placeholder="Name"/>
                    </label>
                    <label> Password:
                        <input onChange={this.handleChange} value={this.state.password} name="passWord"
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
