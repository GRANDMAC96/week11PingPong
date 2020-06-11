import React from 'react';
import Form from 'react-bootstrap/Form';

const Start = () => {
    return (
        <>
            <form>
                <label>
                    Player 1 Name
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Player 2 Name
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Winning Score
                    <input type="number" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Alternate Every
                    <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
            </form >
            <button onClick={this.handleSubmit}>
                {"Start Game"}
            </button>
        </>
    )
}

export default Start;