import React, { useEffect, useState, useRef } from "react";
import { CoordinateGrid } from "open-math-tools";
import cellTower from "../../../content/assets/cell-tower.svg";
import homeIcon from "../../../content/assets/home-icon.svg";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import PrototypeWrapper from "../../components/prototypeWrapper";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const houseCoordinates = [
  { x: 5, y: 9 },
  { x: -5, y: -2 },
  { x: -3, y: -4 },
  { x: 1, y: -3 },
  { x: 3, y: -2 },
  { x: 5, y: 4 },
  { x: 1, y: 8 },
  { x: -2, y: 7 },
  { x: 9, y: -9 },
];

const CellTower = () => {
  const data = useStaticQuery(graphql`
    query martianOutpostImage {
      marsOutpostImage: file(
        absolutePath: { regex: "/martian-outpost-nasa.jpg/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [wrapperDivWidth, setWrapperDivWidth] = useState(800);
  const layoutRef = useRef(null);

  useEffect(() => {
    setWrapperDivWidth(layoutRef?.current?.offsetWidth);
  }, [layoutRef.current]);

  const gridSide = wrapperDivWidth - 25 || 600;
  return (
    <Layout>
      <div ref={layoutRef}>
        <h3>Pythagorean Theorem Prototype</h3>
        <PrototypeWrapper title={"Building Cell Towers in Martian Outpost"}>
          <h4>Mission Overview</h4>
          <Image
            fluid={data.marsOutpostImage.childImageSharp.fluid}
            alt="Martian Outpost"
          />
          <small>
            <a
              href="https://mars.nasa.gov/resources/6198/martian-outpost/"
              target="_blank"
            >
              Martian Outpost
            </a>
          </small>
          <p>
            Government officials of the new Martian outpost are determining how
            many cell towers are required to cover the needs of their residents.
            Houses within 4 kilometers of each cell tower can receive cell
            coverage. How many cell towers should they build and where?
          </p>
          <h4>Notes and Requirements</h4>
          <ul>
            <li>Each unit on the map represents 1 km</li>
            <li>
              Each house represents a small neighborhood with 20-30 households.
            </li>
            <li>
              Residents have written to the governor that they prefer cell
              towers be built at least 1 km away from their neighborhood.
            </li>
          </ul>
          <h4 style={{ marginBottom: 0 }}>Outpost Map</h4>
          <div>
            <small>(click coordinates to place cell towers)</small>
          </div>
          <CoordinateGrid
            id="CellTowerPrototype"
            gridHeight={gridSide}
            gridWidth={gridSide}
            addableIcon={{
              iconImage: cellTower,
              iconSize: 20,
              maxIcons: 5,
            }}
            preplacedIcons={[
              {
                iconImage: homeIcon,
                iconSize: 15,
                coordinates: houseCoordinates,
              },
            ]}
          />
        </PrototypeWrapper>
        <h4>Resources and Inspiration</h4>
        <p>
          The idea for this was heavily influenced by a{" "}
          <a href="https://www.scribd.com/document/366617413/tacib-cell-towers-unit?secret_password=QSO3ygjBeFnOFdO3seZ4#from_embed">
            Cell Towers Unit
          </a>{" "}
          created by <a href="http://tacib.weebly.com/">TACIB</a>.
        </p>
        <h4>Prototype Deep Dive</h4>
        <p>
          Below are blog posts I've written to explain the research and thought
          process that went into building this prototype.
        </p>
        <ol style={{ marginLeft: 20 }}>
          <li>
            <Link to="/cell-tower-1">Inspiration and Context</Link>
          </li>
          <li>Design and Development Decisions</li>
          <li>Classroom Implementation</li>
          <li>Potential Areas of Improvement and Future Development</li>
        </ol>
      </div>
    </Layout>
  );
};

export default CellTower;
