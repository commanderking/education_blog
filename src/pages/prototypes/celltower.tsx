import React from "react";
import { CoordinateGrid } from "open-math-tools";
import cellTower from "../../../content/assets/cell-tower.svg";

const CellTower = () => {
  return (
    <CoordinateGrid
      id="AddableIcons"
      gridHeight={600}
      gridWidth={600}
      addableIcon={{
        iconImage: cellTower,
        iconSize: 20,
        maxIcons: 5,
      }}
    />
  );
};

export default CellTower;
