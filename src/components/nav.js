import React from "react";
import { Link } from "gatsby";

const navLinks = [
  {
    text: "Blog",
    url: "/",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Lesson Prototypes",
    url: "/prototypes",
  },
];

const Nav = () => {
  return (
    <ul>
      {navLinks.map(link => {
        return (
          <li
            style={{
              display: "inline-block",
              listStyle: "none",
              padding: "10px",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
              }}
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
