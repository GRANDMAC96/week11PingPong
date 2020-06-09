import React from "react";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";

const App = ({ player1, player2, player1Increment, player2Increment, resetScores, player1serving, winner, endOfGame }) => {
  return (
    <React.Fragment>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
        <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
        <Player1
          handleIncrement={player1Increment}
        />
        <Player2
          handleIncrement={player2Increment}

        />
      </div>

      { /* winner message */}
      {winner === 0 ? null : <h2 className="alert alert-success">Player {winner} wins!</h2>}

      <hr />

      { /* reset button */}
      <button
        className="btn btn-danger"
        onClick={resetScores}
      >Reset</button>
    </React.Fragment>
  )
};

export default App;
