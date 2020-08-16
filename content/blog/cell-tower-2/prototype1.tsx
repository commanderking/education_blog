import React from "react";
import { SimpleGrid } from "open-math-tools";
import cellTower from "../../assets/cell-tower.svg";
import homeIcon from "../..//assets/home-icon.svg";
import PrototypeWrapper from "../../../src/components/prototypeWrapper.tsx";

const houseCoordinates = [
  { x: 3, y: 4 },
  { x: 4, y: 2 },
  { x: 5, y: 5 },
];

const PrototypeOne = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <PrototypeWrapper title="Prototype 1">
        <SimpleGrid
          preplacedIcons={[
            {
              iconImage: homeIcon,
              iconSize: 25,
              coordinates: houseCoordinates,
            },
            {
              iconImage: cellTower,
              iconSize: 30,
              coordinates: [{ x: 1, y: 1 }],
            },
          ]}
        />

        <div>
          Houses within 4 kilometers of a tower can get service. Which of the
          households will get service based on the cell tower's current
          location?
        </div>
      </PrototypeWrapper>
    </div>
  );
};

export default PrototypeOne;
