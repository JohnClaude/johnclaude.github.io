import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import Layout from "../../components/layout";
import SpaceComponent from "../../components/space";

const BlogPage = ({ data }: any) => {
  const { mainPost, relatedStories } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = mainPost;

  console.log(relatedStories);

  return (
    <Layout pageTitle="Blog">
      <div className="mx-32 mt-8">
        <h1 className="font-bold text-3xl">{`${frontmatter.title}`}</h1>
      </div>
      <SpaceComponent></SpaceComponent>
      <div className="mx-32 mt-4 justify-center place-items-center">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    mainPost: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        author
      }
    }

    relatedStories: allMarkdownRemark(limit: 4) {
      nodes {
        excerpt(pruneLength: 140)
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC<PageProps> = ({ data }: any) => (
  <title>{data.markdownRemark?.frontmatter?.title}</title>
);
