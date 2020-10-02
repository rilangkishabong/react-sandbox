import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserRegistration from "./userregistration";
import UserLogin from "./userlogin";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function App(){
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/register">Register Here!</Link>
                    </li>
                    <li>
                        <Link to="/login">Login Here!</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/register">
                        <UserRegistration />
                    </Route>
                    <Route path="/login">
                        <UserLogin />
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}

ReactDOM.render(<App/>
    ,
    document.getElementById('root')
);
