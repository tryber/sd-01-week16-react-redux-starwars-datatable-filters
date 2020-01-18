import { createStore, applyMiddleware } from "redux";
import { apiServiceReducer } from "../reducers/starWarsApi";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(apiServiceReducer, applyMiddleware(logger, thunk));


