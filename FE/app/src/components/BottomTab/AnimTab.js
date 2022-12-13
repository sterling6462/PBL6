import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "../../constants/Colors";
import ColorScreen from "../../screens/ColorScreen";
import ListScreen from "../../screens/ListScreens/ListScreen";
import LoginScreen from "../../screens/LoginScreen";
import { ScanMushroomScreen } from "../../screens/ScanMushroomsScreen";
import Icon, { Icons } from "../Icons";
import Scan from "../Scan";

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
        component={ColorScreen}
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
              type={Icons.MaterialCommunityIcons}
              activeIcon="heart-plus"
              inActiveIcon="heart-plus-outline"
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
          tabBarButton: (props) => <Scan {...props} />,
        }}
      />
      <Tab.Screen
        key={4}
        name="MyMushrooms"
        component={ColorScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.MaterialCommunityIcons}
              activeIcon="timeline-plus"
              inActiveIcon="timeline-plus-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        key={5}
        name="Profile"
        component={LoginScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              type={Icons.FontAwesome}
              activeIcon="user-circle"
              inActiveIcon="user-circle-o"
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
