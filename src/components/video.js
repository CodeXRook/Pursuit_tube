import React from 'react';

//NOT SURE IF THE CAPITAL ON VIDEO IS CORRECT
const VideoPlayer =(props) =>{
const {id, title, channel, posted, thumbnail} = props.Video
const link =`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://localhost:3000`;

return(

    <div className= 'col-3'>
    
    <img src={thumbnail}alt=''></img>
    {title}
    {channel}
    {posted}

    
    </div>
  );
}

export default VideoPlayer;