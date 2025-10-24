import React from 'react';
import './room.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export function Room(props) {
    const userName = props.userName;
    const { roomID } = useParams();
    const [roomData, setRoomData] = React.useState({name: "Room not found"});
    const [opponentName, setOpponentName] = React.useState("badName");

    React.useEffect(() => {
        //REPLACE WITH DATABASE STUFF
        const usersRoomsText = localStorage.getItem('rooms');
        if (usersRoomsText) {
            //setRooms(JSON.parse(usersRoomsText))
            const rooms = JSON.parse(usersRoomsText);
            if(rooms.length) {
                for (const [i, room] of rooms.entries()) {
                    if(roomID == i) {
                        setRoomData(room);
                    }        
                }
            } else {
                setRoomData({name: "Room not found"})
            }
        }
    }, []);

    async function randomizeColor() {

    }

    return (
        <main className="container-fluid bg-secondary text-center room-page">
        <section className="room-title">
            <h3>Room ID: {roomID}</h3>
            <h3>Room Name: {roomData.name}</h3>
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
                <h1 className="scoreboard-title">Scoreboard</h1>
                <table className="scoreboard-info">
                    <tr>
                        <td><span className="player1">{roomData.player1}</span>:</td>
                        <td className="win-loss">Wins: 1</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="win-loss">Loses: 2</td>
                    </tr>
                    <tr>
                        <td><span className="player2">{roomData.player2}</span>:</td>
                        <td className="win-loss">Wins: 2</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="win-loss">Loses: 1</td>
                    </tr>
                </table>
                <div>
                <Button variant='dark' onClick={() => randomizeColor()}>
                    Randomize Color
                </Button>
                </div>
            </div>
        </section>
        </main>
    );
}