import React, { Fragment } from 'react';

const numbers = [1, 2, 3, 4, 5]

class Item extends React.Component {
    render() {
        if (this.props.isChecked) {
            return (
                <li><del>{this.props.name}</del></li>
            )
        } else {
            return (
                <li>{this.props.name}</li>
            )
        }
    }
}
class ConditionalRendering extends React.Component {
    render() {
        const buttons = (
            <Fragment>
                <button onClick={this.getElement}>Previous</button>
                <button>Next</button>
            </Fragment>
        )
        return (
            <Fragment>
                <h1>List of Item</h1>
                <ul>
                    <Item
                        name="This is first Item"
                        isChecked={true}
                    />
                    <Item
                        name="This is second Item"
                        isChecked={false}
                    />
                    <Item
                        name="This is third Item"
                        isChecked={true}
                    />
                </ul>
                {buttons}
                <Reference />
                <List />
            </Fragment>
        )
    }
}
class Reference extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }

    render() {
        return (
            <CustomTextField ref={this.myRef}
                placeholder="Enter Your Name" />
        )
    }
}
class CustomTextField extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "React",
            heading: ""
        }
        this.myRef = React.createRef();
    }
    addHeading = () => {
        this.setState({ heading: this.myRef.current.value })
        this.myRef.current.value = ""
    }
    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <input
                    type='text'
                    ref={this.myRef}
                    placeholder={this.props.placeholder}
                />
                <input type='button'
                    value={"Add Heading"}
                    onClick={this.addHeading}
                />
                <h1>Heading is : {this.state.heading}</h1>
            </>
        )
    }
}
class List extends React.Component {
    render() {
        return (
            <>
                <h1>Heading</h1>
                <ul>
                    {numbers.map(element => <li key={element.toString()} > {element}</li>)}
                </ul>
            </>
        )
    }
}

export default ConditionalRendering;