import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.primary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: Colors.light,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
