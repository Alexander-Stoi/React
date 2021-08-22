import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operator: "",
    };
  }

  changeFirstNumber = (event) => {
    this.setState({
      firstNumber: parseInt(event.target.value),
    });
  };

  changeSecondNumber = (e) => {
    this.setState({
      secondNumber: parseInt(e.target.value),
    });
  };

  handleChange = (event) => {
    this.setState({
      operator: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.performOperation(this.state.operator);
    event.preventDefault();
  };

  performOperation = (operator) => {
    if (operator === "+") {
      this.setState({
        result: this.state.firstNumber + this.state.secondNumber,
        firstNumber: "",
        secondNumber: "",
      });
    } else {
      this.setState({
        result: this.state.firstNumber - this.state.secondNumber,
        firstNumber: "",
        secondNumber: "",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <input
            value={this.state.firstNumber}
            onChange={this.changeFirstNumber}
            type="number"
          />
          <input
            value={this.state.secondNumber}
            onChange={this.changeSecondNumber}
            type="number"
          />
          {/* <button onClick={() => this.performOperation("+")}>+</button>
          <button onClick={() => this.performOperation("-")}>-</button> */}

          <form onSubmit={this.handleSubmit}>
            <label>Chose Operator</label>
            <select onChange={this.handleChange} value={this.state.value}>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <br></br>
            <input type="submit" value="Result" />
          </form>
        </div>
        <div>{this.state.result}</div>
      </React.Fragment>
    );
  }
}

export default Calculator;
