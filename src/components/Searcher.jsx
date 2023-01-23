import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Searcher = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={16} color="#868889" />
      <TextInput
        placeholderTextColor={"#868889"}
        style={styles.input}
        onChangeText={setValue}
        placeholder="Search keywords"
        value={value}
      />
      <FontAwesome name="filter" size={16} color="#868889" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F4F5F9",
    padding: 12,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 16,
    color: "#000",
    marginRight: 12,
  },
});

export default Searcher;
