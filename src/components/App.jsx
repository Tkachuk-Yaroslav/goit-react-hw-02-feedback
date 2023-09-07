import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handlerClick = event => {
    this.setState(prevState => {
      console.log('[event.name]', event.target.name);
      const updatedState = {
        [event.target.name]: prevState[event.target.name] + 1,
      };
      console.log('Updated state', updatedState);
      return updatedState;
    });
  };

  countTotalFeedback = () => {
    let total;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
    //total: prev.good + prev.neutral + prev.bad
    //total: this.state.good + this.state.neutral + this.state.bad,
  };

  countPositiveFeedbackPercentage = () => {
    let positive;
    positive = this.state.good / this.countTotalFeedback();
    return (positive * 100).toFixed(0);
  };

  render() {
    return (
      <>
        <h1>Please live feedback</h1>
        <button onClick={this.handlerClick} type="button" name="good">
          Good
        </button>
        <button onClick={this.handlerClick} type="button" name="neutral">
          Neutral
        </button>
        <button onClick={this.handlerClick} type="button" name="bad">
          Bad
        </button>

        <h2>Statistic</h2>
        <p value={this.state.good}>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

export default App;
