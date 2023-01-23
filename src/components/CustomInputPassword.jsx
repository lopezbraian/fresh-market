import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Eye from "../assets/icons/Eye";

import { Controller } from "react-hook-form";

const CustomInputPassword = ({ placeholder, name, control }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholderTextColor={"#d3d3d3"}
            placeholder={placeholder}
            onBlur={onBlur}
            style={styles.input}
            value={value}
            onChangeText={onChange}
            secureTextEntry={!showPassword}
          />
        )}
      />
      <TouchableOpacity
        style={styles.btnShow}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Eye />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  btnShow: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  input: {
    height: 45,
    width: 312,
    borderWidth: 2,
    borderColor: "#82CD47",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 24,
  },
});

export default CustomInputPassword;
