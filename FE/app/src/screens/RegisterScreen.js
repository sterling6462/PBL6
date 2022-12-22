import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import InputField from "../components/InputField";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import axios from "axios";
import RegistrationSVG from "../assets/Svg/registration.svg";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = (username, password) => {
    axios
      .post(`http://103.197.184.93:8000/api/register`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        navigation.navigate("LoginScreen");
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`Register failed: ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <View style={{ alignItems: "center" }}>
          <RegistrationSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
        </View>

        <Text style={styles.textRegister}>Register</Text>
        <Text style={styles.helperTextRegister}>Register with email ...</Text>

        {/* <InputField
          label={"Full Name"}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color={Colors.darkGray}
              style={{ marginRight: 5 }}
            />
          }
        /> */}

        <InputField
          label={"Username"}
          value={username}
          onChangeText={(text) => setUsername(text)}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={Colors.darkGray}
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={"Password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={Colors.darkGray}
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        />

        {/* <InputField
          label={"Confirm Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
        /> */}

        <CustomButton
          label={"Register"}
          onPress={() => {
            handleRegister(username, password);
          }}
        />

        <View style={styles.transLogin}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.textLogin}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textRegister: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.primary,
    marginBottom: 30,
  },
  textLogin: { color: Colors.primary, fontWeight: "700" },
  helperTextRegister: {
    textAlign: "center",
    color: Colors.darkGray,
    marginBottom: 30,
  },
  calendarContainer: {
    flexDirection: "row",
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,
  },
  transLogin: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
