import {
  addPizzasNeededToPizzaData,
  PizzaState,
  PizzaAction,
} from "../utils/pizzaCalculatorHelper";

const reducer = (state: PizzaState, action: PizzaAction) => {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addPizzasNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PERSON") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload,
    });
  }

  if (action.type === "UPDATE_SLICES_PER_PIE") {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload,
    });
  }

  return state;
};

export default reducer;
