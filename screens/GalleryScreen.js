import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GalleryScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GalleryScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});



export default GalleryScreen;
