import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/instagram-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Container from "@mui/material/Container";
import profilepic from "../assets/profilepic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import usecontext from "../usecontext/Modalcontext";
import Modalcreate from "../pages/Modalcreate";

function Navbar() {
  // const { setOpen } = useContext(usecontext);
  return (
    <div className="Navcont">
      <div className="logocont ">
        <img className="instalogo" src={logo} />
      </div>
      {/* <Container maxWidth="sm"> */}
      <div className="navs">
        <div className="navitem">
          <HomeIcon sx={{ fontSize: 30 }} />
          <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
            <p> Home</p>
          </Link>
        </div>
        <div className="navitem">
          <SearchIcon sx={{ fontSize: 30 }} />
          <p>Search</p>
        </div>
        <div className="navitem">
          <ExploreIcon sx={{ fontSize: 30 }} />
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/explore"}
          >
            <p>Explore</p>
          </Link>
        </div>
        <div className="navitem">
          <SlideshowIcon sx={{ fontSize: 30 }} />
          <p>Reels</p>
        </div>
        <div className="navitem">
          <ChatIcon sx={{ fontSize: 30 }} />
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/messages"}
          >
            <p>Messages</p>
          </Link>
        </div>
        <div className="navitem">
          <FavoriteBorderIcon sx={{ fontSize: 30 }} />
          <p>Notifications</p>
        </div>
        <Modalcreate />
        <div className="navitem">
          <img src={profilepic} className="profile-pic"></img>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/profile"}
          >
            <p>Omar Yasin</p>
          </Link>
        </div>
        <div className="menu-item navitem">
          <MenuIcon />
          <p>More</p>
        </div>
      </div>
      {/* </Container> */}
      
    </div>
  );
}

export default Navbar;
