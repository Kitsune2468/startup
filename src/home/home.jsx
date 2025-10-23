import React, { use } from 'react';

import './home.css';

export function Home() {
  const [usersRooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    const usersRoomsText = localStorage.getItem('userRooms');
    if (usersRoomsText) {
      setRooms(JSON.parse(usersRoomsText))
    }
  }, []);

  const roomsRows = [];
  if(usersRooms.length) {
    for (const [roomID, roomName, player1email, player2email] of usersRooms.entries()) {
      roomsRows.push(
        <tr key = {roomID}>
          <td>{roomID}</td>
          <td>{roomName}</td>
          <td>{player1email}, {player2email}</td>
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
        </div>
    </main>
  );
}