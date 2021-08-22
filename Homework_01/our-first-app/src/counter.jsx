import React, { Component } from 'react';
import Heading from './ReusableComponents/Heading';
import './Counter.css'

// export class Counter extends Component
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            number: 0,
            isClicked: false
        }
    }

    incrementNumber = () => {
        // we can pass a callback function on seState, with will be executed right after the state is going to be updated
        this.setState({
            number: this.state.number === 10? this.state.number : this.state.number + 1
        }, ()=> console.log(`State was updated successfully`))
    }

    decrementNumber = () => {
        this.setState(prevState => ({
            number: prevState.number === 0 ? prevState.number : prevState.number - 1,
            isClicked: !prevState.isClicked
        }))
    }

    render() {
        // const number = 0;
        console.log(this.state);
        return (
            <>
            <Heading title="Counter TITLE" />
            <div className='wrapper'>
                <div className='buttons'>
                    <button className='increment-btn' onClick={this.incrementNumber}>Increment</button>
                    <button className='decrement-btn' onClick={this.decrementNumber}>Decrement</button>
                </div>
                <div className='result'>Result: { this.state.number } </div>
            </div>
            </>
        )
    }
}
export default Counter;