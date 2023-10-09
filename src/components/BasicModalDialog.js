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
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function BasicModalDialog() {
  const [open, setOpen] = useState(true);
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handlesignup() {
    axios
      .post("http://16.170.173.197/users/login", data)
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
      {/* <ModalDialog
          style={{
            backgroundColor: "#1D1D1D",
            borderStyle: "none",
            color: "white",
          }}
        > */}
      <div style={{ margin: "auto", marginLeft: 90 }}>
        <img style={{ marginBottom: 20 }} className="instalogo1" src={pic1} />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handlesignup();
        }}
      >
        <Stack spacing={2}>
          <FormControl>
            <Input
              onChange={(e) => {
                setdata({ ...data, email: e.target.value });
              }}
              autoFocus
              required
              placeholder="Mobile Number or Email"
            />
          </FormControl>
          <FormControl>
            <Input
              required
              placeholder="Password"
              onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
            />
          </FormControl>
          <Button style={{ height: 38 }} type="submit">
            <p> Login</p>
          </Button>
          <p style={{ margin: "auto", marginTop: 20 }}>or</p>
          <Button style={{ height: 38 }}>
            <FacebookIcon /> <p>login with Facebook</p>
          </Button>
          <div style={{ margin: "auto" }}>
            <p className="texttest">Forgot password?</p>
          </div>
        </Stack>
      </form>
    </div>
  );
}
