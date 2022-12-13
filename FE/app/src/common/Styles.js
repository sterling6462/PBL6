import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 0.3,
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.8,
  },
  boldText: {
    fontWeight: "bold",
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
});

export default Styles;
