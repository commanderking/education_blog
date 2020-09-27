import React, { useState } from "react";
import { CoordinateGrid } from "open-math-tools";
import homeIcon from "../../../../content/assets/home-icon.svg";
import { sortAndLabelIcons, stripLabels } from "./cellTowerUtils";

type Props = {
  closeModal: any;
  icons: { x: number; y: number }[]; // export coordinate type from library
  gridSide: number;
  setIcons: any;
};

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
