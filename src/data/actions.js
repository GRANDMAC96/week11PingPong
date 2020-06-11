export const incrementP1 = () => {
    return {
        type: "INCREMENTPLAYER1",
    };
};

export const incrementP2 = () => {
    return {
        type: "INCREMENTPLAYER2",
    };
};
export const reset = () => {
    return {
        type: "RESETSCORES",
    };
};

export const saveSettings = ({ player1Name, player2Name, winningScore, alternate }) => {
    return {
        type: "SAVE_SETTINGS",
        // we can use the action creator to tidy up the data
        player1Name: player1Name,
        player2Name: player2Name,
        winningScore: +winningScore,
        alternate: +alternate
    };
};
