import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function UserGreeting(){
    return <h1>Welcome Back!</h1>
}

function GuestGreeting(){
    return <h1>Please sign-up!</h1>
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);