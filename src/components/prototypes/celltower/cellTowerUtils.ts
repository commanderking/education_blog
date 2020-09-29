import _ from "lodash";

export const sortAndLabelIcons = coordinates => {
  const houseIcons = _.sortBy(coordinates, ["y", "x"])
    .slice()
    // we want descending sort, _.sortBy default to ascending
    .reverse()
    .map((coordinate, index) => {
      return {
        ...coordinate,
        label: String.fromCharCode(65 + index),
      };
    });
  return houseIcons;
};

export const stripLabels = icons => {
  return icons.map(icon => _.omit(icon, "label"));
};

// If user wants uneven coordinate grid, makes sure each unit is the same height and width
export const getGridUnitPixels = (
  gridSide: number,
  xMax: number,
  yMax: number
) => {
  const x = Number(xMax);
  const y = Number(yMax);

  if (x > y) {
    return gridSide / x;
  }

  return gridSide / y;
};
