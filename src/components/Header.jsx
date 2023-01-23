import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name="bars" size={24} color="#000" />
      </View>
      <Text style={styles.text}>Home</Text>
      <View>
        <Image
          style={styles.imageProfile}
          source={require("../../assets/images/user.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "space-mono",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: "center",
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
