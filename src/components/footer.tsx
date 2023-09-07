import { Typography } from "@material-tailwind/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const FooterComponent = ({ children }: any) => {
  return (
    <div className="mt-64">
      <footer className="w-full sticky bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 UN JOHN CLAUDE
              </Typography>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                href="https://www.linkedin.com/in/unjohnclaude/"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                CONNECT ON LINKEDIN
              </Typography>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
