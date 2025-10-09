import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center login-form">
        <h1 className="title">Welcome to Web-Tac-Toe!</h1>
        <form method="get" action="index.html" className="login-info">
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
            </div>
            <div className="input-group mb-3">
                <span span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <button type="submit" className="btn btn-primary login-button">Login</button>
            <button type="submit" className="btn btn-secondary create-button">Create</button>
        </form>
    </main>
  );
}