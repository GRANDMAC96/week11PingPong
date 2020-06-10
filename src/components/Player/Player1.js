import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";

import { incrementP1 } from "../../data/actions";

// Refactoring;
// 1. Destructuring
// 2. auto key naming
// 3. Fat arriw single line
// ask to explain completely

const mapStateToProps = (state) => {
    return {
        score: state.player1,
        title: "Player 1",
        serving: state.p1Serving,
        winner: state.winner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(incrementP1())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);