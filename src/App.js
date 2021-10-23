import { useState, useCallback } from 'react';
import './App.css';
import Section from './components/Section';
import Feedback from './components/Feedback';
import Notification from './components/Notification';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = useCallback(e => {
    const value = e.target.textContent.toLowerCase();
    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        throw new Error();
    }
  }, []);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / countTotalFeedback();
    return `${countTotalFeedback() > 0 ? percentage.toFixed(2) : 0}%`;
  };

  return (
    <div className="wrapper">
      <Section title="Please leave feedback">
        <Feedback
          states={['good', 'neutral', 'bad']}
          onLeaveFeedback={clickHandler}
        />
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

export default App;
