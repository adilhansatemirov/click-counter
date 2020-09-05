import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      attemptedToGoBelowZero: false,
    };
  }

  render() {
    const { counter, attemptedToGoBelowZero } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is: {counter}</h1>
        {attemptedToGoBelowZero && <h2 data-test="warning-message">Hey man!</h2>}
        <button data-test="increment-button" onClick={() => {
          if (attemptedToGoBelowZero) {
            this.setState({ attemptedToGoBelowZero: false });
          }
          this.setState({ counter: counter + 1 })}}>
          Increment
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (counter === 0) {
              this.setState({ attemptedToGoBelowZero: true });
              return;
            }
            this.setState({ counter: counter - 1 });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
