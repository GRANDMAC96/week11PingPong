import { createStore } from "redux";
// import persistState from "redux-localstorage";
import reducer from "./reducers";
import initialState from "./initial";

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;