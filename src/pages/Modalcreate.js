import React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import axios from "axios";

const token = localStorage.getItem("token");
function Modalcreate() {
  const [open, setOpen] = React.useState(false);
  const [image, setimage] = useState(null);
  const [data, setdata] = useState([{ title: "", description: "" }]);
  const handleimgchange = (event) => {
    const file = event.target.files[0];
    setimage(file);
    // console.log(read);
  };
  let formdata = new FormData();
  formdata.append("image", image);
  formdata.append("description", data.description);

  function handlesubmit(event) {
    axios
      .post("http://16.170.173.197/posts", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }
  return (
    <React.Fragment>
      <div className="navitem" onClick={() => setOpen(true)}>
        <AddCircleOutlineIcon sx={{ fontSize: 30 }} />

        <p>Create</p>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create new post</DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  autoFocus
                  required
                  onChange={(e) => {
                    setdata({ ...data, title: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Body</FormLabel>
                <Input
                  required
                  onChange={(e) => {
                    setdata({ ...data, description: e.target.value });
                  }}
                />
              </FormControl>
              <FormControl>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleimgchange}
                    style={{ display: "none" }}
                  />
                </Button>
              </FormControl>
              {image != null && <img src={image} />}
              {/* <img src={image} /> */}
              <Button
                onClick={() => {
                  handlesubmit();
                }}
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default Modalcreate;
