import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import css from 'components/feedback/feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const LeaveFeedback = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(pr => pr + 1);
        break;

      case 'neutral':
        setNeutral(pr => pr + 1);
        break;

      case 'bad':
        setBad(pr => pr + 1);
        break;

      default:
        return;
    }
  };

  const CountTotalFeedback = () => {
    return good + neutral + bad;
  };

  const CountPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / (good + neutral + bad));
  };

  return (
    <div className={css.form}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={LeaveFeedback}
          options={Object.keys(state)}
        />
      </Section>

      <Section title="Statistics">
        {CountTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={CountTotalFeedback()}
            positivePercentage={CountPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
