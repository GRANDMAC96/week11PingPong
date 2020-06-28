import React from "react";
import { Router, Route } from "react-router-dom";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header/Header";
import History from "./components/History/";
import Settings from "./components/Settings/";
import history from "./history";
import Loading from "./components/Loading/";

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        {/* <Loading> */}
        <Route exact path={"/start"}>
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
        {/* </Loading> */}
        {/* <Loading> */}
        <Route exact path="/" component={Settings} />
        {/* </Loading> */}
      </Router>
    </React.Fragment>
  )
};

export default App;
