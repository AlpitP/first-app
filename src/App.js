import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter, { Todo } from './Counter';
// import ConditionalRendering from './ConditionalRendering';
// import Blog from './FragmentExample';
import Ref from "./ForwardRef"
import StateProps from './StateProps';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      key: "Key1"
    }
  }
  changeKey = () => {
    this.setState({ key: "key2" })
  }
  componentWillUnmount() {
    console.log("componentWillUnmount method call...")
  }
  render() {
    return (
      <>
        <Ref></Ref>
        {/* <Counter heading="Counter" key={this.state.key} /> */}
        {/* <button onClick={this.changeKey}>Change Key</button> */}
        {/* <Blog /> */}
        {/* <ConditionalRendering /> */}
        {/* <Todo /> */}
        <Counter />
        <StateProps />
      </>
    )
  }
}
class CounterValue extends React.Component {
  state = {
    heading: 'Counter'
  }

  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <p>{this.props.counterValue}</p>
      </div>
    )
  }
}
class CounterButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.eventHandler}>{this.props.buttonText}</button>
    )
  }
}
class Counter extends React.Component {
  state = {
    counter: 0
  }
  initialCounter = this.state.counter;
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }
  incrementByFive = () => {
    this.setState({ counter: this.state.counter + 5 })
  }
  resetCounter = () => {
    this.setState({ counter: this.initialCounter })
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CounterValue
          counterValue={this.state.counter}
        />
        <CounterButton
          eventHandler={this.incrementCounter}
          buttonText="Increment" />
        <CounterButton
          eventHandler={this.decrementCounter}
          buttonText="Decrement" />
        <CounterButton
          eventHandler={this.incrementByFive}
          buttonText="Increment By 5" />
        <CounterButton
          eventHandler={this.resetCounter}
          buttonText="Reset" />
        {
          (this.state.counter === 10) ? <Message /> : null
        }
      </div>
    )
  }
}
class Message extends React.Component {
  componentDidMount() {
    console.log("Component did mount.")
  }
  componentWillUnmount() {
    console.log("Component will unmount")
  }
  render() {
    return (
      <p>Counter is 10</p>
    )
  }
}
// class Demo extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Hello World!",
//       isShow: true,
//       hasError: false
//     }
//     console.log("Constructor call...");
//   }
//   componentDidMount() {

//     console.log("ComponentDidMount Method call..");
//   }
//   changeState = () => {
//     this.setState({ isShow: !this.state.isShow })
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (props.text !== state.text) {
//       return { text: props.text }
//     }
//     return null
//   }
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log("ShouldComponentUpdate method call...")
//   //   return this.state.isShow !== nextState.isShow;
//   // }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate method call...")
//     return (prevState !== this.state.isShow) ? prevState : this.state;
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//     console.log("ComponentDidUpdate method call...")
//   }
//   static getDerivedStateFromError(error) {
//     return { hasError: true }
//   }
//   render() {
//     console.log("render method call...")
//     if (this.state.hasError) {
//       return (
//         <h1>Something went wrong</h1>
//       )
//     }
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1>{this.state.text + this.state.isShow}</h1>
//         <button type='button' onClick={this.changeState}>Click</button>
//         {/* {this.state.isShow && <App name="React JS" />} */}
//       </div>
//     )
//   }
// }

export default App;

