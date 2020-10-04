import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import OnePlusNavigator from "./navigation/OnePlusNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "black" : require("./assets/fonts/NeueHaasDisplay-Black.otf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    fetchFonts().then(() => setFontLoaded(true));
    return null;
  }
  return <OnePlusNavigator />;
}
