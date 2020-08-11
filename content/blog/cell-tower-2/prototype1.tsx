import React from "react";
import { CoordinateGrid } from "open-math-tools";
import cellTower from "../../assets/cell-tower.svg";
import homeIcon from "../..//assets/home-icon.svg";

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

const PrototypeOne = () => {
  return (
    <CoordinateGrid
      id="CellTowerPrototype"
      gridHeight={300}
      gridWidth={300}
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
  );
};

export default PrototypeOne;
