import React from "react";

class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true,
            counter: 0
        }
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    toggle = () => {
        this.setState({ isToggle: !this.state.isToggle })
    }
    render() {
        return (
            <>
                {(this.state.isToggle) ? <Time /> : null}
                <button onClick={this.toggle}>Click</button>
                <Counter />
                <button onClick={this.increment}>Increment</button>
                <Counter Counter={this.state.counter} />
                <DoubleCounter doubleCounter={this.state.counter * 2} />
                <CubeCounter cubeCounter={this.state.counter ** 3} />
            </>
        )
    }
}

class Counter extends React.Component {
    render() {
        return (
            <h1>Counter : {this.props.Counter}</h1>
        )
    }
}
class DoubleCounter extends React.Component {
    render() {
        return (
            <h1>Double of Counter : {this.props.doubleCounter}</h1>
        )
    }
}
class CubeCounter extends React.Component {
    render() {
        return (
            <h1>Cube of Counter :{this.props.cubeCounter}</h1>
        )
    }
}


let getTime;
class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount() {
        getTime = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
            console.log(this.state.time)
        }, 1000)
    }
    componentWillUnmount() {
        console.log("Component will unMound")
        clearInterval(getTime)
    }
    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}

// class CounterValue extends React.Component {
//     state = {
//         heading: 'Counter'
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.heading}</h1>
//                 <p>{this.props.counterValue}</p>
//             </div>
//         )
//     }
// }
// class CounterButton extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.eventHandler}>{this.props.buttonText}</button>
//         )
//     }
// }
// let a = 0;
// class Counter extends React.Component {
//     state = {
//         counter: 0
//     }
//     initialCounter = this.state.counter;
//     incrementCounter = () => {
//         this.setState({ counter: this.state.counter + 1 })
//     }
//     decrementCounter = () => {
//         this.setState({ counter: this.state.counter - 1 })
//     }
//     incrementByFive = () => {
//         // this.setState({ counter: this.state.counter + 5 })
//         a += 5;
//         console.log(a);
//     }
//     resetCounter = () => {
//         this.setState({ counter: this.initialCounter })
//     }
//     componentDidMount() {
//         console.log("Component Did Mount")
//     }
//     render() {
//         console.log("Component is render")
//         console.log(a)
//         return (
//             <div style={{ textAlign: "center" }}>
//                 <CounterValue
//                     counterValue={this.state.counter}
//                 />
//                 <CounterButton
//                     eventHandler={this.incrementCounter}
//                     buttonText="Increment" />
//                 <CounterButton
//                     eventHandler={this.decrementCounter}
//                     buttonText="Decrement" />
//                 <CounterButton
//                     eventHandler={this.incrementByFive}
//                     buttonText="Increment By 5" />
//                 <CounterButton
//                     eventHandler={this.resetCounter}
//                     buttonText="Reset" />
//                 {
//                     (a === 10) ? <Message /> : null
//                 }
//             </div>
//         )
//     }
// }
// class Message extends React.Component {
//     componentDidMount() {
//         console.log("Component did mount.")
//     }
//     componentWillUnmount() {
//         console.log("Component will unmount")
//     }
//     render() {
//         return (
//             <p>Counter is 10</p>
//         )
//     }
// }

export default StateProps;