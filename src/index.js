import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
// import initial from "./data/initial";
// import reducers from "./data/reducers";
import store from "./data/store";


let state = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App
      // player1={state.player1}
      // player2={state.player2}
      player1Increment={() => store.dispatch({ type: "INCREMENTPLAYER1" })}
      player2Increment={() => store.dispatch({ type: "INCREMENTPLAYER2" })}
      resetScores={() => store.dispatch({ type: "RESETSCORES" })}
      player1serving={state.p1Serving}
      winner={state.winner}
    />
  </Provider>,
  document.getElementById('root')
);

