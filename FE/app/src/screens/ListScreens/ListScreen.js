import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Styles from "../../common/Styles";
import CardList from "../../components/CardList";
import MyHeader from "../../components/MyHeader";
import Colors from "../../constants/Colors";

const ListScreen = (props) => {
  const { route, navigation } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://103.197.184.93:8000/api/mushrooms`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(`Get list mushrooms failed: ${e}`);
      });
  }, []);

  return (
    <View style={Styles.container}>
      <MyHeader infoUser logoutButton title={route.name} />
      <View style={styles.viewInner}>
        <ScrollView style={styles.ScrollView}>
          {data.map((item, index) => (
            <CardList
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

const styles = StyleSheet.create({
  viewInner: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  ScrollView: {
    marginBottom: 72,
  },
});

export default ListScreen;
