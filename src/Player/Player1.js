import { connect } from "react-redux";
import PlayerCard from "./PlayerCard";

const mapStateToProps = (state) => {
    return {
        score: state.player1,
        title: "Player 1",
        serving: state.p1Serving,
        winner: state.winner
    }
}

export default connect(mapStateToProps)(PlayerCard);