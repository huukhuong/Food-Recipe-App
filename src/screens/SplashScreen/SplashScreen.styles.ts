import { Dimensions, StyleSheet } from "react-native";
import AppThemes from "../../utils/AppThemes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: AppThemes.SIZES.width,
    height: '100%',
    resizeMode: "stretch",
  },
  containerHeader: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerCenter: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerFooter: {
    flex: 0.87,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerText: {
    color: AppThemes.COLORS.white,
    ...AppThemes.FONTS.h3,
    fontWeight: "bold",
    marginTop: 20,
  },
  titleText: {
    fontWeight: "bold",
    ...AppThemes.FONTS.largeTitle,
    color: AppThemes.COLORS.white,
    textAlign: "center",
  },
  descriptionText: {
    marginTop: 20,
    ...AppThemes.FONTS.h3,
    color: AppThemes.COLORS.white2,
    textAlign: "center",
  },
});

export default styles;
