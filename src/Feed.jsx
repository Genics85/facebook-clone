import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReels from './StoryReels';

function Feed() {
  return <div className='feed'>
      <StoryReels/>
      <MessageSender/>
  </div>;
}

export default Feed;
