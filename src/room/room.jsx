import React from 'react';
import './room.css';
import { Button, Fade } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export function Room(props) {
    const userName = props.userName;
    const { roomID } = useParams();
    const defaultBoardInfo = [0,0,0,0,0,0,0,0,0];
    const [roomData, setRoomData] = React.useState({name: "Room not found"});
    const [boardData, setBoardData] = React.useState(defaultBoardInfo);
    const [opponentName, setOpponentName] = React.useState("badName");
    const [player1Color, setPlayer1Color] = React.useState("rgb(100, 100, 100)");
    const [player2Color, setPlayer2Color] = React.useState("rgb(100, 100, 100)");
    const [isUsersTurn, setIsUsersTurn] = React.useState(false);

    React.useEffect(() => {
        //REPLACE WITH DATABASE STUFF
        const usersRoomsText = localStorage.getItem('rooms');
        let tempPlayer1 = "%%%";
        let tempOpponentName = "&&&";
        if (usersRoomsText) {
            //setRooms(JSON.parse(usersRoomsText))
            const rooms = JSON.parse(usersRoomsText);
            if(rooms.length) {
                for (const [i, room] of rooms.entries()) {
                    if(roomID == i) {
                        tempPlayer1 = room.player1;
                        setRoomData(room);
                        setBoardData(room.boardInfo);
                        if(userName == room.player1) {
                            if(room.player1Turn) {
                                setIsUsersTurn(true);
                            }
                            tempOpponentName = room.player2;
                            setOpponentName(room.player2);
                        } else {
                            if(!roomData.player1Turn) {
                                setIsUsersTurn(true);
                            }
                            tempOpponentName = room.player1;
                            setOpponentName(room.player1);
                        }
                    }        
                }
            } else {
                setRoomData({name: "Room not found"});
            }

            
            const playersText = localStorage.getItem('players');
            if (playersText) {
                //setRooms(JSON.parse(usersRoomsText))
                const players = JSON.parse(playersText);
                if(players.length) {
                    for (const [i, player] of players.entries()) {
                        if(player.name === userName) {
                            if(userName === tempPlayer1) {
                                setPlayer1Color(player.color);
                            } else {
                                setPlayer2Color(player.color);
                            }
                        }
                        if(player.name === tempOpponentName) {
                            if(tempOpponentName === tempPlayer1) {
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
        let newColor = localColorRandomizer();
        setPlayer1Color(newColor);
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
                    if(player.name == userName) {
                        players.splice(i, 1, {name: player.name, color: newColor});
                        break;
                    }
                }
            }
            localStorage.setItem('players', JSON.stringify(players));
        }
    }

    async function makeMove(slotID) {
        const board = roomData.boardInfo;
        if(userName === roomData.player1) {
            board[slotID] = 1;
        } else {
            board[slotID] = 2;
        }

        const tempRoomData = {name: roomData.name, 
                        player1: roomData.player1, 
                        player1Wins: roomData.player1Wins,
                        player2: roomData.player2, 
                        player2Wins: roomData.player2Wins,
                        player1Turn: !roomData.player1Turn, 
                        boardInfo: board}

        let rooms = [];
        const roomsText = localStorage.getItem('rooms');
        if (roomsText) {
            rooms = JSON.parse(roomsText);
        }
        if(rooms.length > 0) {
            for (const [i, room] of rooms.entries()) {
                if(parseInt(roomID) === i) {
                    setRoomData(tempRoomData);
                    rooms.splice(i, 1, tempRoomData);
                    setIsUsersTurn(!roomData.player1Turn);
                    break;
                }
            }
        }

        localStorage.setItem('rooms', JSON.stringify(rooms));
    }

    function resetBoard() {
        const tempRoomData = {name: roomData.name, 
                        player1: roomData.player1, 
                        player1Wins: roomData.player1Wins,
                        player2: roomData.player2, 
                        player2Wins: roomData.player2Wins,
                        player1Turn: true, 
                        boardInfo: defaultBoardInfo}

        let rooms = [];
        const roomsText = localStorage.getItem('rooms');
        if (roomsText) {
            rooms = JSON.parse(roomsText);
        }
        if(rooms.length > 0) {
            for (const [i, room] of rooms.entries()) {
                if(parseInt(roomID) === i) {
                    setRoomData(tempRoomData);
                    rooms.splice(i, 1, tempRoomData);
                    setIsUsersTurn(true);
                    break;
                }
            }
        }

        localStorage.setItem('rooms', JSON.stringify(rooms));
    }

    return (
        <main className="container-fluid bg-secondary text-center room-page">
        <section className="room-title">
            <h3 className="room-name">Room: {roomData.name}</h3>
        </section>
        <section className="body-section">
            <div className="game"> 
                <form method="get" action="room.html">
                    <div className="board">
                        <table className="board-grid">
                            <tr>
                                <td>
                                    {boardData[0] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(0)}>
                                            1
                                        </Button>
                                    )}
                                    {boardData[0] === 0 && isUsersTurn === false &&(
                                        <p className="board-tile-text">1</p>
                                    )}
                                    {boardData[0] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[0] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[1] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(1)}>
                                            2
                                        </Button>
                                    )}
                                    {boardData[1] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">2</p>
                                    )}
                                    {boardData[1] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[1] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[2] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(2)}>
                                            3
                                        </Button>
                                    )}
                                    {boardData[2] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">3</p>
                                    )}
                                    {boardData[2] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[2] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {boardData[3] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(3)}>
                                            4
                                        </Button>
                                    )}
                                    {boardData[3] === 0 && isUsersTurn === false &&(
                                        <p className="board-tile-text">4</p>
                                    )}
                                    {boardData[3] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[3] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[4] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(4)}>
                                            5
                                        </Button>
                                    )}
                                    {boardData[4] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">5</p>
                                    )}
                                    {boardData[4] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[4] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[5] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(5)}>
                                            6
                                        </Button>
                                    )}
                                    {boardData[5] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">6</p>
                                    )}
                                    {boardData[5] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[5] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {boardData[6] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(6)}>
                                            7
                                        </Button>
                                    )}
                                    {boardData[6] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">7</p>
                                    )}
                                    {boardData[6] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[6] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[7] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(7)}>
                                            8
                                        </Button>
                                    )}
                                    {boardData[7] === 0 && !isUsersTurn === true &&(
                                        <p className="board-tile-text">8</p>
                                    )}
                                    {boardData[7] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[7] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                                <td>
                                    {boardData[8] === 0 && isUsersTurn === true && (
                                        <Button variant='secondary board-button' size='lg' onClick={() => makeMove(8)}>
                                            9
                                        </Button>
                                    )}
                                    {boardData[8] === 0 && (!isUsersTurn === true) &&(
                                        <p className="board-tile-text">9</p>
                                    )}
                                    {boardData[8] === 1 && (
                                        <p className="board-tile-text" style={{color:player1Color}}>X</p>
                                    )}
                                    {boardData[8] === 2 && (
                                        <p className="board-tile-text">O</p>
                                    )}
                                </td>
                            </tr>
                        </table>
                        <div>
                            {isUsersTurn === true && (
                                <p>Your turn!</p>
                            )}
                            {!isUsersTurn === true && (
                                <p>Not your turn.</p>
                            )}
                        </div>
                    </div>
                </form>
            </div>
            <div className="scoreboard"> 
                <h1 className="scoreboard-title">Scoreboard</h1>
                <table className="scoreboard-info">
                    <tr>
                        <td><span className="player1" style={{color:player1Color}}>X - {roomData.player1}</span>:</td>
                        <td className="win-loss">{roomData.player1Wins}</td>
                    </tr>
                    <tr>
                        <td><span className="player2" style={{color:player2Color}}>O - {roomData.player2}</span>:</td>
                        <td className="win-loss">{roomData.player2Wins}</td>
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