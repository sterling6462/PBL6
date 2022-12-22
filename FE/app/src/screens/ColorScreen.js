import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Styles from "../common/Styles";
import MyHeader from "../components/MyHeader";
import Colors from "../constants/Colors";

export default function ColorScreen({ route, navigation }) {
  const viewRef = useRef(null);
  const [bgColor, setBgColor] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (route.name) {
      case "Home": {
        setBgColor(Colors.green);
        break;
      }
      case "List": {
        setBgColor(Colors.pink);
        break;
      }
      default:
        setBgColor(Colors.lightRed);
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
  //   });
  //   return () => unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    axios
      .get(`http://103.197.184.93:8000/api/mushrooms`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  }, []);

  return (
    <View style={Styles.container}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        // onRightPress={() => console.log("right")}
      />
      {/* <Animatable.View
        ref={viewRef}
        // easing={"ease-in-out"}
        style={Styles.container}
      > */}
      <View style={{ backgroundColor: Colors.red, flex: 1 }}>
        <ScrollView style={styles.ScrollView}>
          <Text>Home</Text>
        </ScrollView>
      </View>
      {/* </Animatable.View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    // height: WINDOW_HEIGHT - 200,
    marginBottom: 70,
  },
});
