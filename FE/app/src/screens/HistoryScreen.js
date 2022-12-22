import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CardHistory from "../components/CardHistory";
import MyHeader from "../components/MyHeader";
import Colors from "../constants/Colors";

const HistoryScreen = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://103.197.184.93:8000/api/history`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  }, []);

  return (
    <View>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        // onRightPress={() => console.log("right")}
      />
      <View style={styles.viewInner}>
        <ScrollView style={styles.ScrollView}>
          {data.map((item, index) => (
            <CardHistory
              item={item}
              id={index}
              key={index}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  viewInner: {
    backgroundColor: Colors.bag12Bg,
    flex: 1,
  },
  ScrollView: {
    marginBottom: 72,
  },
});
