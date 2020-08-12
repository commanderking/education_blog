import React from "react";
import { CoordinateGrid } from "open-math-tools";
import cellTower from "../../assets/cell-tower.svg";
import homeIcon from "../..//assets/home-icon.svg";
import PrototypeWrapper from "../../../src/components/prototypeWrapper.tsx";

const houseCoordinates = [
  { x: -5, y: -2 },
  { x: -3, y: -4 },
  { x: 1, y: -3 },
];

const PrototypeOne = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <PrototypeWrapper title="Prototype 1">
        <CoordinateGrid
          id="CellTowerPrototype"
          gridHeight={300}
          gridWidth={300}
          addableIcon={{
            iconImage: cellTower,
            iconSize: 20,
            maxIcons: 5,
          }}
          xTicksNumber={10}
          yTicksNumber={10}
          preplacedIcons={[
            {
              iconImage: homeIcon,
              iconSize: 12,
              coordinates: houseCoordinates,
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
