import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This is a website for test</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  );
};
