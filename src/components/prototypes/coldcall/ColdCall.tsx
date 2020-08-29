import React, { useState } from "react";
import PrototypeWrapper from "../../components/prototypeWrapper";
import Layout from "../../components/layout";
import CardStack from "./components/prototypes/coldcall/CardStack";
import { useStaticQuery, graphql } from "gatsby";

const students = [
  {
    name: "Mordin Solus",
  },
  {
    name: "Urdnot Wrex",
  },
  {
    name: "John Shepard",
  },
  {
    name: "Liara T'soni",
  },
  { name: "Tali'Zorah nar Rayya" },
  { name: "Kaidan Alenko " },
  {
    name: "Ashley Williams",
  },
  {
    name: "Garrus Vakarian",
  },
  {
    name: "Miranda Lawson",
  },
  {
    name: "Thane Krios",
  },
  {
    name: "Zaeed Massani",
  },
  {
    name: "Kasumi Goto",
  },
  {
    name: "James Vega",
  },
];

const ColdCall = () => {
  const images = useStaticQuery(graphql`
    query logo {
      logo: file(absolutePath: { regex: "/actlogo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        <h3> Cold Call</h3>
        <p>
          <a
            href="https://teachlikeachampion.com/blog/cold-call-inclusive/"
            target="blank"
          >
            Cold call
          </a>{" "}
          is a classroom management technique used to "randomly call" on
          students when asking questions. In a classroom, teachers can use a
          deck of cards or popsicle sticks with student names to ensure the
          process is random. In a virtual environment, it might be more
          challenging to have these physical tools ready in front of a computer.
          The goal of this prototype was to make a tool where teachers can input
          student names and randomly call on students in an unbiased way.
        </p>
        <p>
          I've used cold call in my classroom and have found it's been an
          efficient technique with many benefits if implemented correctly. I've
          described the benefits and challenges in this{" "}
          <a href="/coldcall">blog post</a>.
        </p>
        <PrototypeWrapper title="Student Cards for Cold Call">
          <h3>Swipe Card to Pick Student</h3>
          <CardStack
            students={students}
            cardLogo={images.logo.childImageSharp.fluid}
          />
        </PrototypeWrapper>
      </div>
    </Layout>
  );
};

export default ColdCall;
