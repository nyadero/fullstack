import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaGraduationCap, FaMapPin, FaRegUser, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import './Job.css';

function Job() {
    let { id, userName } = useParams();

    const [singleJob, setSingleJob] = useState({});

    // get job details
    const Job = async () => {
        const response = await axios.get(`/jobs/job/${id}`)
            .catch((err) => console.log(err));
        if (response && response.data) {
            setSingleJob(response.data);
            console.log(response.data);
        }
    };

    const relatedJobs = async () => {
        const response = axios.get(`/jobs/related/${userName}`)
            .catch((err) => console.log(err));
        if (response && response.data) {
            console.log(response.data);
        }
    };

    useEffect(() => {
        Job();
        relatedJobs();
    }, []);
    return (
      <>
        {/* job details */}
        <div className="header">
          <h1>{singleJob.job_title}</h1>
          <div className="properties">
            <div className="job-location">
              <FaMapPin />
              <h3> {singleJob.job_location} </h3>
            </div>
            <div className="job-type">
              <FaRegUser />
              <h3> {singleJob.job_type} </h3>
            </div>
            <div className="job-qualification">
              <FaGraduationCap />
              <h3> {singleJob.job_qualification} </h3>
            </div>
          </div>
        </div>
        <div className="job-details">
          <div className="job-description">
            <div>
              <p> {singleJob.job_description} </p>
            </div>
            <div className="footer">
              <button className="apply-button">Apply for this position</button>
              <div className="share">
                <h4>Share:</h4>
                <FaFacebook className="share-link" />
                <FaTwitter className="share-link" />
                <FaLinkedin className="share-link" />
                <FaWhatsapp className="share-link" />
                <FaInstagram className="share-link" />
              </div>
            </div>
          </div>
          {/* promoters details */}
          <div className="promoters-details">
            <h2>{singleJob.userName}</h2>
            <p> {singleJob.email} </p>
          </div>
        </div>
        {/* related jobs */}
        <div className="related">
          <h1> related jobs </h1>
        </div>
      </>
    );}

export default Job;
