import { useState } from "react";
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
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import Colors from "../constants/Colors";
import { useStore } from "../store";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [hide, setHide] = useState(true);

  const { login, error, isLogged } = useStore();

  if (isLogged) {
    navigation.navigate("Tab");
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <LoginSVG
            height={300}
            width={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
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
              style={{ marginRight: 5 }}
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
              style={{ marginRight: 5 }}
            />
          }
          fieldButtonLabel={hide ? `show` : `hide`}
          fieldButtonFunction={() => setHide(!hide)}
          inputType={hide ? `password` : ""}
          onChangeText={(text) => setPassword(text)}
        />
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
            marginTop: -10,
          }}
        >
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>
        <CustomButton
          label={"Login"}
          onPress={async () => {
            await login({ username, password });
            setUsername("");
            setPassword("");
          }}
        />
        <View style={styles.transRegister}>
          <Text>Do not have an account?</Text>
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
  textRegister: { color: Colors.primary, fontWeight: "700" },
  transRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
});
