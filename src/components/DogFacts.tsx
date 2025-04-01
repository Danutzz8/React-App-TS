import React from 'react';
import './dogFacts.scss';

type FormProps = {
  onSubmit: (n: number) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = React.useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={value}
          min="1"
          max="10"
          onChange={(event) => setValue(+event.target.value)}
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

export const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};