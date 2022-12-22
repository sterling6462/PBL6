import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Surface } from "react-native-paper";
import { LogoutSvg } from "../assets/Svg";
import Colors from "../constants/Colors";

const AppHeader = ({ name = "Addd", title, onLogout }) => {
  const LeftView = () => (
    <View style={styles.leftView}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
          Xin chào
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 10,
            color: Colors.label,
          }}
        >
          {" "}
          {name}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 30,
          color: Colors.primaryDark,
          fontWeight: "bold",
        }}
      >
        {title} Screen
      </Text>
    </View>
  );
  const RightView = () => (
    <View style={[styles.view, styles.rightView]}>
      <TouchableOpacity onPress={onLogout}>
        <LogoutSvg width={32} height={32} color={Colors.primaryDark} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Surface style={styles.header}>
      <LeftView />
      <RightView />
    </Surface>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 10,
  },
  view: {
    marginHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  rightView: {
    justifyContent: "flex-end",
  },
  leftView: {
    paddingTop: 10,
  },
});
