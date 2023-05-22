

import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name} onClick={handleName}>
        {fullName}
      </h2>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <div>{children}</div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'Ogah Vincent',
  bio: 'No bio available',
  profession: 'Unknown',
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '20px',
  },
  name: {
    color: 'blue',
    cursor: 'pointer',
  },
  bio: {
    fontStyle: 'italic',
  },
  profession: {
    fontWeight: 'bold',
  },
};

export default Profile;