import React from "react";

const Reset = ({ resetScores }) => {
    return (
        <>
            <button
                className="btn btn-danger"
                onClick={resetScores}
            >Reset</button>
        </>
    )
}

export default Reset; 