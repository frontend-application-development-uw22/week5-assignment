import React from 'react';
import {Link} from 'react-router-dom'

export default function NavigationBar() {
    return (
        <nav className='top-nav-bar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='#'>Blank</Link></li>
                <li><Link to='#'>Blank</Link></li>
                <li><Link to='#'>Blank</Link></li>
            </ul>
        </nav>
    );
}