import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Helpers/AuthContext';
import { useHistory } from 'react-router-dom';
import "./Login.css";
import axios from "axios";

function Login() {
  let history = useHistory();
  const { setAuthState } = useContext(AuthContext);
  const [formdata, setFormData] = useState([]);
  // handleChange
  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
    
    // login
    const Login = async () => {
        const response = await axios.post('/users/login', formdata )
            .catch((err) => console.log(err));
        if (response && response.data.error) {
          alert(response.data);
      }
      if (response && response.data) {
          localStorage.setItem("accessToken", response.data.token);
          alert("logged in succesfcully");
          setAuthState({
            status: true,
            firstname: response.data.firstname,
            id: response.data.id,
          });
          history.push('/');
        }
    };

    return (
      <div className="register-page">
        <form>
          <div className="form-control">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              placeholder="email@xyz.com"
              name="email"
              onChange={ handleChange }
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password..."
              name="password"
              onChange={ handleChange }
              required
            />
          </div>
          <button type="button" className="submit-btn" onClick={Login}>
            Login
          </button>
        </form>
      </div>
    );
}

export default Login
