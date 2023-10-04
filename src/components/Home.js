import React from "react";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import Story from "./Story";
import Post from "./Post";
import Newfollowers from "./Newfollowers";
import Addpeople from "./Addpeople";
import { useState } from "react";
function Home() {
  
  return (
    <div className="homecont">
      <div>
        <Navbar />
      </div>
      <div className="home-split">
        <div className="posts-story">
          <Container maxWidth="sm">
            <Story />
            <Post />
            <Post />
            <Post />
          </Container>
        </div>
        <div className="newfollower">
          <Container maxWidth="sm">
            <div className="newfollower-cont">
              <Newfollowers />
              <div className="suggstion">
                <h5 style={{ color: "#969696" }}>Suggestions for you</h5>
                <h5>See More</h5>
              </div>
              <Addpeople pic="2" name="nada" text="Followed by moath" />
              <Addpeople pic="1" name="ahmad" text="Followed by omar" />
              <Addpeople pic="1" name="zayn" text="Followed by omar" />
              <Addpeople pic="1" name="thaer" text="Followed by rami" />
              <div>
                <p style={{color:"gray",fontSize:12}}>
                  About . Help . Press . API . Jobs . Privacy . Terms. Locations
                  . Language . Meta Verified
                </p>
                <p style={{color:"gray",fontSize:12}}>© 2023 INSTAGRAM FROM META</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
