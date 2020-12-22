import React from "react";
import { graphql } from "gatsby";

export default function Dessert({ pageContext, data }) {
  const post = data.markdownRemark;
  return <div>{post.frontmatter.message}</div>;
}

export const pageQuery = graphql`
  query WebPageBySlug($urlfrag: String!) {
    markdownRemark(frontmatter: { urlfragment: { eq: $urlfrag } }) {
      id
      html
      frontmatter {
        urlfragment,
        lookandfeel,
        message
      }
    }
  }
`;
