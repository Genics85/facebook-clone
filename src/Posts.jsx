import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubble, ExpandMore, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react';
import "./Posts.css"

function Posts({userName,image,profilePic,timeStamp,message}) {
  return <div className='post'>
      <div className="post__top">
        <Avatar 
        className="post__top--avatar"
        src={profilePic}
        />
        <div className='post__top--info'>
            <h3>{userName}</h3>
            <p>{new Date(timeStamp.toDate()).toUTCString()}</p>
        </div>
        
      </div>
      <div className="post__middle">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt=''/>
      </div>
    <div className="post__options">
        <div className="post__option">
             <ThumbUp/>
             Like
         </div>
         <div className="post__option">
             <ChatBubble/>
             Comment
         </div>
         <div className="post__option">
             <NearMe/>
             Share
         </div>
         <div className="post__option">
             <AccountCircle/>
             <ExpandMore/>
         </div>
      </div>
  </div>;
}

export default Posts;
