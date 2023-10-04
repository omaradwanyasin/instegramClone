import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Profilepic() {
  return (
    <div className="postinfo">
      <div className="story-border2">
        <img src={pic1}></img>
      </div>
      <div className="name-time">
        <div>
          <p  >omar </p>
        </div>
        <div className="pointbetween"></div>
        <div>
          <p style={{color:"gray", marginTop:17}}>8h</p>
        </div>
      </div>
      <div className="more">
       <MoreHorizIcon/>
      </div>
    </div>
  );
}

export default Profilepic;
