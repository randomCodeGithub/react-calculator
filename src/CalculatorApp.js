import React from "react";
import InputItem from "./component/InputItem";
import InputItemData from "./component/InputItemData";

// import ResultComponent from './ResultComponent';

class CalculatorApp extends React.Component {
  state = {
    firstVal: 0,
    secondVal: 0,
  };

  updateInputValue = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: parseFloat(value),
    });
  };

  add = () => {
    const { firstVal, secondVal } = this.state;
    alert("The SUM is " + (firstVal + secondVal));
  };

  substract = () => {
    const { firstVal, secondVal } = this.state;
    alert("The DIF is " + (firstVal - secondVal));
  };
  multiplication = () => {
    const { firstVal, secondVal } = this.state;
    alert("Result is " + firstVal * secondVal);
  };

  division = () => {
    const { firstVal, secondVal } = this.state;
    alert("Result is " + firstVal / secondVal);
  };

  render() {
    const inputComponent = InputItemData.map((input) => (
      <InputItem
        data={{
          placeholder: input.placeholder,
          name: input.name,
          onChange: (evt) => this.updateInputValue(evt),
        }}
      />
    ));
    const { firstVal, secondVal } = this.state;

    const sum = firstVal + secondVal;
    const substract = firstVal - secondVal;
    const multiplication = firstVal * secondVal;

    const numbersAreNull = firstVal === 0 || secondVal === 0;
    let division;

    const isNumbersNaN = isNaN(firstVal) || isNaN(secondVal);

    if (firstVal === 0 || secondVal === 0) {
      division = 0;
    } else {
      division = firstVal / secondVal;
    }
    return (
      <div>
        {inputComponent}
        {/* <InputItem
          data={{
            placeholder: "first value",
            name: "firstVal",
            onChange: (evt) => this.updateInputValue(evt),
          }}
        /> */}
        {/* <input
          placeholder="first value"
          name="firstVal"
          onChange={(evt) => this.updateInputValue(evt)}
        />
        <input
          placeholder="second value"
          name="secondVal"
          onChange={(evt) => this.updateInputValue(evt)}
        /> */}
        <button onClick={this.add}>+</button>
        <button onClick={this.substract}>-</button>
        <button onClick={this.multiplication}>*</button>
        <button onClick={this.division}>/</button>
        <br />
        <br />
        {!isNumbersNaN ? (
          <div>
            Sum: {this.state.firstVal} + {this.state.secondVal} = {sum} <br />
            <br />
            Substract: {this.state.firstVal} - {this.state.secondVal} ={" "}
            {substract}
            <br />
            <br />
            Multiplictaion: {this.state.firstVal} * {this.state.secondVal} ={" "}
            {multiplication}
            <br />
            <br />
            {!numbersAreNull ? (
              <div>
                Division: {this.state.firstVal} / {this.state.secondVal} ={" "}
                {division}
              </div>
            ) : (
              <div>Division:</div>
            )}
          </div>
        ) : (
          <div>
            Sum: <br />
            <br /> Substract: <br />
            <br /> Multiplictaion: <br />
            <br /> Division: <br />
          </div>
        )}
      </div>
    );
  }
}

export default CalculatorApp;
