
import './menu.css'

import React from "react";
import { Link } from 'react-router-dom';

export default props => (
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

