import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({ placeholder, name, control, secureTextEntry }) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholderTextColor={"#d3d3d3"}
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CustomInput;
