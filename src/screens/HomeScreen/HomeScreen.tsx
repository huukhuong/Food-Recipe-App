import { StatusBar, Text } from "react-native";
import React, { FC, useEffect } from "react";
import styles from "./HomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { INavigationProps } from "../../navigation/INavigationProps";
import AppThemes from "../../utils/AppThemes";

const HomeScreen: FC<INavigationProps> = ({ navigation, route }) => {

  useEffect(() => {
		console.log(route.params)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={AppThemes.COLORS.black} />


    </SafeAreaView>
  );
};

export default HomeScreen;
