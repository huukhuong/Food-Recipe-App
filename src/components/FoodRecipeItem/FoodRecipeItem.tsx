import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./FoodRecipeItem.styles";

interface props {
  index: number,
  image: string,
  name: string,
  description: string,
  isSaved: boolean,
  onPress: any
}

const FoodRecipeItem: React.FC<props> = ({ index, image, name, description, isSaved, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.cardWrapper, { marginStart: index == 0 ? 14 : 0 }]}
      activeOpacity={1}
      onPress={onPress}>
      <Image
        source={{ uri: image }}
        style={styles.foodImage} />
      <View style={styles.blurImage} />
      <View style={styles.contentWrapper}>
        <Text
          style={styles.cardTitle}
          numberOfLines={1}>
          {name}
        </Text>
        <Text
          style={styles.cardDescription}
          numberOfLines={3}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodRecipeItem;
