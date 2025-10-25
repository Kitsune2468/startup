import React from 'react';
import './room.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export function Room(props) {
    const userName = props.userName;
    const { roomID } = useParams();
    const defaultBoardInfo = [0,0,0,0,0,0,0,0,0];
    const [roomData, setRoomData] = React.useState({name: "Room not found"});
    const [opponentName, setOpponentName] = React.useState("badName");
    const [player1Color, setPlayer1Color] = React.useState("rgb(200,200,200)");
    const [player2Color, setPlayer2Color] = React.useState("rgb(200,200,200)");
    const [isUsersTurn, setIsUsersTurn] = React.useState("false");

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
                setRoomData({name: "Room not found"});
            }
            if(userName === roomData.player1) {
                if(roomData.player1Turn) {
                    setIsUsersTurn(true);
                }
                setOpponentName(roomData.player2);
            } else {
                if(!roomData.player1Turn) {
                    setIsUsersTurn(true);
                }
                setOpponentName(roomData.player1);
            }
            const playersText = localStorage.getItem('players');
            if (playersText) {
                //setRooms(JSON.parse(usersRoomsText))
                const players = JSON.parse(playersText);
                if(players.length) {
                    for (const [i, player] of players.entries()) {
                        if(player.name === userName) {
                            if(userName === roomData.player1) {
                                setPlayer1Color(player.color);
                            } else {
                                setPlayer2Color(player.color);
                            }
                        }
                        if(player.name === opponentName) {
                            if(opponentName === roomData.player1) {
                                setPlayer1Color(player.color);
                            } else {
                                setPlayer2Color(player.color);
                            }
                        }
                    }
                }
            }
        }
    }, []);

    async function randomizeColor() {
        //REPLACE WITH API CALL
        newColor = localColorRandomizer();
        if(userName === roomData.player1) {
            setPlayer1Color(newColor);
        } else {
            setPlayer2Color(newColor);
        }
        setLocalPlayerColor(newColor);
    }

    function localColorRandomizer() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r}, ${g}, ${b})`;
    }

    async function setLocalPlayerColor(newColor) {
        let players = [];
        const playersText = localStorage.getItem('players');
        if (playersText) {
            //setRooms(JSON.parse(usersRoomsText))
            players = JSON.parse(playersText);
            if(players.length) {
                for (const [i, player] of players.entries()) {
                    if(player.name === userName) {
                        players.splice(i, 0, {name: player.name, color: newColor});
                        break;
                    }
                }
            }
            localStorage.setItem('players', JSON.stringify(players));
        }
    }

    async function makeMove(slotID) {

        board = roomData.boardInfo;
        if(userName === roomData.player1) {
            board[i] = 1;
        } else {
            board[i] = 2;
        }


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
                        {isUsersTurn && (
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
                        )}
                        {!isUsersTurn && (
                            <table className="board-grid">
                                <tr>
                                    <td><p className="board-button">1</p></td>
                                    <td><p className="board-button">2</p></td>
                                    <td><p className="board-button">3</p></td>
                                </tr>
                                <tr>
                                    <td><p className="board-button">4</p></td>
                                    <td><p className="board-button">5</p></td>
                                    <td><p className="board-button">6</p></td>
                                </tr>
                                <tr>
                                    <td><p className="board-button">7</p></td>
                                    <td><p className="board-button">8</p></td>
                                    <td><p className="board-button">9</p></td>
                                </tr>
                            </table>
                        )}
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
                        <td><span className="player1" style={{color:player1Color}}>X - {roomData.player1}</span>:</td>
                        <td className="win-loss">Wins: 1</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="win-loss">Loses: 2</td>
                    </tr>
                    <tr>
                        <td><span className="player2" style={{color:player2Color}}>O - {roomData.player2}</span>:</td>
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