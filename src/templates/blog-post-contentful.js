import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.contentfulPost;
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <h2 itemProp="subtitle">{post.subtitle}</h2>
          <p>{post.date}</p>
          <Bio author={post.author} />
        </header>
        <section>
          <Img fluid={post.image.fluid} />
        </section>
        <section
          dangerouslySetInnerHTML={{
            __html: post.content.childContentfulRichText.html,
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer />
      </article>
    </Layout>
  );
};

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      date
      author {
        name
        summary
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
