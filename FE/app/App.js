import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import AnimatedLottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { Provider } from "react-native-paper";

import AnimTab from "./src/components/AnimTab";
import Colors from "./src/constants/Colors";
import DetailHistory from "./src/screens/HistoryScreens/DetailHistory";
import DetailScreen from "./src/screens/ListScreens/DetailScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { useStore } from "./src/store";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [loaded, setLoaded] = useState(false);
  const { isLogged } = useStore();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  if (loaded == false)
    return (
      <View style={styles.splash}>
        <AnimatedLottieView
          source={require("./src/assets/splash.json")}
          autoPlay
          duration={3000}
          loop={false}
          onAnimationFinish={() => {
            setLoaded(true);
          }}
        />
      </View>
    );
  else
    return (
      <Provider>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? "light-content" : "dark-content"}
            backgroundColor={Colors.white}
          />
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
}

const screenOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const Stack = createStackNavigator();

const RootStack = () => {
  const { isLogged } = useStore();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={AnimTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailHistory"
        component={DetailHistory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

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
  splash: { flex: 1, alighItems: "center" },
});
