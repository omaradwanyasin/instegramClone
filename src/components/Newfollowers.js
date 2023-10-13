import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function Newfollowers() {
  const navigate = useNavigate();
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
        <Button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
          variant="text"
          size="small"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Newfollowers;
