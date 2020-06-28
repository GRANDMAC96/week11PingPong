import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// winningScore, alternate, player1Name, player2Name
// I'm setting up a class to control my local state of my settings form.

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Name: props.player1,
            player2Name: props.player2,
            winningScore: props.winningScore,
            alternate: props.alternate
        }
        this.handlePlayer1 = this.handlePlayer1.bind(this);
        this.handlePlayer2 = this.handlePlayer2.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleServer = this.handleServer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayer1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }
    handlePlayer2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }
    handleWinningScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }
    handleServer(e) {
        this.setState({ alternate: e.currentTarget.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        // call the passed in function
        // pass it the current input value 
        this.props.handleSave(this.state);
    }
    render() {
        let { player1Name, player2Name, winningScore, alternate } = this.state;
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Player 1</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter name"
                            value={player1Name}
                            onChange={this.handlePlayer1}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Player 2</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter name"
                            value={player2Name}
                            onChange={this.handlePlayer2}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Winning score</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter score"
                            value={winningScore}
                            onChange={this.handleWinningScore}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Alternate server</Form.Label>
                        <Form.Control
                            as="select"
                            value={alternate}
                            onChange={this.handleServer}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Button
                    variant="primary"
                    onClick={this.handleSubmit}
                >
                    Start Game</Button>
            </>
        );
    }
}

export default Settings;