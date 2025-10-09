import React from 'react';
import './home.css';

export function Home() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <div className="home-page">
          <h1 className="title">Your Rooms</h1>
          <h3 className="subtitle">(This section will show only when logged in.)</h3>
          <ul className="link-list">
            <li className='room'><a href="room.html" className="room-link">PLACEHOLDER Room 1</a></li>
            <li className='room'><a href="room.html" className="room-link">PLACEHOLDER Room 2</a></li>
          </ul>
        </div>
    </main>
  );
}