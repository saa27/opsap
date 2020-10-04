import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const UpcomingEventScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subHeader2}>Upcoming Events.</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/events/upcoming_events/oxygen_os.jpg")}
          style={{ height: "100%", width: width }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.header}>
          OnePlus 8T: Experience OxygenOS 11 out of the box
        </Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            The OnePlus 8T launch is just a couple weeks away and we'd like to
            share some exciting news with you ahead of its arrival. We're very
            pleased to announce that the upcoming OnePlus 8T flagship will
            launch with OxygenOS 11 out of the box. {"\n"}And on top of that,
            aside from Google’s own products, the OnePlus 8T will be the first
            global smartphone to launch with Android 11. With OxygenOS, we’ve
            always focused on giving you the fastest and smoothest flagship
            experience possible. {"\n"}
            {"\n"}Now, with the upcoming OnePlus 8T and OxygenOS 11, you’ll have
            what we feel is the best combination of hardware and software,
            letting you enjoy improved one-handed gestures for easier navigation
            and an overall more refined experience thanks to the 120Hz Fluid
            Display.
          </Text>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/events/upcoming_events/warp_charge.png")}
          style={{ height: "100%", width: width }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.header}>
          OnePlus Warp Charge 65: A Day's Power in 15 Minutes
        </Text>
        <View style={styles.description}>
          <Text style={styles.text}>
            After shedding some light on the OnePlus 8T’s flat 120Hz Fluid
            Display last Tuesday, today, I’m thrilled to share more about an
            exciting new technology that will make its debut on the upcoming
            flagship – Warp Charge 65.{"\n"}{"\n"} Warp Charge 65 is more than just an
            iteration of our signature fast charging technology. It’s an
            entirely new and convenient experience, that is capable of filling
            up the OnePlus 8T’s 4500mAh battery fully in 39 minutes, and almost
            58% in just 15 minutes. After all, charging shouldn’t tie you down
            but contribute to a smoother digital experience.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  imgContainer: {
    height: 200,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  textCont: {
    padding: 30,
  },
  header: {
    fontSize: 25,
    lineHeight: 30,
    fontFamily: "roman",
    marginBottom: 20,
    color: "#C61422",
  },
  text: {
    fontFamily: "thin",
    lineHeight: 18,
    fontSize: 15,
  },
  description: {
    borderLeftWidth: 1,
    borderLeftColor: "#C61422",
    borderBottomWidth: 1,
    borderBottomColor: "#C61422",
    paddingLeft: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
});
export default UpcomingEventScreen;
