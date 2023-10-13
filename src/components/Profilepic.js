import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import PositionedMenu from "./PositionedMenu";
import Editpost from "./Editpost";

function Profilepic(props) {
  return (
    <div className="postinfo">
      <div className="story-border2">
        <img src={pic1}></img>
      </div>
      <div className="name-time">
        <div>
          <p>{props.name} </p>
        </div>
        <div className="pointbetween"></div>
        <div>
          <p style={{ color: "gray", marginTop: 17 }}>8h</p>
        </div>
      </div>
      <div className="more">
        {/* {console.log(props.postid)} */}
        {props.id === localStorage.getItem("id") && <PositionedMenu id={props.postid} />}
        
      </div>
    </div>
  );
}

export default Profilepic;
