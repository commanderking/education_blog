import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import SubscribeForm from "../components/subscribeForm";

const byPublished = ({ node }) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  // If in development mode, return all posts regardless of whether they're filtered or not
  if (isDevelopment) {
    return true;
  }

  return node.frontmatter.published;
};

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
          published: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Commander King Blog" />
      {posts.filter(byPublished).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        const isPublishedDevModeOnly =
          process.env.NODE_ENV === "development" && !node.frontmatter.published;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {isPublishedDevModeOnly && "DEV ONLY - "} {title}
                </Link>
              </h3>

              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
      <hr />
      <SubscribeForm />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
          }
        }
      }
    }
  }
`;
