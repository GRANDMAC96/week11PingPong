import React from "react";
import Table from 'react-bootstrap/Table'


const History = ({ history, player1, player2 }) => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Game</th>
                        <th>Player One</th>
                        <th>Player Two</th>
                    </tr>
                </thead>
                <tbody>{
                    history.map((game, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{game.player1.score}</td>
                            <td>{game.player2.score}</td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </>
    )
}

export default History; 