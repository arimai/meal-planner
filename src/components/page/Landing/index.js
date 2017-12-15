import React from 'react';
import './Landing.css';
import Button from '../../shared/Button';

const Landing = (props) => (
  <div className="Landing">
    <div className="Landing__banner">
      <h1 className="Landing__banner__heading">Custom Meal Planning made easy</h1>
    </div>
    <div className="Landing__data">
      <div className="Landing__data__content">
        <h1>Does this sound like you?</h1>
        <ul>
          <li>Wasted a lot of time thinking about what I should make for dinner today</li>
          <li>Want to watch what I eat but don't know how?</li>
          <li>Not good at pre-planning meals</li>
          <li>Want to track my weight and calorie intake</li>
        </ul>
        <Button type="accent" link={true} path="/survey" className="Landing__data__button">Let's find that meal plan</Button>
      </div>
    </div>
  </div>
);

export default Landing;
