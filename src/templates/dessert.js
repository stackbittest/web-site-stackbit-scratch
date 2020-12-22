import React from "react";
import { graphql } from "gatsby";

export default function Dessert({ pageContext }) {
  return <div>{pageContext.frontmatter.message}</div>;
}

// Per Simon, this minimal GraphQL query ensures that when 'gatsby develop' is running
// any changes to content files affecting this page are refreshed in browser
export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
        }
      }
    }
  }
`;