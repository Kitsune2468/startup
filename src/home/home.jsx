import React, { use } from 'react';

import './home.css';
import { Button } from 'react-bootstrap';
import { CreateRoom } from './createRoom'

export function Home(props) {
  const userName = props.userName;
  const [usersRooms, setRooms] = React.useState([]);
  const [createRoom, setCreateRoom] = React.useState(false);

  React.useEffect(() => {
    const usersRoomsText = localStorage.getItem('rooms');
    if (usersRoomsText) {
      setRooms(JSON.parse(usersRoomsText))
    }
  }, []);

  const roomsRows = [];
  if(usersRooms.length) {
    for (const [i, room] of usersRooms.entries()) {
      roomsRows.push(
        <tr key = {i}>
          <td>{i}</td>
          <td>{room.name}</td>
          <td>{room.player1}, {room.player2}</td>
        </tr>
      )
    }
    
  } else {
    roomsRows.push(
      <tr key='0'>
        <td colSpan='3'>You have no rooms!</td>
      </tr>
    )
  }

  const toggleCreateRoom = () => {
    if(createRoom) {
      setCreateRoom(false);
    } else {
      setCreateRoom(true);
    }
  }


  return (
    <main className="container-fluid bg-secondary text-center">
        <div className="home-page">
          <h1 className="title">Your Rooms</h1>
          <table className='table table-info table-striped-columns'>
            <thead className='table-dark'>
              <tr>
                <th>Room ID</th>
                <th>Room Name</th>
                <th>Players</th>
              </tr>
            </thead>
            <tbody id='rooms'>{roomsRows}</tbody>
          </table>
          {createRoom === true && (
            <CreateRoom
              userName = {userName}
              />
          )}
          {createRoom === false && (
            <Button variant='primary' onClick={toggleCreateRoom}>
              Create Room
            </Button>
          )}
        </div>
    </main>
  );
}