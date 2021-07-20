import React from 'react';

export default function Navbar() {
    return (
        <div className="header">
            <div className="header-menu">
                <a className="menu-link" href="/">Home</a>
                <a className="menu-link" href="/features">Features</a>
                <a className="menu-link" href="/about">About</a>
                <a className="menu-link" href="/faq">FAQ</a>
            </div>
        </div>
    )
}