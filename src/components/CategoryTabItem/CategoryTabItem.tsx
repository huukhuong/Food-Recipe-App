import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./CategoryTabItem.styles";

interface props {
  name: string,
  index: number,
  isSelected: boolean,
  onPress: any
}

const CategoryTabItem: React.FC<props> = ({ name, index, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}>
      <Text style={[
        { marginLeft: index == 0 ? 24 : 0 },
        styles.btn,
        isSelected ?
          styles.btnSelected
          :
          styles.btnDefault]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryTabItem;
