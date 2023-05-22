import './App.css';

import React from 'react';
import Profile from './Profile/Profile';
import profileImage from './Profile-image.jpg';

const App = () => {
  const handleName = (fullName) => {
    alert(`Hello from ${fullName}!`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Ogah Vincent"
        bio="A passionate developer"
        profession="Software Engineer"
        handleName={() => handleName("ogah Vincent")} // Pass the handleName function as a prop
      >
        <img src={profileImage} alt="Profile" style={styles.image} />
</Profile>
    </div>
  );
};

const styles = {
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '20px auto',
  },
};

export default App;
