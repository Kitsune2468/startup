import React from 'react';

import { Button } from 'react-bootstrap';
import './createRoom.css';

export function CreateRoom(props) {
    const userName = props.userName;
    const [roomName, setRoomName] = React.useState('');
    const [otherPlayerEmail, setOtherPlayerEmail] = React.useState('');
    const defaultPlayer1Turn = true;
    const defaultBoardInfo = [0,0,0,0,0,0,0,0,0];

    async function saveRoom() {
        const newRoom = {name: roomName, 
                        player1: userName, 
                        player2: otherPlayerEmail, 
                        player1Turn: defaultPlayer1Turn, 
                        boardInfo: defaultBoardInfo}

        updateRoomLocal(newRoom);
        updatePlayersLocal(userName, otherPlayerEmail)
    }

    function updateRoomLocal(newRoom) {
        let rooms = [];
        const roomsText = localStorage.getItem('rooms');
        if (roomsText) {
            rooms = JSON.parse(roomsText);
        }

        rooms.push(newRoom);

        localStorage.setItem('rooms', JSON.stringify(rooms));
    }

    function updatePlayersLocal(player1Name, player2Name) {
        let player1Found = false;
        let player2Found = false;
        let defaultColor = "rgb(200, 200, 200)";
        let players = [];
        const playersText = localStorage.getItem('players');
        if (playersText) {
            players = JSON.parse(playersText);
        }
        for (const [i, player] of players.entries()) {
            if(player1Name === player.name) {
                player1Found = true;
            }
            if(player2Name === player.name) {
                player2Found = true;
            }
        }

        if(!player1Found) {
            players.push({name: player1Name, color: defaultColor})
        }
        if(!player2Found) {
            players.push({name: player2Name, color: defaultColor})
        }

        localStorage.setItem('players', JSON.stringify(players));
    }

    return (
        <div>
            <h2>New Room:</h2>
            <div className='input-group mb-3'>
                <span className='input-group-text'>Room Name:</span>
                <input className='form-control' type='text' value={roomName} onChange={(e) => setRoomName(e.target.value)} placeholder='Room Name' />
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text'>Email of other player:</span>
                <input className='form-control' type='text' value={otherPlayerEmail} onChange={(e) => setOtherPlayerEmail(e.target.value)} placeholder='otherPlayer@email.com' />
            </div>
            <Button variant='secondary' onClick={() => saveRoom()} disabled={!roomName || !otherPlayerEmail}>
                Create
            </Button>
        </div>
    );
}
/*
    
*/