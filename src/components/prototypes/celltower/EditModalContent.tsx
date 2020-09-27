import React, { useState } from "react";
import { CoordinateGrid } from "open-math-tools";
import homeIcon from "../../../../content/assets/home-icon.svg";
import { sortAndLabelIcons, stripLabels } from "./cellTowerUtils";
import * as test from "open-math-tools";

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
};

console.log("test", test);

const EditModalContent = ({ closeModal, icons, setIcons, gridSide }: Props) => {
  const [editedIcons, setEditedIcons] = useState(stripLabels(icons));

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
      <CoordinateGrid
        id="EditableGrid"
        gridHeight={gridSide}
        gridWidth={gridSide}
        addableIcon={{
          image: homeIcon,
          size: 20,
          onAddIcon: icon => {
            setEditedIcons([...editedIcons, icon]);
          },
        }}
        activeIcons={editedIcons}
        onIconClick={handleIconClick}
      />
      <button
        style={{ display: "block" }}
        onClick={() => {
          setIcons(sortAndLabelIcons(editedIcons));
          closeModal();
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditModalContent;
