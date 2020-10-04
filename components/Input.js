// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { TextInput } from "react-native-paper";

// const Input = (props) => {
//   const [value, setValue] = useState("");

//   const ({text}) = props;

//   const textChangeHandler = (text) => {
//     setValue(text);
//   };
//   return (
//     <View style={styles.formControl}>
//       <Text style={styles.label}>{props.label}</Text>
//       <TextInput
//         keyboardType="default"
//         style={styles.input}
//         value={value}
//         onChangeText={textChangeHandler}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   formControl: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   label: {
//     fontFamily: "open-sans-bold",
//     marginVertical: 8,
//   },
//   input: {
//     marginHorizontal: 2,
//     paddingVertical: 5,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     fontFamily: "open-sans",
//   },
// });

// export default Input;
