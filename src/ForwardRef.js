import React from 'react';

class Ref extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();

    }
    render() {
        return (
            <>
                <Counter heading="Counter" ref={this.myRef} />
                <button onClick={() => console.log(this.myRef)}>Ref</button>
            </>
        )
    }
}
const Counter = React.forwardRef((props, ref) => {
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0,
                isToggle: true
            }
        }
        render() {
            return (
                <>
                    {(this.state.isToggle) ? <h1>{props.heading}</h1> : null}
                    <p ref={ref} >{this.state.counter}</p>
                    <button onClick={() => this.setState({ counter: this.state.counter + 1, isToggle: !this.state.isToggle })}>Increment</button>
                </>
            )
        }
    }
    return <Counter />
})
export default Ref;