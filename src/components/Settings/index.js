import { connect } from "react-redux";
import Settings from "./Settings";

import { saveSettings } from "../../data/actions";

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
        handleSave: settings => dispatch(saveSettings(settings)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 