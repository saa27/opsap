import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HeaderImage = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require('../assets/logos/SAPlogo-02.png')}
        style={{
          width: 120,
          height: 40,
          marginLeft: 15
        }}
      />
    </View>
  );
};

export default HeaderImage;