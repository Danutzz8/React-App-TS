import shuffle from 'lodash.shuffle';
import charactersData from '../data/charactersData.ts';

export type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

export const fetchCharacter = (): Promise<CharacterType> => {
  const [character] = shuffle(charactersData);
  return Promise.resolve(character);
};