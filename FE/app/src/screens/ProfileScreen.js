import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyHeader from "../components/MyHeader";
import Colors from "../constants/Colors";

const ProfileScreen = ({ route, navigation }) => {
  // const logout = () => {
  //   AsyncStorage.clear();
  // };

  return (
    <View>
      <MyHeader title={route.name} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.userImg}
          source={require("../assets/mushroom.jpg")}
        />
        <Text style={styles.userName}>Nhuw Ngocj</Text>
        <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
          <Text style={styles.userBtnTxt}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
});
