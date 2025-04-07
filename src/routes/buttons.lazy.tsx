import React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import  Button  from '../components/buttons/ButtonsWithLimitedProps'
import ButtonAs from '../components/buttons/ButtonsAs'

export const Route = createLazyFileRoute('/buttons')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='buttonss p-4 lg:p-0 pt-40 lg:pt-40'>
      <main>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button destructive>Destructive</Button>
      </main>  
      <main>
        <ButtonAs as='span' primary>Primary</ButtonAs>
        <ButtonAs secondary as='a' href='https://www.google.co.uk/'>Secondary</ButtonAs>
        <ButtonAs destructive>Destructive</ButtonAs>
      </main>  
    </div>
  );
}
