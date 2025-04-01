import React from "react";

const PizzaNeededCalculation = ({ count }: { count: any }) => {
    return (
      <section className="calculation">
        <p className="count">{count}</p>
        <p className="caption">Pizzas Needed</p>
      </section>
    );
};

export default PizzaNeededCalculation;