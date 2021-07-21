import React from 'react';

export default function AuthNavbar() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <a className="nav-left" href="/">Fibro</a>
                <a className="nav-middle" href="/inventory">Inventory</a>
                <a className="nav-middle" href="/sales">Sales</a>
                <a className="nav-middle" href="/expenses">Expenses</a>
                <a className="nav-right" href="/dashboard">Dashboard</a>
            </div>
        </div>
    )
}