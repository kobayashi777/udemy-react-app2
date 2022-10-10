import { READ_EVENTS } from "../actions";

export const counter = (state = {}, action) => {
  console.log("counter");
  switch (action.type) {
    case READ_EVENTS:
      return state;
    default:
      return state;
  }
};

export default counter;
