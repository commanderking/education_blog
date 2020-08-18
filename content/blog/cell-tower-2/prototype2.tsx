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
];

const PrototypeTwo = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <PrototypeWrapper title="Prototype 2">
        <SimpleGrid
          dimensions={[10, 10]}
          preplacedIcons={[
            {
              iconImage: homeIcon,
              iconSize: 20,
              coordinates: houseCoordinates,
            },
          ]}
        />

        <div>
          Houses within 4 kilometers of a tower can get service. What is the
          minimum number of cell towers that need to be built so that all
          households get cell coverage? Where should they be built?
        </div>
      </PrototypeWrapper>
    </div>
  );
};

export default PrototypeTwo;
