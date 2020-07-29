import React from "react";
import Layout from "../components/layout";
import Link from "gatsby";

const About = () => {
  return (
    <Layout>
      <h3>About this Blog </h3>
      <p>
        I enjoy thinking about how tech can play a role in creating more
        engaging experiences for all learners and how it can help make education
        more equitable. This blog is a space to explore and prototype some of my
        ideas, good or bad, about how we can create better learning experiences
        with technology.
      </p>

      <h3>Other About Topics</h3>
      <ul>
        <li>
          <a href="#ed-tech-background">
            Relevant Education and Tech Background{" "}
          </a>
        </li>
        <li>
          <a href="#commander-king">Who's Commander King?</a>
        </li>
      </ul>

      <h3 id="ed-tech-background">Relevant Education and Tech Background</h3>
      <p>Here are few experiences that contribute to how I think:</p>
      <ul>
        <li>
          Taught high school chemistry and Chinese at Camden County Technical
          Schools, a Title 1 vocational high school that primarily served
          students from Camden, NJ (74% free lunch) -{" "}
          <a href="https://nces.ed.gov/ccd/schoolsearch/school_detail.asp?Search=1&DistrictID=3402670&ID=340267001412">
            school statistics
          </a>
          .
        </li>
        <li>
          Started learning to code while I was teaching to build more engaging
          activities. Ultimately, leveraged what I learned to build a{" "}
          <a href="https://www.edusaga.com/teacher/public/home/">
            series of lessons
          </a>{" "}
          for beginner Mandarin learners
        </li>
        <li>
          Currently work as a software engineer at Curriculum Associates,
          primarily building out reports for educators
        </li>
        <li>
          Also, currently help run the Boston EdTech Meetup, a group that runs
          edtech related events in the Boston area and whose primary mission is
          to build a diverse edtech workforce so that we can better meet the
          needs of all learners.
        </li>
      </ul>
      <h3 id="commander-king">Who's Commander King? </h3>
      <p>
        <a href="https://www.youtube.com/watch?v=bJnls3P7Qe4">
          Commander King was the persona I played in my chemistry classes when I
          taught
        </a>
        . During my teaching, I worked to create an immersive learning
        environment, in which students play the role of scientists who master
        chemical principles to solve important missions and save humanity from
        the galaxy’s many dangers. I was heavily influenced by the gaming world
        of Mass Effect at the time and wanted to create an experience that truly
        immersed my students in learning.
      </p>
    </Layout>
  );
};

export default About;
