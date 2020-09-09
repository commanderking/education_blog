import React from "react";
import { CoordinateGrid } from "open-math-tools";
import homeIcon from "../../../../content/assets/home-icon.svg";
import * as test from "open-math-tools";

console.log("test", test);
type Props = {
  closeModal: any;
  icons: { x: number; y: number }; // export coordinate type from library
};

const EditModalContent = ({ closeModal, icons }: Props) => {
  return (
    <div>
      <h4>Edit Prototype</h4>
      {/* <CoordinateGrid
        addableIcon={{
          iconImage: homeIcon,
          iconSize: 20,
          coordinates: houses,
        }}
      /> */}
      <button onClick={closeModal}>Done</button>
    </div>
  );
};

export default EditModalContent;
