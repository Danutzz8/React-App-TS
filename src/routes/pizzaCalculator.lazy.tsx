import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useReducer } from "react";
import PizzaNeededCalculation from "../components/Pizza-Calculator/PizzaNeededCalculation";
import PizzaCalculator from "../components/Pizza-Calculator/PizzaCalculator";
import reducer from "../reducer/pizzaReducer";
import { initialState } from "../utils/pizzaCalculatorHelper";

export const Route = createLazyFileRoute("/pizzaCalculator")({
  component: RouteComponent,
});

function RouteComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="pizza-calculator p-4 lg:p-0 pt-40 lg:pt-40">
      <main className="calculator">
        <header>
          <h1>Pizza Calculator</h1>
        </header>
        <PizzaNeededCalculation count={state.pizzasNeeded} />
        <PizzaCalculator state={state} dispatch={dispatch} />
      </main>
    </div>
  );
}
