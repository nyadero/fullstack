import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

function JobsByLocation({ locations, setAllJobs, alljobs }) {
  // filter jobs by location
  const filterByLocation = (job_location) => {
    if (job_location === "all locations") {
      setAllJobs(alljobs);
      return;
    }
    const jobsByLocation = alljobs.filter(
      (jobByLocation) => jobByLocation.job_location === job_location
    );
    setAllJobs(jobsByLocation);
  };

  return (
    <>
      <FaLocationArrow className="icons" />
      <>
        <select
          name="location"
          className="input-box"
          onChange={() => filterByLocation("eldoret")}
        >
          <option value="DEFAULT">Select a Location</option>
          
                <option name="location" value="eldoret">
                  Eldoret
                </option>
         
        </select>
      </>
    </>
  );
}

export default JobsByLocation;
