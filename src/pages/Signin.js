import React from "react";
import BasicModalDialog from "../components/BasicModalDialog";
import { Button, Container } from "@mui/joy";
import phone from "../assets/Login 1.png";
import phone2 from "../assets/androidScreen.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const[data,setdata] = useState({
    username:"",
    email:"",
    password:""
  })
  return (
    <Container maxWidth="md">
      <div className="signincont">
        <div className="parent">
          <img className="image2" src={phone2} style={{ height: 500 }}></img>
          <img className="image1" src={phone} style={{ height: 500 }}></img>
        </div>
        <div className="towcoldiv" style={{ marginTop: 40 }}>
          <BasicModalDialog />
          <div
            style={{
              width: 280,
              backgroundColor: "#1D1D1D",
              marginTop: 40,
              padding: 10,
              borderRadius: 13,
            }}
          >
            <p style={{ margin: "auto" }}>
              Don’t have an account?
              <Link to={"/signup"}>
                <Button
                  style={{ height: 5, fontSize: "15px", marginLeft: 10 }}
                  type="submit"
                >
                  <p>Sign up</p>
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Signin;
