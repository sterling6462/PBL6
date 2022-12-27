import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyHeader from "../../components/MyHeader";
import Colors from "../../constants/Colors";

const DetailScreen = ({ route, navigation }) => {
  const item = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyHeader detailTitle="Detail Mushroom" navigation={navigation} />
      <ImageBackground
        style={{
          flex: 0.7,
          width: 320,
          height: 320,
          marginTop: -30,
        }}
        source={{ uri: item.image }}
      >
        <View style={style.imageDetails}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.label,
              marginBottom: 20,
              width: "100%",
            }}
          >
            {item.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={Colors.red} size={30} />
        </View>
        <Text
          style={{
            marginTop: -20,
            marginBottom: 5,
            fontSize: 20,
            color: Colors.primaryDark,
            fontFamily: "BalsamBold",
          }}
        >
          Detail
        </Text>
        <ScrollView>
          <Text style={{ marginTop: 20, lineHeight: 22 }}>{item.desc}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
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
    width: "100%",
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
