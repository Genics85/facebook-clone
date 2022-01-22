import { Avatar } from '@material-ui/core';
import React from 'react';
import "./story.css";

function Story({image, profileSrc, title}) {
  return <div className='Story' style={{ backgroundImage: `url(${image})`}}>
      <Avatar src={profileSrc} className='Story__Avatar'/>
      <h4>{title}</h4>

  </div>;
}

export default Story;
