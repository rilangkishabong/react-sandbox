import React,{useState} from "react";

const axios = require('axios');

function UserRegistration() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            userName: username,
            passWord: password
        }

        const options = {
            method: 'post',
            url: 'http://localhost:8081/register/',
            data: user
        }

        axios(options).then(function (response) {
            console.log(response)
        });

    }

    return (
        <div>
            <h1>Registration Page!</h1>
            <form onSubmit={handleSubmit}>
                <label> User Name:
                    <input onChange={(e) => setUsername((e.target.value))} value={username} placeholder="Name" type="text"/>
                </label>
                <label> Password:
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" type={"password"}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UserRegistration;