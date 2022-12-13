import { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Styles from "../common/Styles";
import MyHeader from "../components/MyHeader";

const MyMushroomScreen = ({ route, navigation }) => {
  const viewRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <View>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        // onRightPress={() => console.log("right")}
      />
      <Animatable.View
        ref={viewRef}
        easing={"ease-in-out"}
        style={Styles.container}
      >
        <Text>MyMushroomScreen</Text>
      </Animatable.View>
    </View>
  );
};

export default MyMushroomScreen;

const styles = StyleSheet.create({});
