import React from "react";

const Winner = ({ winner }) => {
    return (
        <>
            {winner === 0 ? null : <h2 className="alert alert-success">Player {winner} wins!</h2>
            }
        </>
    )
}

export default Winner;