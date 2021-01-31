import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

const ImageBackground = styled("div")`
  background-image: url("/images/van-mountains.jpg");
  background-position: top 20% center;
  background-size: cover;
  height: 35vh;

  +*{
    margin-top:0;
  }

`;

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5 rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Gatsby Test Site</h1>
        <p>
          This is a test website I use for learning{" "}
          <Link to="/about/">Learn more &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
