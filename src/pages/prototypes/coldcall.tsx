import React, { useState } from "react";
import PrototypeWrapper from "../../components/prototypeWrapper";
import Layout from "../../components/layout";
import styles from "./coldcall.module.css";
import CardStack from "../../components/prototypes/coldcall/CardStack";
import { useStaticQuery, graphql } from "gatsby";
import actlogo from "../../../content/assets/actlogo.png";

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
];

function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

const ColdCall = () => {
  const images = useStaticQuery(graphql`
    query logo {
      logo: file(absolutePath: { regex: "/actlogo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 50, maxHeight: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [uncalledStudents, setUncalledStudents] = useState(
    shuffleArray(students)
  );
  const [calledStudents, setCalledStudents] = useState([]);

  const handleStudentSelection = () => {
    if (!uncalledStudents.length) {
      return;
    }

    const uncalledStudentsClone = [...uncalledStudents];
    uncalledStudentsClone.shift();
    setUncalledStudents(uncalledStudentsClone);
    setCalledStudents([...calledStudents, uncalledStudents[0]]);
  };

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
          challenging to have these physical tools available and show each
          answer. The goal of this prototype was to make a tool where teachers
          can input student names and randomly call on students in an unbiased
          way.
        </p>
        <PrototypeWrapper title="Student Cards for Cold Call">
          <h3>Swipe Card to Pick Student</h3>
          <CardStack
            students={uncalledStudents}
            cardLogo={images.logo.childImageSharp.fluid}
          />
          <button
            onClick={() => {
              setCalledStudents([]);
              setUncalledStudents(shuffleArray(students));
            }}
          >
            Reset Student Selection
          </button>
        </PrototypeWrapper>
      </div>
    </Layout>
  );
};

export default ColdCall;
