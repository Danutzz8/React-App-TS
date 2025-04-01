import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router'
import Question from '../components/Question'
import { questions } from '../data/questions';

export const Route = createLazyFileRoute('/quizz')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
     <main className='p-4 lg:p-0'>
       {questions.map((q) => (
         <Question question={q.question} answer={q.answer} key={q.id} />
       ))}
     </main>
   );
}
