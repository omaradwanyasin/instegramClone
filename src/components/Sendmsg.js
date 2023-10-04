import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Sendmsg(props) {
  return (
    <div className="newfollowercont">
      <div>
        <div className="story-border">
          <img src={pic1}></img>
        </div>
      </div>
      <div>
        <div>
          <p className="ptext">{props.name}</p>
        </div>
        <div>
          {props.value ? (
            <p className="ptext" style={{ color: "#969696" }}>
              {props.text}
            </p>
          ) : (
            <p className="ptext">{props.text}</p>
          )}
        </div>
      </div>
      <div className="addbtn">
        <h5>2s</h5>
      </div>
    </div>
  );
}

export default Sendmsg;
