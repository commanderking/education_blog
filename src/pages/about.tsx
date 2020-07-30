import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/about-photo.jpg/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <Layout>
      <h3>About Me</h3>
      <div style={{ display: "block", margin: "auto" }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            margin: "auto",
          }}
          imgStyle={{
            borderRadius: `2%`,
          }}
        />
      </div>

      <p>
        I'm Jeff! I'm grateful for the many educational opportunities I've been
        given and wish all students could have equitable access to a quality
        education. I'm on a journey to figure out ways, both small and large, in
        which I can make that happen.
      </p>

      <h3> About This Blog</h3>
      <p>
        This blog serves as a space to share some of my thoughts on educational
        research / pedagogy and how to apply them to create compelling digital
        learning experiences. I first started learning to program because I
        wanted to create digital tools that would engage my students in
        learning. Now as an engineer, I still enjoy designing lessons, but have
        the ability to actually prototype them to experiment with what works and
        what doesn't. I'm designing these prototypes with the intention that if
        I were to ever go back to the classroom, I would actually use them.
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
          <OutboundLink
            href="https://nces.ed.gov/ccd/schoolsearch/school_detail.asp?Search=1&DistrictID=3402670&ID=340267001412"
            target="_blank"
          >
            school statistics
          </OutboundLink>
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
          Currently work as a software engineer at{" "}
          <OutboundLink
            href="https://nces.ed.gov/ccd/schoolsearch/school_detail.asp?Search=1&DistrictID=3402670&ID=340267001412"
            target="_blank"
          >
            Curriculum Associates
          </OutboundLink>
          , primarily building out reports for educators
        </li>
        <li>
          Also, currently help run the{" "}
          <OutboundLink
            target="_blank"
            href="https://www.meetup.com/Boston-EdTech-Meetup/"
          >
            Boston EdTech Meetup
          </OutboundLink>
          , a group that runs edtech related events in the Boston area and whose
          primary mission is to build a diverse edtech workforce so that we can
          better meet the needs of all learners
        </li>
      </ul>
      <h3 id="commander-king">Who's Commander King? </h3>
      <p>
        Commander King was the{" "}
        <OutboundLink href="https://www.youtube.com/watch?v=bJnls3P7Qe4">
          persona
        </OutboundLink>{" "}
        I played in my chemistry classes. During my time teaching, I worked to
        create an immersive learning environment, in which students played the
        role of scientists who mastered chemical principles to solve important
        missions and save humanity from the galaxy’s many dangers. I was heavily
        influenced by Mass Effect, a videogame I was playing at the time that
        pushed me to create a learning experience that immersed my students in
        learning just like how Mass Effect immersed me in its storytelling.
      </p>
      <p>
        Despite the outlandish approach, I believe it played a non-trivial role
        in engaging students in chemistry, though it may not have been the most
        efficient way to engage students considering how much effort I put into
        it. This will likely be the topic of a future blog post.
      </p>
    </Layout>
  );
};

export default About;
