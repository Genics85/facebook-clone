import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import "./MessageSender.css"

function MessageSender() {
    const handleSubmit=(e)=>{
        e.preventDefault();


        setInput("");
        setImageUrl("");
    }

    const [input,setInput]= useState("");
    const [imageUrl,setImageUrl]= useState("");

   

  return <div className='messageSender'>
      <div className="messageSender__header">
          <Avatar/>
          <form action="">
              <input 
                className="messageSender__input" 
                placeholder='Whats on your mind?'
                value={input}
                onChange={ e=> setInput(e.target.value)}
              />
              <input 
                placeholder='image URL (optional)'
                value={imageUrl}
                onChange={e=> setImageUrl(e.target.value)}
              />
              <button 
                onClick={handleSubmit} 
                type="submit">Hidden button
              </button>
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
