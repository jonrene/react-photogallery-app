// preprocessor directives
// imports react library and photo component
import React from 'react';
import Photo from './Photo';
import Modal from './Modal';

// Application Home component
const Home = (props) =>{
  return (
    <div className="photo-container">
      <ul>
          {/* renders passed in photos prop to screen */}
          {props.photos.map(photo =><Photo server={photo.server} id={photo.id} key={photo.id} secret={photo.secret}/>)}
      </ul>
      <Modal></Modal>
    </div>
  );
  
}

export default Home;