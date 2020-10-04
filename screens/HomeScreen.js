import React from "react";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";

import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/events/on_going_events/unbox_4.jpg")}
      />
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/events/on_going_events/unbox_4.jpg")}
      >
        <TouchableOpacity onPress={() => props.navigation.navigate("GalleryS")}>
          <View style={styles.view}>
            <Text style={{ marginRight: 15, fontSize: 18 }}>View</Text>
            <Ionicons
              style={{ marginTop: 5 }}
              name="md-arrow-forward"
              color="#cc0c0c"
              size={18}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/images/myImages/team3.jpeg")}
      >
        <TouchableOpacity onPress={() => props.navigation.navigate("TeamS")}>
          <View style={styles.view}>
            <Text style={{ marginRight: 15, fontSize: 18 }}>View</Text>
            <Ionicons
              style={{ marginTop: 5 }}
              name="md-arrow-forward"
              color="#cc0c0c"
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
            <Text style={{ marginRight: 15, fontSize: 18 }}>View</Text>
            <Ionicons
              style={{ marginTop: 5 }}
              name="md-arrow-forward"
              color="#cc0c0c"
              size={18}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.icons}>
        <FontAwesome5
          onPress={() =>
            Linking.openURL(
              "https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ"
            )
          }
          name="spotify"
          size={40}
          color="black"
        />
        <FontAwesome5
          onPress={() =>
            Linking.openURL(
              "https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7"
            )
          }
          name="instagram"
          size={40}
          style={{ color: "black" }}
        />
        <MaterialIcons
          onPress={() =>
            Linking.openURL(
              "https://forums.oneplus.com/forums/student-community/"
            )
          }
          name="forum"
          size={40}
          style={{ color: "black" }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 40,
    backgroundColor: '#db5c5c'
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
