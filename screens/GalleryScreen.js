import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

import Colors from "../components/Colors";
const { width, height } = Dimensions.get("window");

const GalleryScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subHeader2}>Down  The  Lane.</Text>
      </View>
      <View>
        <View style={styles.container1}>
          <View style={styles.small}>
            <Image
              source={require("../assets/images/placeHolder/11.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
            <Image
              source={require("../assets/images/placeHolder/22.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
          </View>
          <View style={styles.big}>
            <Image
              source={require("../assets/images/placeHolder/33.jpg")}
              style={{ height: 300, width: width - width / 2.7, margin: 5 }}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.big}>
            <Image
              source={require("../assets/images/placeHolder/44.jpg")}
              style={{ height: 300, width: width - width / 2.7, margin: 5 }}
            />
          </View>
          <View style={styles.small}>
            <Image
              source={require("../assets/images/placeHolder/55.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
            <Image
              source={require("../assets/images/placeHolder/66.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.small}>
            <Image
              source={require("../assets/images/placeHolder/77.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
            <Image
              source={require("../assets/images/placeHolder/88.jpg")}
              style={{ height: 150, width: "100%", margin: 5 }}
            />
          </View>
          <View style={styles.big}>
            <Image
              source={require("../assets/images/placeHolder/99.png")}
              style={{ height: 300, width: width - width / 2.7, margin: 5 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  subHeader2: {
    color: Colors.primary,
    paddingHorizontal: 10,
    fontSize: 30,
    paddingBottom: 17,
    fontFamily: "roman",
  },
  container: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.primary,
    marginLeft: 20,
    marginVertical: 20,
    paddingTop: 5,
  },
  container1: {
    height: 300,
    width: width,
    flexDirection: "row",
    marginBottom: 5,
  },
  big: {
    width: width - width / 2.7,
    paddingHorizontal: 4,
    paddingVertical: 2,
    overflow: "hidden",
  },
  small: {
    width: width / 3,
    padding: 2,
    overflow: "hidden",
  },
});

export default GalleryScreen;
