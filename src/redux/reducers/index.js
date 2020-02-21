import { combineReducers } from "redux";
import personReducer from "./dataReducer/personReducer";

const rootReducer = combineReducers({
  personReducer
});

export default rootReducer;
