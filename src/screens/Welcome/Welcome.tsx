import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import getStartedImg from "../../../assets/images/get-started.png";
import { RootTabScreenProps } from "../../types";

function Welcome({ navigation }: RootTabScreenProps<"Welcome">) {
  return (
    <View style={styles.container}>
      <Image source={getStartedImg} />
      <View style={styles.containerText}>
        <Text style={styles.title}>Grocery Shop</Text>
        <Text style={styles.subtitle}>at your door</Text>
        <Text style={styles.body}>
          The easiest way to buy your grocery shopping
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.txtBtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const textCommon = {
  color: "#4F504E",
  margin: 0,
  marginBottom: 10,
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#82CD47",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#212220",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "normal",
    fontFamily: "Inter-Black",
    marginTop: 11,
  },
  txtBtn: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 21,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    border: "1px solid red",
    padding: 50,
    paddingLeft: 60,
    paddingRight: 60,
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    lineHeight: 33,
    fontFamily: "Inter-Black",
    ...textCommon,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: "normal",
    fontFamily: "Roboto",
    ...textCommon,
  },
  body: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Roboto",
    ...textCommon,
    color: "#212220",
  },
});

export default Welcome;
