import { connect } from "react-redux";
import Settings from "./Settings";
import { postGame } from "../../data/api";
// import { saveSettings } from "../../data/actions";
import history from "../../history";


const mapStateToProps = state => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore,
        alternate: state.alternate
    }
}

// pass in a function that accepts a value
// pass the value along to the action creator
const mapDispatchToProps = dispatch => {
    return {
        handleSave: settings => {
            dispatch(postGame(settings));
            history.push("/start");
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 