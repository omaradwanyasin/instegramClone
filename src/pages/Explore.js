import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import pic1 from "../assets/ExplorePics/explorePic1.avif";
import pic2 from "../assets/ExplorePics/explorePic10.webp";
import pic3 from "../assets/ExplorePics/explorePic11.webp";
import pic4 from "../assets/ExplorePics/explorePic12.webp";
import pic5 from "../assets/ExplorePics/explorePic13.webp";
import pic6 from "../assets/ExplorePics/explorePic14.webp";
import pic7 from "../assets/ExplorePics/explorePic2.avif";
import pic8 from "../assets/ExplorePics/explorePic3.avif";
import pic9 from "../assets/ExplorePics/explorePic4.avif";
import pic10 from "../assets/ExplorePics/explorePic5.avif";
import pic11 from "../assets/ExplorePics/explorePic6.avif";
import pic12 from "../assets/ExplorePics/explorePic7.avif";
import pic13 from "../assets/ExplorePics/explorePic8.avif";
import pic14 from "../assets/ExplorePics/explorePic9.avif";

const arrayofpic = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
];
const content = arrayofpic.map((pic) => {
  return (
    <div style={{ marginRight: 5 }}>
      <img style={{ width: 294, height: 294 }} src={pic} />
    </div>
  );
});

function Explore() {
  return (
    <div className="Explorestrsuc">
      <div>
        <Navbar />
      </div>
      <Container maxWidth="md">
        <div className="explorestruc">{content}</div>
      </Container>
    </div>
  );
}

export default Explore;
