import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTPLAYER1": return { ...state, player1: state.player1 + 1 };
    case "INCREMENTPLAYER2": return { ...state, player2: state.player2 + 1 };
    default: return state;
  }
}
const store = createStore(reducer, initialState);

store.subscribe(() => {
  // get the current state using the getState method 
  // we can get the state, but not update it
  let state = store.getState();

  // for now, just log the new count
  console.log(state.count)
});

const render = () => {
  let state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
      <App
        player1={state.player1}
        player2={state.player2}
        player1Increment={() => store.dispatch({ type: "INCREMENTPLAYER1" })}
        player2Increment={() => store.dispatch({ type: "INCREMENTPLAYER2" })}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

