import * as React from "react";
import { Link } from "gatsby";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import FooterComponent from "./footer";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }: any) => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen justify-between w-full">
        <Navbar className="h-auto inset-0 z-10 p-0 shadow-none rounded-none max-w-full">
          <div className="flex items-center justify-center text-blue-gray-900">
            <Link to="/">
              <StaticImage
                className="h-full w-ful"
                src="../images/johnclaude-logo-colour.png"
                alt="home banner image"
                style={{ width: "200px" }}
              />
            </Link>
          </div>
        </Navbar>
        <main className="mb-auto mx-20">{children}</main>
        <FooterComponent className="h-10"></FooterComponent>
      </div>
    </>
  );
};

export default Layout;
