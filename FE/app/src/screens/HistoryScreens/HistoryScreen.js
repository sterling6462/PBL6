import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CardHistory from "../../components/CardHistory";
import MyHeader from "../../components/MyHeader";
import Colors from "../../constants/Colors";
import { WINDOW_WIDTH } from "../../device-info";
import { useStore } from "../../store";

const HistoryScreen = ({ route, navigation }) => {
  const { token } = useStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
    // deleteHistory();
  }, []);

  const getList = () => {
    axios
      .get(`http://hoailinh.online/api/history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  };

  const deleteHistory = (id) => {
    console.log(id);
    axios
      .delete(`http://hoailinh.online/api/history`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { id: id },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  };

  return (
    <View>
      <MyHeader infoUser title={route.name} />
      <View style={styles.viewInner}>
        <ScrollView style={styles.ScrollView}>
          {data.map((item, index) => (
            <CardHistory
              item={item}
              id={index}
              key={index}
              navigation={navigation}
              onPress={() => {
                deleteHistory(item.id);
              }}
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
    backgroundColor: Colors.white,
  },
  ScrollView: {
    marginBottom: 310,
    width: WINDOW_WIDTH,
  },
});
