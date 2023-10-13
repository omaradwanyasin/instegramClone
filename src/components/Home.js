import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import Story from "./Story";
import Post from "./Post";
import Newfollowers from "./Newfollowers";
import Addpeople from "./Addpeople";
import { useState } from "react";
import axios from "axios";
import Createposts from "./Createposts";

function Home() {
  const token = localStorage.getItem("token");
  const [posts, setpost] = useState([{}]);
  useEffect(() => {
    setpost([{}]);
  }, []);
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setpost(response.data.posts);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []); 
  const displayposts =
    posts.length > 0 ? (
      posts.map((post, index) => {
        if (post.user == undefined) {
          return null;
        }
        return (
          <Post
            name={post.user.userName}
            img={post.image}
            dis={post.description}
            likes={post.likes ? post.likes.length : 0}
            id={post.user.id}
            postid={post.id}
            key={post.id} // Add a unique key for each Post component
          />
        );
      })
    ) : (
      <div>Loading...</div>
    );

  // const displayposts = posts.map((post, index) => {
  //   console.log(post.user.id);
  //   return (
  //     <Post
  //       name={post.user?.userName || "Unknown User"}
  //       img={post.image}
  //       dis={post.description}
  //       likes={post.likes ? post.likes.length : 0}
  //       // id={post[index]}
  //     />
  //   );
  // }); //needs update with name
  return (
    <div className="homecont">
      <div>
        <Navbar setpost={setpost} />
      </div>
      <div className="home-split">
        <div className="posts-story">
          <Container maxWidth="sm">
            <Story />
            {displayposts}
            {/* <Createposts setposts={setpost}/> */}
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
                <p style={{ color: "gray", fontSize: 12 }}>
                  About . Help . Press . API . Jobs . Privacy . Terms. Locations
                  . Language . Meta Verified
                </p>
                <p style={{ color: "gray", fontSize: 12 }}>
                  © 2023 INSTAGRAM FROM META
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
