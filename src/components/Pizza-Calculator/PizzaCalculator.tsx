import React from "react";
import { Dispatch } from 'react';
import './PizzaCalculator.scss';
import type {  PizzaState, PizzaAction } from '../../utils/pizzaCalculatorHelper';

const PizzaCalculator = ({
    dispatch,
    state
  }: {
    state: PizzaState;
    dispatch: Dispatch<PizzaAction>;
  }) => {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="number-of-people">Number of People</label>
        <input
          id="number-of-people"
          type="number"
          value={state.numberOfPeople}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_NUMBER_OF_PEOPLE',
              payload: +event.target.value
            })
          }
        />
        <label htmlFor="slices-per-person">Slices Per Person</label>
        <input
          id="slices-per-person"
          type="number"
          value={state.slicesPerPerson}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_SLICES_PER_PERSON',
              payload: +event.target.value
            })
          }
        />
        <label htmlFor="slices-per-Pie">Slices Per Pie</label>
        <input
          id="slices-per-Pie"
          type="number"
          value={state.slicesPerPie}
          onChange={(event) =>
            dispatch({
              type: 'UPDATE_SLICES_PER_PIE',
              payload: +event.target.value
            })
          }
        />
      </form>
    );
};

export default PizzaCalculator;