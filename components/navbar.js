import React from 'react';

export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <a className="nav-left" href="/">Electron</a>
                <a className="nav-middle" href="/">Home</a>
                <a className="nav-middle" href="/features">Features</a>
                <a className="nav-middle" href="/about">About</a>
                <a className="nav-middle" href="/faq">FAQ</a>
                <a className="nav-right" href="/dashboard">Dashboard</a>
            </div>
        </div>
    )
}