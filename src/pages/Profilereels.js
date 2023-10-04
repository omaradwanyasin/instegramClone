import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import profileimg from "../assets/profilepic.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import pic from "../assets/5819260.png";
import GridOnIcon from "@mui/icons-material/GridOn";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import pic1 from "../assets/ExplorePics/explorePic3.avif";
import pic2 from "../assets/ExplorePics/explorePic12.webp";
import pic3 from "../assets/ExplorePics/explorePic13.webp";
import pic4 from "../assets/ExplorePics/explorePic14.webp";

import { Link, Route, Routes } from "react-router-dom";
import Test from "../components/Test";

const arrayofpic = [pic1, pic2, pic3, pic4];
const content = arrayofpic.map((pic) => {
  return (
    <div style={{ marginRight: 5 }}>
      <img style={{ width: 294, height: 294 }} src={pic} />
    </div>
  );
});

function Profilereels() {
  return (
    <div className="Explorestrsuc">
      <div>
        <Navbar />
      </div>
      <Container maxWidth="md">
        <div className="profileinfo">
          <div>
            <img src={profileimg}></img>
          </div>
          <div>
            <div>
              <div className="name-2btn">
                <h3>omaradwn</h3>
                <button className="profilebtn">Edit profile</button>
                <button className="profilebtn">View actions</button>
                <SettingsIcon style={{ marginTop: 20 }} />
              </div>
              <div className="profiledatainfo">
                <p>3 posts</p>
                <p>268 followers</p>
                <p>269 following</p>
              </div>
              <div>
                <p className="ptext">Deen Over Dunya</p>
                <p className="ptext">CS | 21</p>
                <p className="ptext">عُمَرْ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="postsreelstagged">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/profile"}
          >
            <div className="postswitch">
              <GridOnIcon />
              <h5>POSTS</h5>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/profile/reels"
          >
            <div className="postswitch">
              <BookmarkBorderIcon />

              <h5>REELS</h5>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/profile"}
          >
            <div className="postswitch">
              <AccountBoxOutlinedIcon />
              <h5>TAGGED</h5>
            </div>
          </Link>
        </div>
        <div className="postinprofile">{content}</div>
      </Container>
    </div>
  );
}

export default Profilereels;
