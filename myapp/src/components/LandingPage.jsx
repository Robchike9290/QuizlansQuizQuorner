import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
  <div>
    <div id="headline">
      <p>
        The #1 place for all of your quiz needs.  Choose between pre-built quiz or a custom quiz.  Choose to go solo or challenge your friends.  Definitely the best way to improve your happy hour trivia odds.
      </p>
    </div>
    <div id="rhetoricalIntro1">
      <span>
        <img alt="Create quiz page screenshot">*INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*</img>
      </span>
      <span>
        <p>
          Create a quiz to study for your next midterm exam
        </p>
      </span>
    </div>
    <div id="rhetoricalIntro2">
      <span>
        <p>
          Take a pre-built quiz to sharpen your skills.
        </p>
      </span>
      <span>
        <img alt="Take quiz page screenshot">*INSERT TAKE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE*</img>
      </span>
    </div>
    <div id="rhetoricalIntro3">
      <span>
        <img alt="Create quiz page screenshot">*INSERT CREATE QUIZ PAGE SCREENSHOT HERE ONCE COMPLETE AND LOADABLE. OR...REPLACE WITH ANOTHER FUNCTION?*</img>
        <p>
          Create a quiz to challenge your friends to see how well they know you.
        </p>
      </span>
    </div>
    <div id="testimonials">
      <span>
        <div>
          <img alt="Testimonial stock photo #1"></img>
          <p>
            "Steve Quizlan changed my life!"
          </p>
        </div>
      </span>
      <span>
        <div>
          <img alt="Testimonial stock photo #2"></img>
          <p>
            "I never knew taking quizzes could be so fun!"
          </p>
        </div>
      </span>
      <span>
        <div>
          <img alt="Testimonial stock photo #3"></img>
          <p>
            "After two weeks my quiz scores went from 55% to 85%.  Thanks, Steve!"
          </p>
        </div>
      </span>
    </div>
  </div>
  );
};

export default LandingPage;
