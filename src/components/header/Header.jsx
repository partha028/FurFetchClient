import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo1.png';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="FurFetch Logo" className="logo-img" />
        </Link>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={32} color="#fff" /> : <Menu size={32} color="#fff" />}
      </div>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <ul>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/search" onClick={() => setMenuOpen(false)}>Search Pets</Link></li>
          <li><Link to="/pets" onClick={() => setMenuOpen(false)}>Pets</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li>
            {isLoggedIn ? (
              <Link to="/profile" className="nav-link" onClick={() => setMenuOpen(false)}>Profile</Link>
            ) : null}
          </li>
          <li className='auth'>
            <button className="auth-button-text" onClick={() => { setIsLoggedIn(!isLoggedIn); setMenuOpen(false); }}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            {!isLoggedIn && <button className="auth-button" onClick={() => { setIsLoggedIn(!isLoggedIn); setMenuOpen(false); }}>
              Signup
            </button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;