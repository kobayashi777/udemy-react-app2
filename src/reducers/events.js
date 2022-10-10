import _ from "lodash";
import { READ_EVENTS } from "../actions";

export const events = (events = {}, action) => {
  console.log("events");
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};

export default events;
