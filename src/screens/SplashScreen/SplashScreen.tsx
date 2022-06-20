import { View, Text, Image, StatusBar } from "react-native";
import React, { FC, useEffect } from "react";
import { INavigationProps } from "../../navigation/INavigationProps";
import styles from "./SplashScreen.styles";

const SplashScreen: FC<INavigationProps> = ({ navigation, route }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={"transparent"} />
      <Image
        source={require("../../assets/img/bg_splash.png")}
        style={styles.background} />

      <View style={styles.containerHeader}>
        <Image source={require("../../assets/icons/ic_splash.png")} />
        <Text style={styles.headerText}>
          100K+ Premium Recipe
        </Text>
      </View>

      <View style={styles.containerCenter}>
        <Text style={styles.titleText}>
          {"Get\nCooking"}
        </Text>
        <Text style={styles.descriptionText}>
          Simple way to find Tasty Recipe
        </Text>
      </View>

      <View style={styles.containerFooter}>

      </View>
    </View>
  );
};

export default SplashScreen;
