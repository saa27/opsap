import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import Colors from "../components/Colors";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        onPress={() => {
          props.navigation.navigate("TeamS");
        }}
        title="Click"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

// HomeScreen.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Pollytorix",
//   };
// };

export default HomeScreen;
