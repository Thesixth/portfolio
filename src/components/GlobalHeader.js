import React from 'react'
import { Link } from 'react-router-dom';
import emmanuel from '../images/emmanuel-pali.png';
import '../styles/GlobalHeader.css';

const GlobalHeader = () => {
    return (
        <div>
        <header className="globaHeader">
            <nav>
                <ul id="container">
                    <li>
                        <Link to="/" className="logoContent">
                        <img className="logo" src={emmanuel} alt="Emmanuel's logo"></img>
                        </Link>
                    </li>
                    <li className="disappear">
                        Emmanuel Pali
                    </li>
                    <li>
                        <Link to="/about" className="logoContent">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default GlobalHeader


/*<div className="alignLeft">
                <Link to="/" className="logoContent">
                    <img className="logo" src={emmanuel} alt=""></img>
                </Link>
            </div>
            <div className="alignRight">
                <Link to="/about" className="logoContent"><button>About</button></Link>
            </div>
            */