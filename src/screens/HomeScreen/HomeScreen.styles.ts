import { StyleSheet } from "react-native";
import AppThemes from "../../utils/AppThemes";

const paddingHorizontal = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppThemes.COLORS.white,
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
    paddingHorizontal: paddingHorizontal,
  },
  headerLeft: {
    flex: 1,
  },
  headerTextGreeting: {
    ...AppThemes.FONTS.h2,
    fontWeight: "bold",
    color: AppThemes.COLORS.black,
  },
  headerTextDescription: {
    ...AppThemes.FONTS.h4,
    color: AppThemes.COLORS.gray3,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 12,
    resizeMode: "stretch",
  },
  searchBar: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: paddingHorizontal,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: AppThemes.COLORS.gray4,
    borderRadius: 10,
    height: 45,
  },
  searchIcon: {
    marginStart: 15,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingEnd: 5,
    fontSize: AppThemes.SIZES.h5,
  },
  btnSearchFilter: {
    marginStart: 24,
    width: 45,
    height: 45,
    backgroundColor: AppThemes.COLORS.primary100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFilter: {
    width: 22,
    height: 22,
  },
  categoriesWrapper: {
    paddingTop: 20,
    paddingBottom: 40
  },
});

export default styles;
