import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header/Header";
import History from "./components/History/";
import Settings from "./components/Settings/";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/">
          <Header />
          <div className="row mb-4">
            <Player1 />
            <Player2 />
          </div>
          <Winner />
          <hr />
          <Reset />
          <History />
        </Route>
        <Route exact path="/start" component={Settings} />
      </React.Fragment>
    </Router>
  )
};

export default App;
