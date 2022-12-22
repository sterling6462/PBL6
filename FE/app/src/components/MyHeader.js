import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import { LogoutSvg } from "../assets/Svg";
import Colors from "../constants/Colors";

const IconSize = 24;

const AppHeader = ({ style, name = "Addd", title }) => {
  const LeftView = () => (
    <View style={styles.header}>
      <View>
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
    </View>
  );
  const RightView = () => (
    <View style={[styles.view, styles.rightView]}>
      <LogoutSvg width={IconSize} height={IconSize} color={Colors.red} />
    </View>
  );

  return (
    <Surface style={[styles.header, style]}>
      <LeftView />
      <RightView name />
    </Surface>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    height: 120,
    paddingTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  view: {
    marginHorizontal: 16,
    alignItems: "center",
  },
  rightView: {
    justifyContent: "flex-end",
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
