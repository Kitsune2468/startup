import React from 'react';

export function Scoreboard(props) {
    return (
        <div className="scoreboard"> 
            <h1 className="scoreboard-title">Scoreboard (WebSocket)</h1>
            <table className="scoreboard-info">
                <tr>
                    <td>PLACEHOLDER <span className="player1">Player 1</span>:</td>
                    <td className="win-loss">Wins: 1</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="win-loss">Loses: 2</td>
                </tr>
                <tr>
                    <td>PLACEHOLDER <span className="player2">Player 2</span>:</td>
                    <td className="win-loss">Wins: 2</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="win-loss">Loses: 1</td>
                </tr>
            </table>
            <div>
              <button type="submit" className="btn btn-primary">Randomize Your Color (3rd Party API)</button>
            </div>
        </div>
    )
}

