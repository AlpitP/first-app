import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExampleOfState, Post, Counter } from './App';
import reportWebVitals from './reportWebVitals';
import ConditionalRendering from './ConditionalRendering';
import Blog from './FragmentExample';


class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false
    }
  }

  // static getDerivedStateFromError(error) {
  //   return { error: true }
  // }
  componentDidCatch(error, info) {
    this.setState({ error: true })
  }
  render() {
    return (
      <div>
        {(this.state.error) ? <h1>Something Went Wrong</h1> : <Demo />}
      </div>
    )
  }
}
class Demo extends React.Component {
  // state = { heading: "Hello World" }
  render() {
    return (
      <h1>{this.state.heading}</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
