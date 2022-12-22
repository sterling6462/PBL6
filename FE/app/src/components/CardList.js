import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

const CardList = (props) => {
  const { item, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("DetailScreen", item);
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.img}
        defaultSource={require("../assets/mushroom.jpg")}
      />
      <View style={styles.content}>
        <Text style={styles.label}>{item.name}</Text>
        <Text style={styles.description}>
          {`${item.desc}`.slice(0, 130)} ...
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardList;
const styles = StyleSheet.create({
  cardContainer: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  content: {
    height: 100,
    marginLeft: 15,
    paddingVertical: 5,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.label,
  },
  description: {
    fontSize: 13,
    color: Colors.darkGray1,
  },
});
