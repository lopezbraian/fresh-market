import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 43,
    width: 312,
    borderRadius: 20,
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: "#82CD47",
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  },
});

export default CustomButton;
