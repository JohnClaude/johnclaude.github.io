import * as React from "react";
import { type HeadFC, type PageProps, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import IntroductionComponent from "../components/introduction";
import SpaceComponent from "../components/space";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
  const edges = data.allMarkdownRemark.edges;

  const stories = edges.map((edge: any) => {
    const blogUrl = `/blog/${edge.node.frontmatter.slug}`; // e.g. `/blog/my-post`

    return (
      <Card className="max-w-[24rem] overflow-hidden rounded-none">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
          children={undefined}
        ></CardHeader>
        <Link to={blogUrl}>
          <CardBody>
            <Typography variant="h5" color="blue-gray">
              {edge.node.frontmatter.title}
            </Typography>
            <Typography variant="p" color="gray" className="mt-3 font-normal">
              {edge.node.excerpt}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-b-8 border-orange-900">
            {/* TODO: Add tags here */}
          </CardFooter>
        </Link>
      </Card>
    );
  });

  return (
    <Layout pageTitle="Home Page">
      {/* Main content div */}
      <div>
        <SpaceComponent></SpaceComponent>
        <IntroductionComponent></IntroductionComponent>

        <SpaceComponent></SpaceComponent>

        <div className="sm:mx-8 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
          <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
            <h1 className="font-bold text-3xl">Writings</h1>
          </div>
        </div>
        <div className="my-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 place-items-center align-middle">
            {stories}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            tags
            slug
            title
            author
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>John Claude</title>
    <meta name="description" content="Writings of a money movement Engineer." />
    <link rel="icon" type="image/x-icon" href="../images/favicon.ico" />
  </>
);
