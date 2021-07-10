import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./jobs.css";
import { FaSearch, FaUser, FaMap, FaGraduationCap } from "react-icons/fa";
import axios from 'axios';
import LocationFilter from './JobsByLocation';

function Jobs() {
    let history = useHistory();
  const[alljobs, setAllJobs] = useState([]);
  const [locations, setLocations] = useState([]);

  // get all jobs
  const getAllJobs = async () => {
    const response = await axios.get("/jobs").catch((err) => console.log(err));
    if (response && response.data) {
        setAllJobs(response.data);
        setLocations(response.data);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      <div className="header">
        <h2 className="header-title">
          The <span> #1 </span> job board for Kenyan experts
        </h2>
      </div>
      <div className="searchbar">
        <div className="searchbox">
          <FaSearch className="icons" />
          <input
            type="search"
            name="search"
            placeholder="Title, Company or Keyword"
            className="input-box"
          />
          <button className="search-btn">Search</button>
              </div>
              
              <div className="searchbox">
          <LocationFilter setAllJobs={ setAllJobs } alljobs={ alljobs } locations={ locations } setLocations={ setLocations}/>
              </div>
              
        <div className="searchbox">
          <FaUser className="icons" />
          <select name="category" id="" className="input-box">
            <option value="DEFAULT">Select a Category</option>
            <option value="web design">web design and development</option>
            <option value="app design">
              mobile app design and development
            </option>
            <option value="graphic design">Graphic designer</option>
            <option value="web design">web design and development</option>
          </select>
        </div>
      </div>

      {/* jobs */}
      <div className="job-board">
        <div className="sidebar">
          <div className="jobtype">
            <h2> Job Type </h2>
            <div className="category">
              <input type="checkbox" name="internship" id="" />
              <h3>Internship</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="fulltime" id="" />
              <h3>Full-time</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="parttime" id="" />
              <h3>Part-time</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="contract" id="" />
              <h3>Contract</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="other" id="" />
              <h3>Other</h3>
            </div>
          </div>
          <hr />
          <div className="jobtype">
            <h2> Job Qualification </h2>
            <div className="category">
              <input type="checkbox" name="kcpe" id="" />
              <h3>KCPE</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="kcse" id="" />
              <h3>KCSE</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="certificate" id="" />
              <h3>Certificate</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="diploma" id="" />
              <h3>Diploma</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="bachelor" id="" />
              <h3>Bachelor</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="masters" id="" />
              <h3>Masters</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="doctorate" id="" />
              <h3>Doctorate</h3>
            </div>
            <div className="category">
              <input type="checkbox" name="other" id="" />
              <h3>Other</h3>
            </div>
          </div>
        </div>
        <div className="main-board">
          {alljobs.map((job) => {
            const {
              id,
              job_title,
              job_description,
              job_type,
              job_qualification,
              job_location,
              userName,
            } = job;
            return (
              <div
                className="job"
                key={id}
                onClick={() => {
                  history.push(`/job/${id}`);
                }}
              >
                <div className="job-intro">
                  <div className="promoter">
                    <h2> {userName} </h2>
                  </div>
                  <div className="type">
                    <h3> {job_type} </h3>
                  </div>
                </div>
                <div className="main">
                  <div className="title">
                    <h2> {job_title} </h2>
                  </div>
                  <div className="description">
                    <p> {job_description} </p>
                  </div>
                </div>
                <div className="footer">
                  <div className="footer-intro">
                    <div className="location">
                      <FaMap className="icon" />
                      <h3>{job_location} </h3>
                    </div>
                    <div className="qualification">
                      <FaGraduationCap className="icon" />
                      <h3> {job_qualification} </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Jobs;
