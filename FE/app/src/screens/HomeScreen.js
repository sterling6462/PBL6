import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import CategoryList from "../components/CategoryList";
import MyHeader from "../components/MyHeader";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  const { route, navigation } = props;
  const [categories, setCategories] = useState([]);
  const navigate = (route) => navigation.navigate(route);

  useEffect(() => {
    axios
      .get(`http://103.197.184.93:8000/api/mushrooms`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  }, []);

  return (
    <>
      <MyHeader infoUser title={route.name} logoutButton />
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: Colors.white,
        }}
      >
        <View style={{ marginTop: 5 }}>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              horizontal={true}
              height={200}
              activeDotColor={Colors.primary}
            >
              <View style={styles.slide}>
                <Image
                  source={require("../assets/background1.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../assets/background2.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../assets/background3.jpg")}
                  resizeMode="cover"
                  style={styles.sliderImage}
                />
              </View>
            </Swiper>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 3,
            }}
          >
            <View style={{ width: "70%" }}>
              <Text
                style={{
                  fontSize: 25,
                  color: Colors.primary,
                  fontFamily: "BalsamBold",
                }}
              >
                List of mushrooms
              </Text>
            </View>
            <View style={{ width: "30%", alignItems: "flex-end" }}>
              <View
                style={{
                  backgroundColor: Colors.primary,
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 15,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("List")}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: Colors.white,
                      fontFamily: "BalsamRegular",
                    }}
                  >
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            style={styles.ListMushrooms}
            data={categories}
            renderItem={({ item, index }) => (
              <CategoryList
                category={item}
                navigation={navigation}
                index={index}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: Colors.dark,
  },
  sliderContainer: {
    height: 200,
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },
  ListMushrooms: {
    marginBottom: 358,
  },
});
