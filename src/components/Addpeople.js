import React from "react";
import pic1 from "../assets/StoriesAvatars/saleswoman.png";
import pic2 from "../assets/StoriesAvatars/graduated-student.png";
import { Button } from "@mui/material";
import { useState } from "react";

function Addpeople(props) {
  const [clicked, setclick] = useState(false);

  return (
    <div className="newfollowercont">
      <div>
        <div className="story-border">
          <img src={props.pic == 2 ? pic1 : pic2}></img>
        </div>
      </div>
      <div>
        <div>
          <p className="ptext">{props.name}</p>
        </div>
        <div>
          <p className="ptext" style={{ color: "#969696" }}>
            {props.text}
          </p>
        </div>
      </div>
      <div className="addbtn">
        <Button
          onClick={() => {
            setclick(!clicked);
          }}
          variant="text"
          size="small"
        >
          {clicked ? "Requsted" : "Follow"}
        </Button>
      </div>
    </div>
  );
}

export default Addpeople;
