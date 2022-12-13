import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const navigate = (route) => navigation.navigate(route);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
