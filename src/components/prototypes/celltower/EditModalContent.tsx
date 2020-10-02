import React, { useState } from "react";
import { CoordinateGrid } from "open-math-tools";
import homeIcon from "../../../../content/assets/home-icon.svg";
import { sortAndLabelIcons, stripLabels, isInGrid } from "./cellTowerUtils";
import { getGridUnitPixels } from "./cellTowerUtils";

// TODO: Get this type from the library
type Icon = {
  x: number;
  y: number;
  label?: string;
  key?: string;
  image: string;
  size: number;
};

type Props = {
  closeModal: () => void;
  icons: Icon[];
  gridSide: number;
  setIcons: React.Dispatch<React.SetStateAction<Icon[]>>;

  // TODO: Update these types
  gridProps: any;
  setGridProps: React.Dispatch<React.SetStateAction<any>>;
};

const EditModalContent = ({
  closeModal,
  icons,
  setIcons,
  gridSide,
  gridProps,
  setGridProps,
}: Props) => {
  const [editedIcons, setEditedIcons] = useState(stripLabels(icons));
  const [editedGridProps, setEditedGridProps] = useState(gridProps);

  const { xMax, yMax } = editedGridProps;
  const xTicksNumber = xMax * 2;
  const yTicksNumber = yMax * 2;

  const gridUnitPixels = getGridUnitPixels(gridSide, xMax, yMax);
  const handleIconClick = clickedIcon => {
    const newCoordinates = editedIcons.filter(
      currentIcon =>
        !(currentIcon.x === clickedIcon.x && currentIcon.y === clickedIcon.y)
    );

    setEditedIcons(newCoordinates);
  };
  return (
    <div>
      <button
        onClick={() => {
          closeModal();
        }}
        style={{ position: "absolute", right: "5px", top: "5px" }}
      >
        X
      </button>
      <h4 style={{ marginTop: "1rem" }}>Edit Prototype</h4>
      <p>Click a coordinate to add or remove houses.</p>
      <form>
        <label>X Max</label>
        <input
          type="number"
          min={1}
          max={100}
          value={xMax}
          onChange={event => {
            const value = event.target.value;
            setEditedGridProps({ ...editedGridProps, xMax: value });
          }}
        ></input>

        <label>Y Max</label>
        <input
          type="number"
          min={1}
          max={100}
          value={yMax}
          onChange={event => {
            const value = event.target.value;
            setEditedGridProps({ ...editedGridProps, yMax: value });
          }}
        ></input>
      </form>
      <CoordinateGrid
        id="EditableGrid"
        gridHeight={gridUnitPixels * yMax}
        gridWidth={gridUnitPixels * xMax}
        addableIcon={{
          image: homeIcon,
          size: 20,
          onAddIcon: icon => {
            setEditedIcons([...editedIcons, icon]);
          },
        }}
        activeIcons={editedIcons}
        onIconClick={handleIconClick}
        xDomain={[-xMax, xMax]}
        yDomain={[-yMax, yMax]}
        xTicksNumber={xTicksNumber}
        yTicksNumber={yTicksNumber}
      />

      <button
        style={{ display: "block" }}
        onClick={() => {
          const editedIconsInGrid = editedIcons.filter(icon =>
            isInGrid(xMax, yMax, icon)
          );
          setIcons(sortAndLabelIcons(editedIconsInGrid));
          setGridProps(editedGridProps);
          closeModal();
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditModalContent;
