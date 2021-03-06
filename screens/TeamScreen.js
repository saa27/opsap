import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../components/Colors";

const TeamScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      {/* <Text style={styles.header}>Student Ambassadors</Text> */}
      <View style={styles.container}>
        <Text style={styles.subHeader1}>Meet Our</Text>
        <Text style={styles.subHeader2}>Student Ambassadors.</Text>
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:v-atishay.jain@oneplus.com")}
          >
            <View>
              <View style={styles.card}>
                <Image
                  source={require("../assets/images/team/AtishayJain.jpeg")}
                  style={{ height: 210, width: 170 }}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.names}>Atishay Jain</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/AdvaitKarmakar.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Advait Karmakar</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/DevSabharwal.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Dev Sabharwal</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/DhruvShetty.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Dhruv Shetty</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/KaashviSaxena.jpeg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Kaashvi Saxena</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/PratyushAgarwal.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Pratyush Agarwal</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/SarthakSoral.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Sarthak Soral</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.card}>
              <Image
                source={require("../assets/images/team/SuparnaMukherji.jpg")}
                style={{ height: 210, width: 170 }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.names}>Suparna Mukherjee</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 10,
    padding: 10,
    paddingBottom: 0,
  },
  subHeader1: {
    color: Colors.primary,
    paddingHorizontal: 10,
    fontSize: 25,
    fontFamily: "medium",
  },
  subHeader2: {
    color: "#990505",
    paddingHorizontal: 10,
    fontSize: 30,
    paddingBottom: 17,
    fontFamily: "thin",
  },
  container: {
    borderLeftWidth: 5,
    borderLeftColor: "#990505",
    marginLeft: 20,
    marginVertical: 20,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
  card: {
    elevation: 10,
    borderRadius: 10,
    height: 270,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: 20,
  },
  titleContainer: {
    height: 60,
    marginLeft: 10,
    justifyContent: "center",
    // alignItems: "center",
  },
  names: {
    fontSize: 16,
    fontFamily: "roman",
    letterSpacing: 1,
  },
});

export default TeamScreen;
