import React, {useState} from "react";

const axios = require('axios');

function UserLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            userName: username,
            passWord: password
        }

        const options = {
            method: 'post',
            url: 'http://localhost:8081/login/',
            data: user
        }

        axios(options).then(function (response) {
            console.log(response)
        })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("INVALID username & paswword!");
                } else {
                    alert("Unknown error.");
                }
            });

    }

    return (
        <div>
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <label> User Name:
                    <input onChange={(e) => setUsername((e.target.value))} value={username} placeholder="Name"/>
                </label>
                <label> Password:
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UserLogin;