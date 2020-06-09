import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";

const mapStateToProps = (state) => {
    return {
        score: state.player2,
        title: "Player 2",
        serving: !state.p1Serving,
        winner: state.winner
    }
}

export default connect(mapStateToProps)(PlayerCard);