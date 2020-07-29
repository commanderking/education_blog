import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";
import Nav from "./nav";

const Layout = ({ children }) => {
  const header = (
    <h4
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
        marginBottom: 5,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Commander King - EdTech Blog
      </Link>
    </h4>
  );

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
