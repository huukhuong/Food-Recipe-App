import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import styles from "./HomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { INavigationProps } from "../../navigation/INavigationProps";
import AppThemes from "../../utils/AppThemes";
import CategoryTabItem from "../../components/CategoryTabItem/CategoryTabItem";

const fakeData = {
  categories: [
    "All",
    "Vietnam",
    "Chinese",
    "Indian",
    "Cambodia",
    "Italian",
  ],
};

const HomeScreen: FC<INavigationProps> = ({ navigation, route }) => {

  const [categorySelected, setCategorySelected] = useState<number>(0);
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setGreeting("Good morning");
    } else if (curHr < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  const onPressCategoryItem = (index: number) => {
    setCategorySelected(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={AppThemes.COLORS.white}
        barStyle={"dark-content"} />
      {/* Header with Greeting */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTextGreeting}>
            {greeting}
          </Text>
          <Text style={styles.headerTextDescription}>
            What are you cooking today?
          </Text>
        </View>
        <Image
          style={styles.avatarImage}
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" }} />
      </View>

      {/* Search bar wrapper */}
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

      {/* Categories list */}
      <View>
        <FlatList
          style={styles.categoriesWrapper}
          data={fakeData.categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) =>
            <CategoryTabItem
              onPress={() => onPressCategoryItem(index)}
              name={item}
              index={index}
              isSelected={index === categorySelected} />
          } />
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
