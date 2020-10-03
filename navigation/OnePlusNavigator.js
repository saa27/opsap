import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform, Text } from "react-native";

import { FontAwesome5, Ionicons,MaterialIcons } from "@expo/vector-icons";
import Colors from "../components/Colors";

import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import TeamScreen from "../screens/TeamScreen";
import EventReelScreen from "../screens/EventReelScreen";
import CollaborateScreen from "../screens/CollaborateScreen";

const defaultNavOptions = {
  headerTitle: "One Plus",
  headerShown: true,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const first = createStackNavigator(
  {
    HomeS: HomeScreen,
    GalleryS: GalleryScreen,
    TeamS: TeamScreen,
    EventS: EventReelScreen,
    CollabS: CollaborateScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const second = createStackNavigator(
  {
    GalleryS: GalleryScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
const third = createStackNavigator(
  {
    TeamS: TeamScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
const fourth = createStackNavigator(
  {
    EventS: EventReelScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
const fifth = createStackNavigator(
  {
    CollabS: CollaborateScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenConfig = {
  Home: {
    screen: first,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#282828",
      tabBarLabel: Platform.OS === "android" ? <Text>Home</Text> : "Home",
    },
  },
  Gallery: {
    screen: second,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-photos" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#282828",
      tabBarLabel: Platform.OS === "android" ? <Text>Gallery</Text> : "Search",
    },
  },
  Team: {
    screen: third,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-people" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#282828",
      tabBarLabel:
        Platform.OS === "android" ? <Text>Team</Text> : "Favourites",
    },
  },
  EventReel: {
    screen: fourth,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <MaterialIcons name="event" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#282828",
      tabBarLabel:
        Platform.OS === "android" ? <Text>Events</Text> : "Favourites",
    },
  },
  Collaborate: {
    screen: fifth,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <FontAwesome5 name="hands-helping" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#282828",
      tabBarLabel:
        Platform.OS === "android" ? <Text>Collaborate</Text> : "Favourites",
    },
  },
};

const AppNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        //for android like effect
        // defaultNavigationOptions: defaultNavOptions,
        activeColor: Colors.primary,
        inactiveColor: "#a6a6a6",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        //for ios like effect
        // defaultNavigationOptions: defaultNavOptions,
        tabBarOptions: {
          inactiveBackgroundColor: Colors.accent,
          activeBackgroundColor: Colors.primary,
          activeTintColor: Colors.primary,
          inactiveTintColor: "rgba( 10, 10, 10, 0.6)", //temporary colors
          tabStyle: {
            borderColor: "#a6a6a6",
            borderWidth: 1,
          },
          /* labelStyle: {
            fontFamily: 'open-sans',
          }, */
        },
      });

export default createAppContainer(AppNavigator);
