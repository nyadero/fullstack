import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import links from './data';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../../Helpers/AuthContext';

function Navbar() {
  let history = useHistory();
  const [showMenu, setshowMenu] = useState(false);
  const { authState, setAuthState } = useContext(AuthContext);
  
    const toggleMenu = () => {
        setshowMenu(!showMenu);
  };
  // logout user
  const logoutUser = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ status: false, firstname: "", id: 0 });
    history.push('/');
  };
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="myLogo">
            Fullstack
          </Link>
          <FaBars className="toggle-menu" onClick={toggleMenu} />
        </div>
        <div className={showMenu ? "mainbar" : "active"}>
          <div className="links">
            {links.map((link, index) => {
              const { title, path, cName } = link;
              return (
                <ul key={index}>
                  <li>
                    <Link to={path} className={cName} onClick={toggleMenu}>
                      {title}
                    </Link>
                  </li>
                </ul>
              );
            })}
            <div className="account">
              {!authState.status ? (
                <>
                  <button className="signup-btn" onClick={toggleMenu}>
                    <Link to="/signup" className="account-link">
                      Register
                    </Link>
                  </button>
                  <button className="login-btn" onClick={toggleMenu}>
                    <Link to="/login" className="account-link">
                      Login
                    </Link>
                  </button>
                </>
              ) : (
                <>
                  <Link to ='/account'>{authState.firstname}</Link>
                  <button onClick={logoutUser}>Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar
