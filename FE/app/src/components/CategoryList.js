import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { WINDOW_WIDTH } from "../device-info";
const cardWidth = WINDOW_WIDTH / 2 - 40;

const CategoryList = (props) => {
  const { category, navigation, index } = props;

  return (
    <TouchableHighlight
      underlayColor={Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailScreen", category)}
    >
      <View style={styles.card}>
        <View style={{ alignItems: "center", padding: 10 }}>
          <Image
            source={{ uri: category.image }}
            style={{ height: 150, width: 150, borderRadius: 8 }}
          />
        </View>
        <View style={{ marginHorizontal: 20, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: Colors.label,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {category.name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  card: {
    height: 230,
    width: cardWidth,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.white,
  },
});
