import React, { useState } from "react";
import PrototypeWrapper from "../../components/prototypeWrapper";
import Layout from "../../components/layout";
import styles from "./coldcall.module.css";

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
  const [uncalledStudents, setUncalledStudents] = useState(
    shuffleArray(students)
  );
  const [calledStudents, setCalledStudents] = useState([]);

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
          students when asking questions. Its intended effect is to communicate
          high expectations by expecting all students to be ready to answer
          questions at any time.
        </p>
        <PrototypeWrapper title="Student Cards for Cold Call">
          <div className={styles.grid}>
            <div>
              <h4>Students to Call</h4>
              <div
                onClick={() => {
                  if (!uncalledStudents.length) {
                    return;
                  }

                  const uncalledStudentsClone = [...uncalledStudents];
                  uncalledStudentsClone.shift();
                  setUncalledStudents(uncalledStudentsClone);
                  setCalledStudents([...calledStudents, uncalledStudents[0]]);
                }}
                style={{ width: "160px", height: "200px" }}
              >
                {uncalledStudents.map((student, index) => {
                  return (
                    <div
                      className={styles.card}
                      style={{
                        marginLeft: `${1 * index}px`,
                        marginTop: `${1 * index}px`,
                        zIndex: 10000 - index,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div>
              <h4>Students Called</h4>
              <div style={{ width: "160px", height: "200px" }}>
                <div>
                  {calledStudents.map(student => {
                    return <div className={styles.card}>{student.name}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setCalledStudents([]);
              setUncalledStudents(shuffleArray(students));
            }}
          >
            Reset Students
          </button>
        </PrototypeWrapper>
      </div>
    </Layout>
  );
};

export default ColdCall;
