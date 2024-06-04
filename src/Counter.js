import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor.")
        this.state = {
            heading: this.props.heading,
            counter: 0,
            key: "Key1"
        }
        this.myRef = React.createRef();
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDeriveStateFromProps method call...")
        if (!props.heading) {
            return { heading: "Hello" }
        }
        return { heading: props.heading }
    }
    componentDidMount() {
        console.log("Component did mount.")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update.")
        if (nextState.Counter !== this.state.counter) {
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get snapshot before update.");
        if (prevState.counter !== this.state.counter) {
            return this.state
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate method call...")
    }
    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    componentWillUnmount() {
        console.log("Component will unmount")
    }
    render() {
        console.log("render method call");
        const abc = this.state.counter * 2;
        return (
            <div style={{ textAlign: "center" }}>
                <h1>{this.state.heading}</h1>
                {/* <h2>{abc}</h2> */}
                <h2>{this.state.counter}</h2>
                <button onClick={this.incrementCounter}>Increment</button>
                <Demo />
            </div>
        )
    }
}
class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    addData = () => {
        const randomNumber = Math.floor(Math.random() * 10);
        this.state.data.push(randomNumber);
        this.setState({ data: this.state.data })
    }
    render() {
        const dataLength = this.state.data.length;
        return (
            <>
                <p>{dataLength}</p>
                <button onClick={this.addData}>Add</button>
            </>
        )
    }
}
class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            heading: "Task",
            tasks: []
        }
        this.myRef = React.createRef();
        console.log(this.myRef);
        this.liRef = React.createRef();
    }
    addTask = () => {
        let task = this.myRef.current.value;
        this.state.tasks.push(task);
        this.myRef.current.value = "";
        this.setState({ tasks: this.state.tasks })
    }
    render() {
        return (
            <div style={{ textAlign: "center", marginTop: 20 }}>
                <input type="text"
                    ref={this.myRef}
                    placeholder='Enter Task' />
                {console.log(this.myRef)}
                <button onClick={this.addTask}>Add</button>
                <ul style={{ listStyle: "none" }} ref={this.liRef}>
                    {this.state.tasks.map((element, index) => <li key={index} onClick={this.taskDone}>{element}</li>)}
                </ul>
            </div>
        )
    }
}
export default Counter;
export { Todo };
// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.myRef = React.createRef();
//         this.myRef.current = 0;
//     }
//     increment = () => {
//         console.log(this.myRef.current);
//         this.myRef.current = this.myRef.current + 1;
//     }
//     render() {
//         return (
//             <>
//                 <h1>Counter</h1>
//                 <p>{this.myRef.current}</p>
//                 <input
//                     type='button'
//                     onClick={this.increment}
//                     value={"Click"}
//                 />
//             </>
//         )
//     }
// }
// export default Counter;
