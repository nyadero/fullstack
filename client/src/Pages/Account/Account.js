import React, { useContext, useState } from "react";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Helpers/AuthContext";
import { useHistory } from "react-router";
import "./Account.css";
import axios from 'axios';

function Account() {
  let history = useHistory();
  const { authState, setAuthState } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState();
  const [isFileSelected, setIsSelectedFile] = useState(false);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsSelectedFile(true);
  };

  // logout user
  const Logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      status: false,
      firstname: "",
      id: 0,
      email: "",
      lastname: "",
    });
    history.push("/");
  };

  // update user
  const handleSubmission = async () => {
    const response = await axios.post('/users', selectedFile)
      .catch((err) => console.log(err));
    if (response && response.data) {
      console.log(response.data);
      setSelectedFile(response.data);
    }
  };
  return (
    <>
      <div className="myAccount">
        <div className="user-details">
          <div className="details">
            <h2>
              {authState.firstname} {authState.lastname}
            </h2>
            <h3>{authState.email}</h3>
          </div>
          <div className="quick-action">
            <hr />
            <div className="buttons">
              <button className="logout-btn" onClick={Logout}>
                Logout
              </button>
              <button className="dashboard-btn">
                <a>
                  <Link to="/dash">My Portal</Link>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="update-account">
          <div className="account-logo">
            <h2>Logo/avatar/jpg/png</h2>
            <div className="mylogo">
              {isFileSelected ? (
                <p>{selectedFile.name}</p>
              ) : (
                <input
                  type="file"
                  name="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleChange}
                />
              )}
              <button type='submit' onClick={handleSubmission}>Change profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
