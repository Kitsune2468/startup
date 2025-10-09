import React from 'react';
import './home.css';

export function Home() {
  return (
    <main className="container-fluid bg-secondary text-center">
        <div>
          <h2>Your Rooms</h2>
          <h3>(This section will show only when logged in.)</h3>
          <ul>
            <li><a href="room.html">PLACEHOLDER Room 1</a></li>
            <li><a href="room.html">PLACEHOLDER Room 2</a></li>
          </ul>
        </div>
    </main>
  );
}