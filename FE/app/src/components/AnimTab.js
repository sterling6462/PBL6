import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "../constants/Colors";
import HistoryScreen from "../screens/HistoryScreens/HistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreens/ListScreen";
import { ScanMushroomScreen } from "../screens/ScanMushroomsScreen";
import Icon, { Icons } from "./Icons";

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { type, activeIcon, inActiveIcon, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View
        ref={viewRef}
        animation="zoomIn"
        duration={800}
        style={styles.container}
      >
        <Icon
          type={type}
          name={focused ? activeIcon : inActiveIcon}
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      <Tab.Screen
        key={1}
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.Ionicons}
              activeIcon="grid"
              inActiveIcon="grid-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        key={2}
        name="List"
        component={ListScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.FontAwesome}
              activeIcon="list-ul"
              inActiveIcon="list-ul"
            />
          ),
        }}
      />
      <Tab.Screen
        key={3}
        name="ScanMushrooms"
        component={ScanMushroomScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.FontAwesome}
              activeIcon="camera"
              inActiveIcon="camera"
            />
          ),
        }}
      />
      <Tab.Screen
        key={4}
        name="History"
        component={HistoryScreen}
        options={{
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.MaterialCommunityIcons}
              activeIcon="history"
              inActiveIcon="history"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
