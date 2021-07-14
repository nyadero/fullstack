import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

function JobsByLocation({handleSelection, JobsByLocation}) {

  return (
    <>
      <FaLocationArrow className="icons" />
      <select name="location" id="" className='input-box' required onChange={handleSelection} onClick={JobsByLocation}>
        <option value="DEFAULT">Select a Location</option>
        <option value="nairobi">Nairobi</option>
        <option value="Kisumu">Kisumu</option>
        <option value="mombasa">Mombasa</option>
        <option value="nakuru">Nakuru</option>
        <option value="eldoret">Eldoret</option>
        <option value="machakos">Machakos</option>
        <option value="turkana">Turkana</option>
      </select>
    </>
  );
}

export default JobsByLocation;
