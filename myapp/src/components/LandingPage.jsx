import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {

  const handleLogin = () => {
    console.log('login button clicked!');
  }

  return (
  <FirstNesting>
    <SecondNesting id="headline">
      <h2>
        The #1 place for all of your quiz needs.  Choose between pre-built quiz or a custom quiz.  Choose to go solo or challenge your friends.  Definitely the best way to improve your happy hour trivia odds.
      </h2>
    </SecondNesting>
    <div id="intro1">
      <SecondNesting>
        <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
      </SecondNesting>
      <span>
        <SecondNesting>
          Create a quiz to study for your next midterm exam
        </SecondNesting>
      </span>
    </div>
    <div id="intro2">
      <span>
        <SecondNesting>
          Take a pre-built quiz to sharpen your skills.
        </SecondNesting>
      </span>
      <SecondNesting>
        <img alt="Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
      </SecondNesting>
    </div>
    <div id="rhetoricalIntro3">
      <SecondNesting>
        <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*"></img>
      </SecondNesting>
      <span>
        <SecondNesting>
          Create a quiz to challenge your friends to see how well they know you.
        </SecondNesting>
      </span>
    </div>
    <div id="testimonials">
      <span>
        <div>
          <img alt="Testimonial stock photo #1" src=".././images/testimonialPhoto1.png"></img>
          <SecondNesting>
            "Steve Quizlan changed my life!"
          </SecondNesting>
        </div>
      </span>
      <span>
        <div>
          <img alt="Testimonial stock photo #2" src=".././images/testimonialPhoto2.png"></img>
          <SecondNesting>
            "I never knew taking quizzes could be so fun!"
          </SecondNesting>
        </div>
      </span>
      <span>
        <div>
          <img alt="Testimonial stock photo #3" src="src/images/testimonialPhoto3.png"></img>
          <SecondNesting>
            "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
          </SecondNesting>
        </div>
      </span>
    </div>
    <SecondNesting id="getStartedHeading">
      <h2>How to Get Started</h2>
    </SecondNesting>
    <div id="getStartedInfo">
      <SecondNesting>
        <h3>Step One: Sign Up for an Account</h3>
      </SecondNesting>
      <SecondNesting>
        <h3>Step Two: Start Taking Quizzes!</h3>
      </SecondNesting>
    </div>
    <SecondNesting id="signup">
      <button onClick={handleLogin}>Sign Up Now!</button>
    </SecondNesting>
  </FirstNesting>
  );
};

const FirstNesting = styled.div`
  background-color: var(--yellow);
`

const SecondNesting = styled.div`
  background-color: var(--blue);
`

export default LandingPage;
