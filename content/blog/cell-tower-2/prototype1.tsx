import React from "react";
import { SimpleGrid } from "open-math-tools";
import cellTower from "../../assets/cell-tower.svg";
import homeIcon from "../..//assets/home-icon.svg";
import PrototypeWrapper from "../../../src/components/prototypeWrapper.tsx";

const size = 25;
const houseIcons = [
  { x: 3, y: 4 },
  { x: 4, y: 2 },
  { x: 5, y: 5 },
].map(icon => ({ ...icon, size, image: homeIcon }));

const PrototypeOne = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <PrototypeWrapper title="Prototype 1">
        <SimpleGrid
          initialIcons={[
            ...houseIcons,
            {
              image: cellTower,
              size: 30,
              x: 1,
              y: 1,
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
