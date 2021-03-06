import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};
const middleWares = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWares)
)

export default store;