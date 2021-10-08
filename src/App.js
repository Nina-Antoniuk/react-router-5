import { Component } from 'react';
import './App.css';
import Section from './components/Section';
import Feedback from './components/Feedback';
import Notification from './components/Notification';
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
      <div className="wrapper">
        <Section title="Please leave feedback">
          <Feedback options={this.state} onLeaveFeedback={this.clickHandler} />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
