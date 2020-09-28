import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        console.log("mount")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("unmount")
        clearInterval(this.timerID);

    }

    tick() {
        console.log("tick")
        this.setState({
            date: new Date()
        });
        // this.state.date = new Date();
        // console.log(this.state.date.toLocaleDateString());
    }

    render()
    {
        console.log("render")
        return(
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(<Clock />
        , document.getElementById('root'));
