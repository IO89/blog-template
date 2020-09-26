import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Post = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const PostImage = styled.div`
  margin-right: 1rem;
`;

const PostText = styled.div`
  justify-self: center;
`;

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allContentfulPost.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(post => {
        const title = post.node.title || post.node.slug;
        return (
          <Post key={post.node.slug}>
            <PostImage>
              <Img fluid={post.node.image.fluid} />
            </PostImage>
            <PostText>
              <p>{post.node.date}</p>
              <Link to={post.node.slug} itemProp="url">
                <span itemProp="headline">{title}</span>
              </Link>
              <p>{post.node.subtitle}</p>
              <Bio author={post.node.author} />
            </PostText>
          </Post>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          author {
            name
            summary
          }
          slug
          date
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
