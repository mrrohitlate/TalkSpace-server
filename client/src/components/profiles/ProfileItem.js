import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills,
	},
}) => {
	return (
		<div className='profile-card'>
		<img src={avatar} alt='' className='profile-image' />
		<div className='profile-info'>
		  <h2 className='profile-name'>{name}</h2>
		  <p className='profile-status'>
			{status} {company && <span> at {company}</span>}
		  </p>
		  <p className='profile-location'>{location && <span>{location}</span>}</p>
		  <Link to={`/profile/${_id}`} className='btn profile-btn'>
			View Profile
		  </Link>
		</div>
		<ul className='profile-skills'>
		  {skills.slice(0, 4).map((skill, index) => (
			<li key={index} className='profile-skill'>
			  <i className='fas fa-check' /> {skill}
			</li>
		  ))}
		</ul>
	  </div>
	  
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
