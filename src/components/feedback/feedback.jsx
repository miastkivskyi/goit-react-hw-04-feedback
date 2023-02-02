import React from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import css from 'components/feedback/feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = event => {
    const btn = event.target.name;
    this.setState(prevState => ({
      [btn]: prevState[btn] + 1,
    }));
  };

  CountTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  CountPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
      <div className={css.form}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.LeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.CountTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.CountTotalFeedback()}
              positivePercentage={this.CountPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
