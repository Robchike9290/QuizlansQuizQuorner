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
      <InlineSpan>
        <SecondNesting>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </SecondNesting>
      </InlineSpan>
      <InlineSpan>
        <SecondNesting>
          Create a quiz to study for your next midterm exam
        </SecondNesting>
      </InlineSpan>
    </div>
    <div id="intro2">
      <InlineSpan>
        <SecondNesting>
          Take a pre-built quiz to sharpen your skills.
        </SecondNesting>
      </InlineSpan>
      <InlineSpan>
        <SecondNesting>
          <img alt="Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </SecondNesting>
      </InlineSpan>
    </div>
    <div id="rhetoricalIntro3">
      <InlineSpan>
        <SecondNesting>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*"></img>
        </SecondNesting>
      </InlineSpan>
      <InlineSpan>
        <SecondNesting>
          Create a quiz to challenge your friends to see how well they know you.
        </SecondNesting>
      </InlineSpan>
    </div>
    <div id="testimonials">
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #1" src=".././images/testimonialPhoto1.png"></img>
          <SecondNesting>
            "Steve Quizlan changed my life!"
          </SecondNesting>
        </div>
      </InlineSpan>
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #2" src=".././images/testimonialPhoto2.png"></img>
          <SecondNesting>
            "I never knew taking quizzes could be so fun!"
          </SecondNesting>
        </div>
      </InlineSpan>
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #3" src="src/images/testimonialPhoto3.png"></img>
          <SecondNesting>
            "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
          </SecondNesting>
        </div>
      </InlineSpan>
    </div>
    <StyledH2 id="getStartedHeading">How to Get Started</StyledH2>
    <StyledH3 id="getStartedInfo1">Step One: Sign Up for an Account</StyledH3>
    <StyledH3 id="getStartedInfo">Step Two: Start Taking Quizzes!</StyledH3>
    <StyledButton id="signup" onClick={handleLogin}>Sign Up Now!</StyledButton>
  </FirstNesting>
  );
};

const FirstNesting = styled.div`
  background-color: var(--yellow);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`

const SecondNesting = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`

const InlineSpan = styled.span`
  display: inline-block;
`

const StyledButton = styled.button`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`
const StyledH1 = styled.h1`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`

const StyledH2 = styled.h2`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`

const StyledH3 = styled.h3`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  standard-shadow: var(--standard-shadow);
`

export default LandingPage;
