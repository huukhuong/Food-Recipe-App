import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useEffect } from "react";
import styles from "./HomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { INavigationProps } from "../../navigation/INavigationProps";
import AppThemes from "../../utils/AppThemes";

const HomeScreen: FC<INavigationProps> = ({ navigation, route }) => {

  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={AppThemes.COLORS.white}
        barStyle={"dark-content"} />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTextHello}>
            Good morning
          </Text>
          <Text style={styles.headerTextDescription}>
            What are you cooking today?
          </Text>
        </View>
        <Image
          style={styles.avatarImage}
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" }} />
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchWrapper}>
          <Image
            source={require("../../assets/icons/ic_search.png")}
            style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder={"Search recipe"} />
        </View>
        <TouchableOpacity
          style={styles.btnSearchFilter}
          activeOpacity={.65}>
          <Image
            style={styles.iconFilter}
            source={require("../../assets/icons/ic_filter.png")} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
