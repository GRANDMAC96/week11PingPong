import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";

import { incrementP2 } from "../../data/actions";


const mapStateToProps = (state) => {
    return {
        score: state.player2,
        title: "Player 2",
        serving: !state.p1Serving,
        winner: state.winner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch(incrementP2())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);