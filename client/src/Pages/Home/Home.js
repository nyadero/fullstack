import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaMap } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

function Home() {
  let history = useHistory();
  const [availableJobs, setAvailableJobs] = useState([]);
  const getAllJobs = async () => {
    const response = await axios.get('/jobs')
      .catch((err) => console.log(err));
    if (response && response.data) {
      setAvailableJobs(response.data);
      console.log(response.data);
    }
  };
  useEffect(() => {
    getAllJobs();
  },[]);

    return (
      <>
        <div className="intro">
          <h1>Homepage</h1>
          <p>
            A fullstack app made with react, node, mysql, express, sequelize etc
          </p>
        </div>
        <div className="jobs">
          <div className="jobs-intro">
            <h3> available jobs</h3>
            <h3>No of categories</h3>
          </div>
          <div className="main-jobs-section">
            { availableJobs.slice(0,5).map((job) => {
              const { id, job_title, job_description, job_type, job_qualification, job_location, userName} = job;
              return (
                <div className="job" key={id} onClick={() => {history.push(`/job/${id}`)}}>
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
                        <FaMap className='icon'/>
                        <h3>{job_location} </h3>
                      </div>
                      <div className="qualification">
                        <FaGraduationCap className='icon'/>
                        <h3> {job_qualification} </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="jobs-link">
            <h3>
              <Link to="/jobs" className='job-link'>see all jobs</Link>
            </h3>
            <h3>
              <Link to="/postjob" className='job-link'>post a job</Link>
            </h3>
          </div>
        </div>
      </>
    );     
}

export default Home
