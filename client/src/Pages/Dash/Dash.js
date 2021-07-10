import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Helpers/AuthContext';


function Dash() {
    const { authState} = useContext(AuthContext);
    return (
      <>
        <div className="user-details">
          <div className="details">
            <h2>
              {" "}
              {authState.firstname} {authState.lastname}
            </h2>
            <h3>{authState.email}</h3>
          </div>
          <div className="quick-action">
            <hr />
            <div className="buttons">
              <button className="logout-btn">
                Logout
              </button>
              <button className="dashboard-btn">
                <a>
                  <Link to="/account">My Account</Link>
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dash
