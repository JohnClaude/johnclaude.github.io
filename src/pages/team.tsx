import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const TeamPage: React.FC<PageProps> = () => {
  return <Layout pageTitle="Meet the Team"></Layout>;
};

export default TeamPage;

export const Head: HeadFC = () => <title>Meet the Team</title>;
