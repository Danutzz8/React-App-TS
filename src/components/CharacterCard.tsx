import * as React from 'react';
import { CharacterType, fetchCharacter } from '../utils/characters';
import { Loading } from './Loading';
import './characterCard.scss'

const CharacterCard = (Component: any) => {
  return () => {
    const [character, setCharacter] = React.useState<CharacterType | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            fetchCharacter().then((c) => {
              setCharacter(c);
              setLoading(false);
            });
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) return <Loading />;
    return <Component character={character} />;
  };
}; 

export default CharacterCard;