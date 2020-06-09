import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
  p1Serving: true,
  winner: 0,
  disabled: false
};

const increaseP1 = state => {
  return {
    ...state,
    player1: state.player1 + 1
  }
}
const increaseP2 = state => {
  return {
    ...state,
    player2: state.player2 + 1
  }
}
const reset = state => {
  return {
    ...state,
    player1: 0,
    player2: 0
  }
}
const serving = state => {
  return {
    ...state,
    p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving
  }
}
const score = state => {
  return {
    ...state,
    winner: state.player1 >= 21 ? 1 : state.player2 >= 21 ? 2 : state.winner,
  }
}
// const ended = state => {
//   return {
//     ...state,
//     disabled: (state.player1 >= 21 || state.player2 >= 21) ? !state.disabled : state.disabled
//   }
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTPLAYER1": return score(serving(increaseP1(state)));
    case "INCREMENTPLAYER2": return score(serving(increaseP2(state)));
    case "RESETSCORES": return reset(state);
    default: return state;
  }
}
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
        resetScores={() => store.dispatch({ type: "RESETSCORES" })}
        player1serving={state.p1Serving}
        winner={state.winner}
      // endOfGame={state.disabled}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

