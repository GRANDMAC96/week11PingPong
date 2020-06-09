import initialState from "./initial"

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
    return initialState;
}
const serving = state => {
    return {
        ...state,
        p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving
    }
}
const score = state => {
    return {
        ...state,
        winner: state.player1 >= 21 ? 1 : state.player2 >= 21 ? 2 : state.winner,
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENTPLAYER1": return score(serving(increaseP1(state)));
        case "INCREMENTPLAYER2": return score(serving(increaseP2(state)));
        case "RESETSCORES": return reset(state);
        default: return state;
    }
}

export default reducer;