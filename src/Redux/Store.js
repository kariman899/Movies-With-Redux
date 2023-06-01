import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./RootReducer";

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
