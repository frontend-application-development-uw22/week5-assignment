import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './NavBar.css';

const NavBar = ({ itemName }) => {
  const [open, setOpen] = useState(false);

  return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">Pokemon Collection</Link>
			<div onClick={()=>setOpen(!open)} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={()=>setOpen(false)}>Home</Link>
				</li>

				<li className="nav-item">
					<Link to="/favoritecharacter" className="nav-link" onClick={()=>setOpen(false)}>
						Favorite Characters
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={()=>setOpen(false)}>
						About
					</Link>
				</li>
			</ul>
		</nav>
  )
}

export default NavBar
