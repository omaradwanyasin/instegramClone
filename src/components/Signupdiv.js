import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import pic1 from "../assets/instagram-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signupdiv() {
  const [open, setOpen] = React.useState(true);
  const [data, setdata] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handlesignup() {
    axios
      .post("http://16.170.173.197/users/signup", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      style={{
        backgroundColor: "#1D1D1D",
        borderStyle: "none",
        color: "white",
        width: 280,
        padding: 10,
        borderRadius: 10,
      }}
    >
      {/* <Modal open={open} style={{ width: 350 }}>
        <ModalDialog
          style={{
            backgroundColor: "#1D1D1D",
            borderStyle: "none",
            color: "white",
          }}
        > */}
      <div style={{ margin: "auto", marginLeft: 90 }}>
        <img style={{ marginBottom: 20 }} className="instalogo1" src={pic1} />
      </div>
      <p className="texttest">
        Sign up to see photos and videos from your friends{" "}
      </p>
      <form
        onSubmit={(event) => {
          handlesignup();
          event.preventDefault();
        }}
      >
        <Stack spacing={2}>
          <Button style={{ height: 38 }} type="submit">
            <FacebookIcon /> <p>login with Facebook</p>
          </Button>
          <p style={{ margin: "auto", marginTop: 20 }}>or</p>
          <FormControl>
            <Input
              onChange={(e) => {
                setdata({ ...data, email: e.target.value });
              }}
              autoFocus
              required
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={(e) => {
                setdata({ ...data, userName: e.target.value });
              }}
              required
              placeholder="Username"
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
              required
              placeholder="Password"
            />
          </FormControl>
          <Button style={{ height: 38 }} type="submit">
            <p>Sign up</p>
          </Button>

          <div style={{ margin: "auto" }}>
            <p className="texttest">
              By signing up, you agree to our Terms, Data Policy and Cookies
              Police
            </p>
          </div>
        </Stack>
      </form>
      {/* </ModalDialog>
      </Modal> */}
    </div>
  );
}

export default Signupdiv;
