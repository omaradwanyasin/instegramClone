import React from "react";
import Profilepic from "./Profilepic";
import postpic1 from "../assets/ExplorePics/explorePic12.webp";
import { Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import commenticon from "../assets/Comment.png";
import SendIcon from "@mui/icons-material/Send";
import setup from "../assets/uq3xdwc6hu7a1.jpg";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
function Post(props) {
  const[counter,setcounter]=useState(props.likes);
  const [liked, setliked] = useState(true);
  return (
    <Container maxWidth="sm">
      <div className="postcon">
        <div>
          <Profilepic name={props.name} id ={props.id} postid={props.postid}/>
        </div>
        <div style={{ marginTop: 10 }}>
          <img className="postimg" src={props.img}></img>
        </div>
        <div className="interact-withpost">
          {liked ? (
            <div
              onClick={() => {
                setliked(!liked);
                setcounter(counter+1);
              }}
            >
              <FavoriteBorderIcon />
            </div>
          ) : (
            <div
              onClick={() => {
                setliked(!liked);
                setcounter(counter-1);
              }}
            >
              {" "}
              <FavoriteIcon />
            </div>
          )}

          <ChatBubbleOutlineOutlinedIcon />
          <SendIcon />
          <BookmarkBorderOutlinedIcon style={{ marginLeft: "auto" }} />
        </div>
        <div>
          <p className="ptext">{counter} likes</p>
        </div>
        <div className="ptext">
          <p className="ptext">{props.name}</p>
          <p className="ptext">{props.dis}</p>
        </div>
      </div>
    </Container>
  );
}

export default Post;
