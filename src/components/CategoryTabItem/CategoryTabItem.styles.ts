import { StyleSheet } from "react-native";
import AppThemes from "../../utils/AppThemes";

const styles = StyleSheet.create({
  btn: {
    fontWeight: "bold",
    ...AppThemes.FONTS.body,
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  btnDefault: {
    color: AppThemes.COLORS.primary80,
    backgroundColor: AppThemes.COLORS.primary20,
  },
  btnSelected: {
    color: AppThemes.COLORS.white,
    backgroundColor: AppThemes.COLORS.primary100,
  },
});

export default styles;
