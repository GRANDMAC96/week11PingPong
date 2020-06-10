import React from "react";
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
import Winner from "./components/Winner";
import Reset from "./components/Reset";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      {/* scores */}
      <div className="row mb-4">
        <Player1 />
        <Player2 />
      </div>
      <Winner />
      <hr />

      <Reset />
    </React.Fragment>
  )
};

export default App;
