import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import testimonialPhoto1 from '../images/testimonialPhoto1.png';
import testimonialPhoto2 from '../images/testimonialPhoto2.png';
import testimonialPhoto3 from '../images/testimonialPhoto3.png';

const LandingPage = () => {
  return (
  <FirstNesting>
    <SecondNesting id="headline">
      <h2>
        The #1 place for all of your quiz needs.  Choose between pre-built quiz or a custom quiz.  Choose to go solo or challenge your friends.  Definitely the best way to improve your happy hour trivia odds.
      </h2>
    </SecondNesting>
    <div id="intro1">
      <InlineSpan>
        <LeftElement>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </LeftElement>
      </InlineSpan>
      <InlineSpan>
        <RightElement>
          Create a quiz to study for your next midterm exam
        </RightElement>
      </InlineSpan>
    </div>
    <div id="intro2">
      <InlineSpan>
        <LeftElement>
          Take a pre-built quiz to sharpen your skills.
        </LeftElement>
      </InlineSpan>
      <InlineSpan>
        <RightElement>
          <img alt="Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </RightElement>
      </InlineSpan>
    </div>
    <div id="rhetoricalIntro3">
      <InlineSpan>
        <LeftElement>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*"></img>
        </LeftElement>
      </InlineSpan>
      <InlineSpan>
        <RightElement>>
          Create a quiz to challenge your friends to see how well they know you.
        </RightElement>
      </InlineSpan>
    </div>
    <div id="testimonials">
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #1" src={testimonialPhoto1}></img>
          <SecondNesting>
            "Steve Quizlan changed my life!"
          </SecondNesting>
        </div>
      </InlineSpan>
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #2" src={testimonialPhoto2}></img>
          <SecondNesting>
            "I never knew taking quizzes could be so fun!"
          </SecondNesting>
        </div>
      </InlineSpan>
      <InlineSpan>
        <div>
          <img alt="Testimonial stock photo #3" src={testimonialPhoto3}></img>
          <SecondNesting>
            "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
          </SecondNesting>
        </div>
      </InlineSpan>
    </div>
    <StyledH2 id="getStartedHeading">How to Get Started</StyledH2>
    <StyledH3 id="getStartedInfo1">Step One: Sign Up for an Account</StyledH3>
    <StyledH3 id="getStartedInfo">Step Two: Start Taking Quizzes!</StyledH3>
    <Link to="/login">
      <StyledButton id="signup">Sign Up Now!</StyledButton>
    </Link>
  </FirstNesting>
  );
};

const FirstNesting = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: var(--yellow);
  text-color: var(--text-color);
  margin: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  width: 70%;
`

const SecondNesting = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  text-align: center;
`

const LeftElement = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  text-align: left;
  justify-content: flex-start;
`

const RightElement = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  text-align: right;
  justify-content: flex-end;
`

const InlineSpan = styled.span`
  display: inline-block;
  width: 33%;
  justinfy-content: space-between;
`

const StyledButton = styled.button`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
`
const StyledH1 = styled.h1`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
`

const StyledH2 = styled.h2`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
`

const StyledH3 = styled.h3`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
`

export default LandingPage;
