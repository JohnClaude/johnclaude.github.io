import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Page">
      <div className="sm:mx-8 mt-4 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
        <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
          <h1 className="font-bold text-3xl">ABOUT US</h1>
        </div>
      </div>

      <div className="mx-8 mt-8">
        <p>
          <i>Masiphumelele-Through the Struggles We Rise</i> is the product of
          an excellent partnership with Stellenbosch Academy of Photography and
          Design, whose students photographed Masiphumelele throughout 2022,
          alongside Ikamva Youth, a high school tutoring center, whose Grade 10
          learners authored the written texts. The partnership was facilitated
          by Zintle Magazi, the storytelling project lead and coordinator.
          Without the buy-in of community members, who agreed to be photographed
          and told us their stories, this project would not have been possible,
          and to each one of them we are eternally grateful!
        </p>
        <br></br>
        <br></br>

        <h2 className="text-xl font-bold underline mb-2">Our Vision</h2>
        <p>Reclaim our narrative, document our history and tell our stories.</p>
        <br></br>
        <br></br>

        <h2 className="text-xl font-bold underline mb-2">Our Mission</h2>
        <p>
          To build a rich historical archive documenting life in Masiphumelele
          through various mediums; by doing so, inspire and empower storytellers
          Masi to contribute to the continent’s stories and artistic discourse.{" "}
        </p>
        <br></br>
        <br></br>

        <h2 className="text-xl font-bold underline mb-2">We want to…</h2>
        <ul className="list-disc">
          <li>
            Reframe Masiphumelele’s narrative and archive its history into
            written and photography format that will be shared via digital
            campaigns across various online platforms.
          </li>
          <li>
            Publish our project into a book and make it available to our local
            schools and library.
          </li>
          <li>
            Inspire more young people to write, take photographs and share their
            stories with us!
          </li>
          <li>To spark a movement of storytellers.</li>
        </ul>
      </div>

      <div className="sm:mx-8 mt-4 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
        <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
          <h1 className="font-bold text-xl">PARTNERS</h1>
        </div>
      </div>
      <div className="mx-8 mt-8">
        <StaticImage
          src="../images/ikhamva-logo.png"
          alt="ikhamva-logo"
          style={{ width: "200px" }}
        />
        <StaticImage
          src="../images/sbaodp_logo.png"
          alt="sbaodp_logo"
          style={{ width: "400px" }}
        />
      </div>

      <div className="sm:mx-8 mt-4 grid grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
        <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
          <h1 className="font-bold text-xl">GET INVOLVED</h1>
        </div>
      </div>
      <div className="mx-8 mt-8">
        <p>
          Help us make this dream a reality by donating to our&nbsp;
          <a
            href="https://www.backabuddy.co.za/champion/project/zintle-magazi-5677817988415912722"
            target="_blank"
            className="underline"
          >
            BackaBuddy
          </a>
          &nbsp;page. For more information about the project, contact us on:
          <ul className="mt-4">
            <li>
              <a
                className="hover:text-blue-500 focus:text-blue-500"
                href="mailto:masistoryproject@gmail.com"
              >
                masistoryproject@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-500 focus:text-blue-500"
                href="tel:+27683050515"
              >
                +27 68 3050 515
              </a>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;
