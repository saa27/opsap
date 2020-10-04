import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../components/Colors";

const CollaborateScreen = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idea, setIdea] = useState("");

  const nameChangeHandler = (text) => {
    setName(text);
  };
  const lastNameChangeHandler = (text) => {
    setLastName(text);
  };
  const emailChangeHandler = (text) => {
    setEmail(text);
  };
  const phoneChangeHandler = (text) => {
    setPhone(text);
  };
  const ideaChangeHandler = (text) => {
    setIdea(text);
  };

  const submitHandler = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setIdea("");
    Alert.alert("Submitted Successfully", "Thank You!", ["OK"]);
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subHeader2}>Collaborate With Us.</Text>
      </View>
      <View>
        <View style={styles.formControl}>
          <Text style={styles.label}>First Name :</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={name}
            onChangeText={nameChangeHandler}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Last Name :</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={lastName}
            onChangeText={lastNameChangeHandler}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>E- mail :</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={email}
            onChangeText={emailChangeHandler}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Contact :</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            value={phone}
            onChangeText={phoneChangeHandler}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Collaboration Idea:</Text>
          <TextInput
            placeholder="Tell us about your amazing idea in about 100-150 words!"
            numberOfLines={10}
            keyboardType="default"
            style={{ ...styles.input, textAlignVertical: "top" }}
            value={idea}
            onChangeText={ideaChangeHandler}
            multiline
          />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={submitHandler}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
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
  formControl: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 20,
    marginLeft: 20,
  },
  label: {
    fontFamily: "roman",
    marginVertical: 8,
    fontSize: 20,
  },
  input: {
    width: 360,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    fontFamily: "roman",
  },
  button: {
    margin: 20,
    marginHorizontal: 110,
    padding: 5,
    alignItems: "center",
    marginBottom: 40,
    backgroundColor: "white",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "roman",
    color: Colors.primary,
  },
});
export default CollaborateScreen;
