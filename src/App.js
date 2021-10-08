import { Component } from 'react';
import './App.css';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    const content = e.target.textContent;

    return this.setState(prevState => ({
      [content]: prevState[content] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el));
  };

  countPositiveFeedbackPercentage = () => {
    const { state, countTotalFeedback } = this;
    const percentage = (state.good * 100) / countTotalFeedback();

    return `${countTotalFeedback() > 0 ? percentage.toFixed(2) : 0}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;

    return (
      <section className="section">
        <h1 className="title">Please leave feedback</h1>
        <ul className="list">
          {Object.keys(this.state).map(key => {
            return (
              <li className="listItem" key={key}>
                <button
                  className="reaction"
                  onClick={this.clickHandler}
                  type="button"
                >
                  {key}
                </button>
              </li>
            );
          })}
        </ul>

        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default App;
