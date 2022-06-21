import React from "react";
import { INavigationProps } from "../../navigation/INavigationProps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import styles from "./SavedScreen.styles";

const SavedScreen: React.FC<INavigationProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Saved</Text>
    </SafeAreaView>
  );
};

export default SavedScreen;
