import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import pictures from "../components/data";

const { width, height } = Dimensions.get("window");

const EventReelScreen = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [pictureIndex, setPictureIndex] = useState(0);
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setPictureIndex(index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);
  const slider = useRef(null);
  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (pictureIndex + 1) * width,
    });
  };

  const goPrevious = () => {
    slider.current.scrollToOffset({
      offset: (pictureIndex - 1) * width,
    });
  };
  const renderPictureItem = ({ item, index }) => {
    return (
      <View style={styles.imgContainer}>
        <ImageBackground
          source={item.image}
          style={{ height: "100%", width: width }}
          resizeMode="contain"
        >
          <View
            style={{
              justifyContent: "space-between",
              marginVertical: 100,
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <MaterialIcons
              onPress={goPrevious}
              name="keyboard-arrow-left"
              size={40}
            />
            <MaterialIcons
              onPress={goNext}
              name="keyboard-arrow-right"
              size={40}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <ScrollView style={styles.screen}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={pictures}
        renderItem={renderPictureItem}
        keyExtractor={(item) => item.id}
        ref={slider}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <View style={styles.container}>
        <Text style={styles.subHeader1}>Events.</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Upcoming")}>
        <View style={styles.view}>
          <AntDesign
            style={{ marginTop: 5, marginRight: 15 }}
            name="doubleright"
            color="darkgray"
            size={25}
          />
          <Text style={styles.text}>Upcoming Events</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Ongoing")}>
        <View style={styles.view}>
          <AntDesign
            style={{ marginTop: 5, marginRight: 15 }}
            name="doubleright"
            color="darkgray"
            size={25}
          />
          <Text style={styles.text}>On-going Events</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Past")}>
        <View style={styles.view}>
          <AntDesign
            style={{ marginTop: 5, marginRight: 15 }}
            name="doubleright"
            color="darkgray"
            size={25}
          />
          <Text style={styles.text}>Past Events</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  imgContainer: {
    height: 250,
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  subHeader1: {
    color: "#c71010",
    paddingHorizontal: 10,
    fontSize: 40,
    fontFamily: "roman",
  },
  subHeader2: {
    color: "#990505",
    paddingHorizontal: 10,
    fontSize: 30,
    paddingBottom: 17,
    fontFamily: "open-sans",
  },
  container: {
    borderLeftWidth: 5,
    borderLeftColor: "#990505",
    marginLeft: 20,
    marginVertical: 20,
  },
  view: {
    margin: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    padding: 10,
    borderBottomColor: "#990505",
    borderBottomWidth: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 0, 12, 0.4)",
  },
  text: {
    fontFamily: "roman",
    fontSize: 18,
  },
});

export default EventReelScreen;
