import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import  TextAs  from '../components/text/TextAs'

export const Route = createLazyFileRoute('/textAs')({
  component: RouteComponent,
})

function RouteComponent() {
  const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';
  
  return (
    <div className='text-as p-4 lg:p-0'>
      <main>
        <TextAs id="main" as="label" htmlFor="wow">
          {exampleText}
        </TextAs>
      </main>
    </div>
  );
}
