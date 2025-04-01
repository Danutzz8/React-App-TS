import React from 'react'
import TextTruncate from '../components/text/TextTruncate'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/truncateText')({
  component: RouteComponent,
})

function RouteComponent() {
  const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';
  const [expanded, setExpanded] = useState(false);
  return (
    <div className='text-as p-4 lg:p-0'>
      <main>
        <TextTruncate truncate expanded={expanded} id="Text" style={{ color: 'red' }} truncateLength={50}>
          {exampleText}
        </TextTruncate>
        <section style={{ marginTop: '1em' }}>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Contract' : 'Expand'}
          </button>
        </section>
      </main>
    </div>
  );
}
