import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router'
import CharacterCard from '../components/CharacterCard';
import { CharacterInformation } from '../components/CharacterInformation';

export const Route = createLazyFileRoute('/caracterCard')({
  component: RouteComponent,
})

const CharacterInformationWithCharacter = CharacterCard(CharacterInformation);

function RouteComponent() {
  return (
    <div className='character-card p-4 pt-40'>
      <main>
         <CharacterInformationWithCharacter />
      </main>
    </div>
  );
}
