import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "#fff",
  white2: '#F2F2F2',
  black: "#020202",

  transparent: 'transparent',
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
  height
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