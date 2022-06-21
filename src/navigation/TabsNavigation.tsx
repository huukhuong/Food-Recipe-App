import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Image, StyleSheet } from "react-native";
import SavedScreen from "../screens/SavedScreen/SavedScreen";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={require("../assets/icons/ic_home_focused.png")}
                     style={styles.iconBottom} />
              :
              <Image source={require("../assets/icons/ic_home.png")}
                     style={styles.iconBottom} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={require("../assets/icons/ic_saved_focused.png")}
                     style={styles.iconBottom} />
              :
              <Image source={require("../assets/icons/ic_saved.png")}
                     style={styles.iconBottom} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={require("../assets/icons/ic_notification_focused.png")}
                     style={styles.iconBottom} />
              :
              <Image source={require("../assets/icons/ic_notification.png")}
                     style={styles.iconBottom} />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfileScreen"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ?
              <Image source={require("../assets/icons/ic_user_focused.png")}
                     style={styles.iconBottom} />
              :
              <Image source={require("../assets/icons/ic_user.png")}
                     style={styles.iconBottom} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconBottom: {
    width: 24,
    height: 24,
  },
});

export default TabsNavigation;
