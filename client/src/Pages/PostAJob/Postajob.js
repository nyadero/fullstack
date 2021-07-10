import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Postajob.css';
import axios from 'axios';

function Postajob() {
  let history = useHistory();
  const [formData, setFormData] = useState([]);
  const [alert, setAlert] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // adding the post
  const submitPost = async () => {
    const response = await axios.post('/jobs', formData, {headers: {accessToken: localStorage.getItem("accessToken")}})
      .catch((err) => console.log(err));
    if (response && response.data) {
      setAlert(response.data);
      setFormData("");
      history.push('/');
    }
  };

  
    return (
      <div className="postjob-page">
        <h2>{ alert }</h2>
        <h1>Post a job</h1>
        <div className="form-body">
          <div className="form-control">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="job title..."
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="description">Job Description:</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="20"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="quick-form">
            <div className="flex-input">
              <div className="form-control">
                <label htmlFor="jobtype">Job Type:</label>
                <select name="type" id="" onChange={handleChange} required>
                  <option value="DEFAULT">
                    Select Job Type
                  </option>
                  <option value="contract">Contract</option>
                  <option value="parttime">Part-time</option>
                  <option value="fulltime">Full-time</option>
                  <option value="internship">Internship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="Category">Category:</label>
                <select name="category" id="" onChange={handleChange} required>
                  <option value="DEFAULT">
                    Select a Category
                  </option>
                  <option value="web design">web design and development</option>
                  <option value="app design">
                    mobile app design and development
                  </option>
                  <option value="graphic design">Graphic designer</option>
                  <option value="web design">web design and development</option>
                </select>
              </div>
            </div>
            <div className="flex-input">
              <div className="form-control">
                <label htmlFor="Qualification">Qualification:</label>
                <select
                  name="qualification"
                  id=""
                  onChange={handleChange}
                  required
                >
                  <option value="DEFAULT">
                    Select a Qualification
                  </option>
                  <option value="kcpe">KCPE</option>
                  <option value="kcse">KCSE</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="masters">Masters</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="Location">Location:</label>
                <select name="location" id="" onChange={handleChange} required>
                  <option value="DEFAULT">
                    Select a Location
                  </option>
                  <option value="nairobi">Nairobi</option>
                  <option value="Kisumu">Kisumu</option>
                  <option value="mombasa">Mombasa</option>
                  <option value="nakuru">Nakuru</option>
                  <option value="eldoret">Eldoret</option>
                  <option value="machakos">Machakos</option>
                  <option value="turkana">Turkana</option>
                </select>
              </div>
            </div>
            <div className="flex-input">
              <div className="form-control">
                <label htmlFor="Salary">Salary:</label>
                <input
                  type="text"
                  name='salary'
                  placeholder="KSH"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="Experience">Experience:</label>
                <input
                  type="text"
                  name='experience'
                  placeholder="Experience required..."
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="post-btn" onClick={submitPost}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}

export default Postajob
