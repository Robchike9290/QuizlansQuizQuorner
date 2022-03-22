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
      <InlineDuo>
        <LeftElement>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </LeftElement>
      </InlineDuo>
      <InlineDuo>
        <RightElement>
          Create a quiz to study for your next midterm exam
        </RightElement>
      </InlineDuo>
    </div>
    <div id="intro2">
      <InlineDuo>
        <LeftElement>
          Take a pre-built quiz to sharpen your skills.
        </LeftElement>
      </InlineDuo>
      <InlineDuo>
        <RightElement>
          <img alt="Take quiz page screenshot *INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*"></img>
        </RightElement>
      </InlineDuo>
    </div>
    <div id="rhetoricalIntro3">
      <InlineDuo>
        <LeftElement>
          <img alt="Create quiz page screenshot *INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*"></img>
        </LeftElement>
      </InlineDuo>
      <InlineDuo>
        <RightElement>>
          Create a quiz to challenge your friends to see how well they know you.
        </RightElement>
      </InlineDuo>
    </div>
    <div id="testimonials">
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #1" src={testimonialPhoto1}></img>
        </center>
        <SecondNesting>
          "Steve Quizlan changed my life!"
        </SecondNesting>
      </InlineTrio>
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #2" src={testimonialPhoto2}></img>
        </center>
        <SecondNesting>
          "I never knew taking quizzes could be so fun!"
        </SecondNesting>
      </InlineTrio>
      <InlineTrio>
        <center>
          <img alt="Testimonial stock photo #3" src={testimonialPhoto3}></img>
        </center>
        <SecondNesting>
          "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
        </SecondNesting>
      </InlineTrio>
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
  background-color: var(--yellow);
  text-color: var(--text-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  width: 90%;
  margin: auto;
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
  float: left;
  width: 50%
`

const RightElement = styled.div`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  text-align: right;
  float: right;
  width: 50%;
`

const InlineDuo = styled.span`
  display: inline-block;
  width: 50%;
`

const InlineTrio = styled.span`
  display: inline-block;
  width: 33%;
  margin: auto;
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
  text-align: center;
`

const StyledH3 = styled.h3`
  background-color: var(--blue);
  text-color: var(--text-color);
  margin: var: var(--standard-margin);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--standard-shadow);
  text-align: center;
`

export default LandingPage;
