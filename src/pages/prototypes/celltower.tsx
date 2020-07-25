import React from "react";
import { CoordinateGrid } from "open-math-tools";
import cellTower from "../../../content/assets/cell-tower.svg";
import homeIcon from "../../../content/assets/home-icon.svg";
import Layout from "../../components/layout";

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
  return (
    <Layout>
      <h4>Mission Overview</h4>
      <p>
        The new Martian outpost is determining how many cell towers are required
        to cover the needs of all residents. Houses within 4 kilometers of each
        cell tower can receive cell coverage. Where should cell towers be placed
        so that all residents receive coverage?
      </p>
      <h4>Notes and Requirements</h4>
      <ul>
        <li>Each unit on the map represents 1 km</li>
        <li>Each house represents a town with a group of residents</li>
        <li>
          Residents prefer cell towers be built at least 1 km away from their
          town
        </li>
        <li>
          There's funding for 5 cell towers, but the fewer cell towers we build,
          the more money we can save for other outpost activities.
        </li>
      </ul>
      <h4>Outpost Map</h4>
      <CoordinateGrid
        id="CellTowerPrototype"
        gridHeight={600}
        gridWidth={600}
        addableIcon={{
          iconImage: cellTower,
          iconSize: 20,
          maxIcons: 5,
        }}
        preplacedIcons={[
          { iconImage: homeIcon, iconSize: 15, coordinates: houseCoordinates },
        ]}
      />
      <h4>Resources and Inspiration</h4>
      <p>
        The idea for this was heavily influenced by a{" "}
        <a href="https://www.scribd.com/document/366617413/tacib-cell-towers-unit?secret_password=QSO3ygjBeFnOFdO3seZ4#from_embed">
          Cell Towers Unit
        </a>{" "}
        created by <a href="http://tacib.weebly.com/">TACIB</a>.
      </p>
    </Layout>
  );
};

export default CellTower;
