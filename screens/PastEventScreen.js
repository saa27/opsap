import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

const PastEventScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subHeader2}>Past Events.</Text>
      </View>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/events/past_events/campus_soop_7.jpg")}
      ></ImageBackground>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/events/past_events/campus_soop_8.jpg")}
      ></ImageBackground>
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
  imageBg: {
    height: 550,
    width: width,
    // marginBottom: 15,
  },
});
export default PastEventScreen;
