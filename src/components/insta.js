import React from "react";
import Image from "gatsby-image";
import { css } from "@emotion/react";

const Insta = () => {
  // getting the data here

  return (
    <>
      <h2>Instagram posts form @redbullmotorsports</h2>
      <div>{/* showing posts here */}</div>
      <a href="{`https://www.instagram.com/redbullmotorsports/`}">
        See more on instagram page &rarr;
      </a>
    </>
  );
};

export default Insta;