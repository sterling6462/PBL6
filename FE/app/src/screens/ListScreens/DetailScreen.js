import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";

const DetailScreen = ({ route }) => {
  const item = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        style={{
          flex: 0.7,
          width: 350,
          height: 350,
        }}
        source={require("../../assets/mushroom.jpg")}
      >
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "70%",
              fontSize: 30,
              fontWeight: "bold",
              color: Colors.label,
              marginBottom: 20,
            }}
          >
            {item.mushroom_name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="star" size={30} color={Colors.yellow} />
            <Text
              style={{ color: Colors.label, fontWeight: "bold", fontSize: 20 }}
            >
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={Colors.red} size={30} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon name="place" size={28} color={Colors.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.primary,
            }}
          >
            Đà Nẵng
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
          Thông tin chi tiết
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>
          {item.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    top: -30,
    backgroundColor: Colors.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.bag3Bg,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailScreen;
