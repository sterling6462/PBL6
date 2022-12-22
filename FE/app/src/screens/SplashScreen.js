import AnimatedLottieView from "lottie-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.splash}>
      <Text style={styles.textWelcome}>Hi</Text>
      <AnimatedLottieView
        source={require("../assets/splash.json")}
        autoPlay
        duration={3000}
        loop={false}
        onAnimationFinish={() => {
          setLoaded(true);
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textWelcome: {
    flex: 1,
    fontSize: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  splash: { flex: 1, alignItems: "center" },
});
