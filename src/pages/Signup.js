import { Button, Container } from "@mui/joy";
import React from "react";
import BasicModalDialog from "../components/BasicModalDialog";
import Signupdiv from "../components/Signupdiv";
import phone from "../assets/Login 1.png";
import { Link } from "react-router-dom";
import phone2 from "../assets/androidScreen.png";
function Signup() {
  return (
    <Container maxWidth="md">
      <div className="signincont">
        <div className="parent">
          <img className="image2" src={phone2} style={{ height: 500 }}></img>
          <img className="image1" src={phone} style={{ height: 500 }}></img>
        </div>
        <div>
          <Signupdiv />
          <div
            style={{
              width: 280,
              backgroundColor: "#1D1D1D",
              marginTop: 40,
              padding: 10,
              borderRadius: 13,
            }}
          >
            <p style={{ margin: "auto", marginLeft: 40 }}>
              Have an account?{" "}
              <Link to={"/signin"}>
                <Button
                  style={{ height: 5, fontSize: "15px", marginLeft: 10 }}
                  type="submit"
                >
                  <p>Log In </p>
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
