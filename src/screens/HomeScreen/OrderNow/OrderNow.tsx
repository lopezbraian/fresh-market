import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const OrderNow = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/images/group-fruit.png")} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Exclusive Offer</Text>
        <Text style={styles.text}>Get 30% Off On fruit</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#86C649",
    height: 121,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginTop: 24,
  },
  containerText: {
    marginLeft: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    width: 106,
    height: 28,
    backgroundColor: "#F55959",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 5,
  },
  textBtn: {
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default OrderNow;
