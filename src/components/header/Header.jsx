import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo1.png';
import './Header.css';

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="logo">
      <Link to="/home">
        <img src={logo} alt="FurFetch Logo" className="logo-img" />
      </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/home">Home</Link></li>
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
          <li className='auth'>
          <button className="auth-button-text" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
          {!isLoggedIn && <button className="auth-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Signup
          </button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

