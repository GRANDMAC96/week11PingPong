import React from "react";

const PlayerCard = ({ score, handleIncrement, title, serving, winner }) => {

    return (
        <>
            <div className="col-md-6 mt-4">
                <div className={serving ? "card text-center bg-dark text-white" : "card text-center"}>
                    <h5 className="card-header">{title}</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{score}</p>
                    </div>
                    <div className="card-footer">
                        <button
                            className="form-control btn btn-success"
                            onClick={handleIncrement}
                            disabled={winner !== 0}
                        >+</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PlayerCard;