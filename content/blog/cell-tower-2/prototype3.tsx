import React from "react";
import { SimpleGrid } from "open-math-tools";
import cellTower from "../../assets/cell-tower.svg";
import homeIcon from "../..//assets/home-icon.svg";
import PrototypeWrapper from "../../../src/components/prototypeWrapper.tsx";

const houseCoordinates = [
  { x: 3, y: 4 },
  { x: 3, y: 8 },
  { x: 4, y: 2 },
  { x: 5, y: 5 },
  { x: 8, y: 1 },
  { x: 9, y: 7 },
  { x: 13, y: 14 },
];

const PrototypeTwo = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <PrototypeWrapper title="Prototype 3">
        <SimpleGrid
          dimensions={[15, 15]}
          preplacedIcons={[
            {
              iconImage: homeIcon,
              iconSize: 20,
              coordinates: houseCoordinates,
            },
          ]}
        />

        <div>
          Houses within 4 kilometers of a tower can get service.{" "}
          <b>How many cell towers should be built and where?</b>
        </div>
      </PrototypeWrapper>
    </div>
  );
};

export default PrototypeTwo;
