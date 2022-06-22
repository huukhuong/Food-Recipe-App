import { StyleSheet } from "react-native";
import AppThemes from "../../utils/AppThemes";

const styles = StyleSheet.create({
  cardWrapper: {},
  foodImage: {
    width: 200,
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  blurImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 10,
    right: 10,
    borderRadius: 10,
    backgroundColor: AppThemes.COLORS.black,
    opacity: .15,
  },
  contentWrapper: {
    position: "absolute",
    bottom: 8,
    left: 14,
    right: 14,
    backgroundColor: "rgba(0,0,0,.65)",
    zIndex: 1000,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  cardTitle: {
    color: AppThemes.COLORS.white,
    ...AppThemes.FONTS.h2,
    fontWeight: "bold",
    textAlign: "justify",
    marginBottom: 6,
  },
  cardDescription: {
    color: AppThemes.COLORS.white2,
    textAlign: "justify",
  },
  btnBookmark: {
    position: "absolute",
    backgroundColor: AppThemes.COLORS.white,
    top: 10,
    right: 20,
    borderRadius: 100,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkImage: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
});

export default styles;
