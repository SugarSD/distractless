import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
        <header>
            <div className="header-container">
                <h1><Link to="/" id="home">Distractless</Link></h1>
            </div>
        </header>
    )
}

export default Header;