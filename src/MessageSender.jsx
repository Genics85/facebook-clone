import { Avatar, Button } from '@material-ui/core';
import { EmojiEmotions, InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React from 'react';
import "./MessageSender.css"

function MessageSender() {
  return <div className='messageSender'>
      <div className="messageSender__header">
          <Avatar/>
          <form action="">
              <input className="messageSender__input" type="text" placeholder='Whats on your mind?'/>
              <input placeholder='image URL (optional)'/>
              <button>Hidden button</button>
          </form>
      </div>
      <div className="messageSender__bottom">
          <div className="messageSender__bottom--option">
          <Videocam style={{color:'red'}}/>
          <h5>Live Video</h5>
          </div>
          <div className="messageSender__bottom--option">
          <PhotoLibrary style={{color:'green'}}/>
          <h5>photos/videos</h5>
          </div>
          <div className="messageSender__bottom--option">
          <InsertEmoticon style={{color:"orange"}}/>
          <h5>Feeling/Activity</h5>
          </div>
          
      </div>
  </div>;
}

export default MessageSender;
