import React from 'react';

import { Button } from 'react-bootstrap';
import './createRoom.css';

export function CreateRoom(props) {
    const userName = props.userName;
    const [roomName, setRoomName] = React.useState('');
    const [otherPlayerEmail, setOtherPlayerEmail] = React.useState('');

    async function saveRoom() {
        const newRoom = {name: roomName, player1: userName, player2: otherPlayerEmail}

        updateRoomLocal(newRoom);
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