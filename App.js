import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

import OnePlusNavigator from "./navigation/OnePlusNavigator";
import { AppLoading } from "expo";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "black": require("./assets/fonts/NeueHaasDisplay-Black.woff"),
//     "italic": require("./assets/fonts/NeueHaasDisplay-BlackItalic.woff"),
//   });
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
  return <OnePlusNavigator />;
}
