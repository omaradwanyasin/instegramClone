import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import { Button } from "@mui/material";


function Newfollowers() {
  return (
    <div className="newfollowercont">
      <div>
        <div className="story-border">
          <img src={pic1}></img>
        </div>
      </div>
      <div>
        <div>
          <p className="ptext">omaradwan</p>
        </div>
        <div>
          <p className="ptext" style={{ color: "#969696" }}>
            Omar Yasin
          </p>
        </div>
      </div>
      <div className="addbtn">
        <Button variant="text" size="small">
          switch
        </Button>
      </div>
    </div>
  );
}

export default Newfollowers;
