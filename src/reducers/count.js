import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

const counter = (state = initialState, action) => {
  console.log("counter");
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default counter;
