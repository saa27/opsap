import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const EventReelScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>EventReelScreen</Text>
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



export default EventReelScreen;
