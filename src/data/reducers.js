import initialState from "./initial";

const increaseP1 = state => {
    return {
        ...state,
        player1: state.player1 + 1
    }
}
const increaseP2 = state => {
    return {
        ...state,
        player2: state.player2 + 1
    }
}
const reset = state => {
    return {
        ...initialState,
        history: state.history
    };
}
const serving = state => {
    let { player1, player2, p1Serving } = state
    let total = player1 + player2
    let changeServer = total >= 40 ? 2 : 5
    return {
        ...state,
        p1Serving: total % changeServer === 0 ? !p1Serving : p1Serving
    }
}
const score = state => {
    let { player1, player2, winner, winningScore } = state
    return {
        ...state,
        winner: player1 >= winningScore && player2 <= (player1 - 2) ? 1 : player2 >= winningScore && player1 <= (player2 - 2) ? 2 : winner,
    }
}
const upDateHistory = state => {
    if (state.winner > 0) {
        return {
            ...state,
            history: [
                ...state.history,
                {
                    player1: {
                        score: state.player1,
                        won: state.player1 > state.player2
                    },
                    player2: {
                        score: state.player2,
                        won: state.player2 > state.player1
                    }
                }
            ]
        }
    } else {
        return state
    }
}

const saveSettings = (state, { player1Name, player2Name, winningScore, alternate }) => ({
    ...state,
    player1Name: player1Name,
    player2Name: player2Name,
    winningScore: winningScore,
    alternate: alternate
});


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTPLAYER1": return upDateHistory(score(serving(increaseP1(state))));
        case "INCREMENTPLAYER2": return upDateHistory(score(serving(increaseP2(state))));
        case "RESETSCORES": return reset(state);
        case "SAVE_SETTINGS": return saveSettings(state, action);
        default: return state;
    }
}

export default reducer;