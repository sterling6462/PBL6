import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DeleteSvg } from "../assets/Svg";
import Colors from "../constants/Colors";

const CardHistory = (props) => {
  const { item, navigation, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate("DetailHistory", item);
      }}
    >
      <Image
        //TODO edit item.image
        source={{ uri: item.image }}
        style={styles.img}
        defaultSource={require("../assets/mushroom.jpg")}
      />
      <View style={styles.content}>
        <Text style={styles.label}>{item.mushroom.name}</Text>
        <Text style={styles.accuracy}>{`${item.accuracy}`} %</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <DeleteSvg width={32} height={32} color={Colors.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  cardContainer: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
  },
  content: {
    height: 100,
    marginLeft: 15,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.label,
    paddingBottom: 5,
  },
  description: {
    fontSize: 13,
    color: Colors.darkGray1,
  },
});
