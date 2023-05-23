// imports react
import React from 'react';

// Component used to show a photo
const Photo = (props) =>{

  function imgClick(){
    console.log("hello");
    document.getElementById('modal-image').src = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
    document.getElementById('modal-container').style.display = 'block';
  }
  
  return (
      <li>
          <img onClick={imgClick} src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
      </li>
  );
}

export default Photo;
