import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#fff",
  white2: "#F2F2F2",
  black: "#000",
  gray1: "#484848",
  gray2: "#797979",
  gray3: "#a9a9a9",
  gray4: "#d9d9d9",
  primary100: "#129575",
  primary80: "#71b1a1",
  primary60: "#afd3ca",
  primary40: "#dbebe7",
  primary20: "#f6faf9",
  secondary100: "#ff9c00",
  secondary80: "#ffa61a",
  secondary60: "#ffba4d",
  secondary40: "#ffce80",
  secondary20: "#ffe1b3",
  rating: "#ffad30",
  warning: "#FD3654",
  warning40: "#FFE1E7",
  transparent: "transparent",
};
export const SIZES = {
  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 11,
  body: 16,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle },
  h1: { fontSize: SIZES.h1, lineHeight: 45 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 27 },
  h4: { fontSize: SIZES.h4, lineHeight: 24 },
  h5: { fontSize: SIZES.h5, lineHeight: 21 },
  h6: { fontSize: SIZES.h6, lineHeight: 27 },
  body: { fontSize: SIZES.body, lineHeight: 24 },
};

const AppThemes = { COLORS, SIZES, FONTS };

export default AppThemes;
