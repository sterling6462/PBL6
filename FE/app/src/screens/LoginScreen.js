import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LoginSVG from "../assets/Svg/login.svg";

import Colors from "../constants/Colors";

import axios from "axios";
import {useState} from "react";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = (username, password) => {
    axios
      .post(`http://103.197.184.82:8000/api/login`, {
        username,
        password,
      })
      .then(async (res) => {
        let userInfo = res.data;
        navigation.navigate("Tab");
        console.log(userInfo.access);
        try {
          await AsyncStorage.setItem("access", userInfo.access);
        } catch (e) {
          console.log("error hai", e);
        }
      })
      .catch((e) => {
        console.log(`Register failed: ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: "center"}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: "-5deg"}]}}
          />
        </View>
        <Text style={styles.textLogin}>Login</Text>
        <InputField
          value={username}
          label={"Username"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={Colors.darkGray}
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => setUsername(text)}
        />

        <InputField
          value={password}
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={Colors.darkGray}
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
          onChangeText={(text) => setPassword(text)}
        />

        <CustomButton
          label={"Login"}
          onPress={() => {
            handleLogin(username, password);
          }}
        />

        <View style={styles.transRegister}>
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.textRegister}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textLogin: {
    fontSize: 28,
    fontWeight: "500",
    color: Colors.primary,
    marginBottom: 30,
  },
  textRegister: {color: Colors.primary, fontWeight: "700"},
  transRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
