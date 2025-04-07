import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Form, Fact } from '../components/DogFacts'
import { fetchDogFacts, DogFactType } from '../utils/dog-facts';

export const Route = createLazyFileRoute('/dogFacts')({
  component: DogFacts,
})

function DogFacts() {
    const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => {
      setFacts(facts);
    });
  };

  return (
    <div className='dog-facts-main pt-40'>
        <main className=''>
            <Form onSubmit={handleSubmit} />
            <section>
                {facts.map((fact, index) => (
                <Fact key={fact.id} fact={fact.fact} />
                ))}
            </section>
        </main>
    </div>
  );
}