import React from 'react';
import { useState } from 'react';
import './question.scss';

type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${hidden ? 'blurred' : 'visible'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!hidden)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

export default Question;