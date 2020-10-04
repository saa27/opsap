import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const CollaborateScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subHeader2}>Collaborate With Us.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  subHeader2: {
    color: "#C61422",
    paddingHorizontal: 10,
    fontSize: 30,
    paddingBottom: 17,
    fontFamily: "roman",
  },
  container: {
    borderLeftWidth: 5,
    borderLeftColor: "#C61422",
    marginLeft: 20,
    marginVertical: 20,
    paddingTop: 5,
  },
});
export default CollaborateScreen;
