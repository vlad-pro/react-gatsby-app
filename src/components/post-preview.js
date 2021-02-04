import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import ReadLink from "./read-link";

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-:first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link to={post.slug}>
        <Image />
      </Link>
      <h3>
        <Link to={post.title}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
  );
};

export default PostPreview;
