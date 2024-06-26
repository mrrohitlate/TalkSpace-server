import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
	profile: {
		status,
		company,
		location,
		website,
		social,
		user: { name, avatar },
	},
}) => {
	return (
		<div className='profile-top bg-heading p-1'>
			<img className='round-img my-1' src={avatar} alt='' />
			<h1 className='large'>{name}</h1>
			<p className='lead'>
				{status} {company && <span> at {company}</span>}
			</p>
			<p>{location && <span>{location}</span>}</p>
			<div className='icons my-1'>
				{website && (
					<a href={website} target='_blank' rel='noopener noreferrer'>
						{" "}
						<i className='fas fa-globe fa-2x' />
					</a>
				)}
				{social &&
					Object.entries(social)
						.filter(([_, value]) => value)
						.map(([key, value]) => (
							<a
								key={key}
								href={value}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i className={`fab fa-${key} fa-2x`} />
							</a>
						))}
			</div>
		</div>
	);
};

ProfileTop.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileTop;
