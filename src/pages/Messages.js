import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Newfollowers from "../components/Newfollowers";
import msglogo from "../assets/messengar-logo.png";
import Button from "@mui/joy/Button";
import Sendmsg from "../components/Sendmsg";
function Messages() {
  return (
    <div className="messages-con">
      <div>
        <Navbar />
      </div>
      <div className="section1">
        <Container maxWidth="sm">
          <div className="message-dispaly">
            <div className="msgheader">
              <div>
                <h3>omaradwn</h3>
              </div>
              <div>
                <KeyboardArrowDownIcon
                  style={{ marginTop: 7, fontSize: "27" }}
                />
              </div>
              <div className="creatgroup">
                <AddCircleOutlineIcon />
              </div>
            </div>
            <div className="msginfo">
              <h4>Messages</h4>
              <p style={{ color: "gray" }}>Request</p>
            </div>
            <div>
              <Sendmsg value={false} name="zayn" text="wanna play football?" />
              <Sendmsg value={false} name="abdallah" text="hello"  />
              <Sendmsg value={true} name="samer" text="call me on 5pm"  />
            </div>
          </div>
        </Container>
      </div>
      <div className="start-messaging">
        <div>
          <img src={msglogo}></img>
        </div>
        <div>
          <h3>Your Messages</h3>
        </div>
        <div>
          <p className="ptext" style={{ color: "gray" }}>
            Send private photos and messages to a friend or group
          </p>
        </div>
        <div>
          <Button style={{ marginTop: 15 }}>SEND MESSAGE</Button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
