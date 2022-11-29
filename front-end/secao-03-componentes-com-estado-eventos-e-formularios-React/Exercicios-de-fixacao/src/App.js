import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clickButtonOne: 0,
      clickButtonTwo: 0,
      clickButtonThree: 0,
    };
  }

  buttonColor(num) {
    if (num % 2 === 0) {
      return 'green';
    } else {
      return 'white';
    }
  }

  handleButtonOne() {
    const { clickButtonOne } = this.state;
    this.setState((estadoAnterior) => ({
      clickButtonOne: estadoAnterior.clickButtonOne + 1,
    }), () => {
      console.log(this.buttonColor(clickButtonOne));
    })
  }

  handleButtonTwo() {
    const { clickButtonTwo } = this.state;
    this.setState((estadoAnterior) => ({
      clickButtonTwo: estadoAnterior.clickButtonTwo + 1,
    }), () => {
      console.log(this.buttonColor(clickButtonTwo));
    })
  }

  handleButtonThree() {
    const { clickButtonThree } = this.state;
    this.setState((estadoAnterior) => ({
      clickButtonThree: estadoAnterior.clickButtonThree + 1,
    }), () => {
      console.log(this.buttonColor(clickButtonThree));
    })
  }

  render() {
    const { clickButtonOne, clickButtonTwo, clickButtonThree } = this.state;
    return (
      <div>
        <button onClick={this.handleButtonOne} style={{ backgroundColor: this.buttonColor(clickButtonOne) }}>{`Clicks: ${clickButtonOne}`}</button>
        <button onClick={this.handleButtonTwo} style={{ backgroundColor: this.buttonColor(clickButtonTwo) }}>{`Clicks: ${clickButtonTwo}`}</button>
        <button onClick={this.handleButtonThree} style={{ backgroundColor: this.buttonColor(clickButtonThree) }}>{`Clicks: ${clickButtonThree}`}</button>
      </div>
    );
  }
}

export default App;