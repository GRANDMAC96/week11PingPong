import { saveSettings } from './actions';
import axios from '../axios';

export const postGame = ({ player1Name, player2Name, winningScore, alternate }) => {
    return (dispatch) => {
        axios.post("/", {
            player1Name: player1Name,
            player2Name: player2Name,
            winningScore: winningScore,
            alternate: alternate,
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        });
    };
}; 