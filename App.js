import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import OnePlusNavigator from "./navigation/OnePlusNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
    "black": require("./assets/fonts/NeueHaasDisplay-Black.otf"),
    "blackItalic": require("./assets/fonts/NeueHaasDisplay-BlackItalic.otf"),
    "thin": require("./assets/fonts/NeueHaasDisplay-Thin.otf"),
    "xthin": require("./assets/fonts/NeueHaasDisplay-XThin.otf"),
    "medium": require("./assets/fonts/NeueHaasDisplay-Mediu.otf"),
    "roman": require("./assets/fonts/NeueHaasDisplay-Roman.otf"),
    // "black": require("./assets/fonts/NeueHaasDisplay-Black.otf"),
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
