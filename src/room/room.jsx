import React from 'react';
import './room.css';

export function Room() {
  return (
    <main className="container-fluid bg-secondary text-center outline">
      <section className="room-title">
        <h2>PLACEHOLDER Room 1</h2>
      </section>
      <section className="body-section">
        <div className="game"> 
            <form method="get" action="room.html">
                <div className="board">
                    <table className="board-grid">
                        <tr>
                            <td><button type="submit" className="btn btn-secondary board-button">1</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">2</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">3</button></td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="btn btn-secondary board-button">4</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">5</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">6</button></td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="btn btn-secondary board-button">7</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">8</button></td>
                            <td><button type="submit" className="btn btn-secondary board-button">9</button></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Make Move (WebSocket)</button>
                </div>
                
            </form>
        </div>
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
      </section>
    </main>
  );
}