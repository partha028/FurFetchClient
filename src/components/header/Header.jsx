import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">FurFetch</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search Pets</Link></li>
          <li><Link to="/pets">Pets</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
          {isLoggedIn ? (
            <Link to="/profile" className="nav-link">Profile</Link>
          ) : null}
          </li>
          <li>
          <button className="auth-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

