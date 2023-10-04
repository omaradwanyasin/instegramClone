import React from "react";
import pic1 from "../assets/StoriesAvatars/graduated-student.png";
import line from "../assets/Ellipse 5.png";
import pic2 from "../assets/StoriesAvatars/driver.png";
import pic3 from "../assets/StoriesAvatars/farmer-avatar.png";
import pic4 from "../assets/StoriesAvatars/female-chef.png";
import pic5 from "../assets/StoriesAvatars/flight-attendant.png";
import pic6 from "../assets/StoriesAvatars/saleswoman.png";
import { useState } from "react";
import BasicModal from "./BasicModal";
function Story() {
  const [clickonstory, setclick] = useState(false);
  return (
    <div className="container">
      {clickonstory && <BasicModal value={true} />}
      <div className="storycont">
        <div className="story">
          <div
            onClick={() => {
              setclick(!clickonstory);
            }}
            className="story-border"
          >
            <img src={pic1}></img>
          </div>
          <p className="ptext">omar</p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic2}></img>
          </div>
          <p style={{ marginBottom: 10 }} className="ptext">
            ibrahim
          </p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic3}></img>
          </div>
          <p className="ptext">zayn</p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic4}></img>
          </div>
          <p className="ptext">nada</p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic5}></img>
          </div>
          <p className="ptext">ahmad</p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic6}></img>
          </div>
          <p className="ptext">ward</p>
        </div>
        <div className="story">
          <div className="story-border ">
            <img src={pic1}></img>
          </div>
          <p className="ptext">anas</p>
        </div>
      </div>
    </div>
  );
}

export default Story;
