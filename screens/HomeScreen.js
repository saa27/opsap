import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Linking,
  Animated,
} from "react-native";

import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../components/Colors";

const { width, height } = Dimensions.get("window");

const HomeScreen = (props) => {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; //from the official docs

    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  return (
    <ScrollView style={styles.screen}>
      <FadeInView>
        <View style={styles.container}>
          <Text style={styles.subHeader2}>
            OnePlus{"\n"}Student Ambassador{"\n"}Program'20
          </Text>
          <Text style={styles.about}>
            OnePlus Student Ambassador Program is a campus connect program that
            aims to form a community of like -minded students across India. The
            program facilitates and nurtures the skills to contribute to your
            career growth.{"\n"}
            {/* {"\n"} We want to empower, strengthen and groom select students across
          India who will serve as OnePlus community specialists, brand
          evangelists and experts in their respective institutions. */}
          </Text>
        </View>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/myImages/gallery.jpeg")}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("GalleryS")}
          >
            <View style={styles.view}>
              <Text style={styles.viewText}>A Glimpse</Text>
              <Ionicons
                style={{ marginTop: 5 }}
                name="md-arrow-forward"
                color={Colors.primary}
                size={18}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/myImages/teamF.jpeg")}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("TeamS")}>
            <View style={styles.view}>
              <Text style={styles.viewText}>Our Team</Text>
              <Ionicons
                style={{ marginTop: 5 }}
                name="md-arrow-forward"
                color={Colors.primary}
                size={18}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/events/past_events/campus_soop_7.jpg")}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("EventS")}>
            <View style={styles.view}>
              <Text style={styles.viewText}>Have a Look</Text>
              <Ionicons
                style={{ marginTop: 5 }}
                name="md-arrow-forward"
                color={Colors.primary}
                size={18}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground
          style={styles.imageBg}
          source={require("../assets/images/myImages/collabidea2.jpg")}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("CollabS")}
          >
            <View style={styles.view}>
              <Text style={styles.viewText}>Collab With Us</Text>
              <Ionicons
                style={{ marginTop: 5 }}
                name="md-arrow-forward"
                color={Colors.primary}
                size={18}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.bottom}>
          <View style={styles.caption}>
            <Text style={{ fontFamily: "roman", letterSpacing: 1 }}>
              Like what you see? You'll love us here :
            </Text>
          </View>
          <View style={styles.icons}>
            <FontAwesome5
              onPress={() =>
                Linking.openURL(
                  "https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ"
                )
              }
              name="spotify"
              size={35}
              color="black"
            />
            <FontAwesome5
              onPress={() =>
                Linking.openURL(
                  "https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7"
                )
              }
              name="instagram"
              size={35}
              style={{ color: "black" }}
            />
            <MaterialIcons
              onPress={() =>
                Linking.openURL(
                  "https://forums.oneplus.com/forums/student-community/"
                )
              }
              name="forum"
              size={35}
              style={{ color: "black" }}
            />
          </View>
        </View>
      </FadeInView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subHeader2: {
    color: Colors.primary,
    paddingHorizontal: 10,
    fontSize: 35,
    paddingBottom: 17,
    fontFamily: "roman",
  },
  about: {
    color: "gray",
    paddingHorizontal: 15,
    fontSize: 20,
    paddingBottom: 17,
    fontFamily: "roman",
  },
  container: {
    // borderLeftWidth: 5,
    // borderLeftColor: Colors.primary,
    marginLeft: 20,
    marginVertical: 20,
    paddingTop: 5,
    backgroundColor: Colors.accent,
  },
  viewText: {
    marginRight: 15,
    fontSize: 18,
    fontFamily: "roman",
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  caption: {
    alignItems: "center",
    marginBottom: 20,
  },
  bottom: {
    padding: 40,
    backgroundColor: "#db5c5c",
  },
  view: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "flex-end",
  },
  imageBg: {
    height: 550,
    width: width,
    marginBottom: 15,
    opacity: 0.9,
    backgroundColor: "#282828",
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
