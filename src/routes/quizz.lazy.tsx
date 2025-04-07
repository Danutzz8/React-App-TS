import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router'
import Question from '../components/Question'
import { questions } from '../data/questions';

export const Route = createLazyFileRoute('/quizz')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-4 lg:p-0 pt-40 lg:pt-40'>
      <main>
        {questions.map((q) => (
          <Question question={q.question} answer={q.answer} key={q.id} />
        ))}
      </main>
    </div>
   );
}
