import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Room } from './room/room';
import { Home } from './home/home';


export default function App() {
  return (
    <BrowserRouter>
        <div className="body bg-dark text-light">
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-dark">
                    <NavLink className='nav-link navbar-brand' to="">Web-Tac-Toe</NavLink>
                    <menu className="nav-menu">
                        <li className="nav-item">
                            <NavLink className='nav-link' to="">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="room">Room</NavLink>
                        </li>
                        <li className="nav-item">
                            TestUser
                        </li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/home' element={<Home />} />
                <Route path='/room' element={<Room />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="bg-dark text-white-50">
                <span className="text-reset">Author: Mason Fronce</span>
                <a className="text-reset" href="https://github.com/Kitsune2468/startup">GitHub</a>
                <a className="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}