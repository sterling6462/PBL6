import { ScrollView, StyleSheet, View } from "react-native";
import CardHistory from "../../components/CardHistory";
import MyHeader from "../../components/MyHeader";
import Colors from "../../constants/Colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../device-info";

const HistoryData = [
  {
    id: 476,
    mushroom: {
      id: 5,
      name: "Nấm hương",
      image:
        "https://res.cloudinary.com/dfvudbozd/image/upload/v1/static/mushrooms.jpg/5_piacbw",
      desc: 'Nấm hương hay còn gọi là nấm đông cô là một loại nấm ăn có nguồn gốc bản địa ở Đông Á. Tiếng Anh và các ngôn ngữ châu Âu gọi nó theo tên tiếng Nhật, shiitake, có nghĩa "nấm cây chuy shii", lấy từ tên gọi loại cây gỗ dùng để cấy nấm.',
    },
    history: {
      id: 4,
      user: 4,
    },
    image:
      "https://vinmec-prod.s3.amazonaws.com/images/20210602_142946_222362_nam-mo-nau-gi.max-1800x1800.jpg",
    accuracy: 91.04,
    date: "2022-12-22",
  },
  {
    id: 476,
    mushroom: {
      id: 5,
      name: "Nấm hương",
      image:
        "https://res.cloudinary.com/dfvudbozd/image/upload/v1/static/mushrooms.jpg/5_piacbw",
      desc: 'Nấm hương hay còn gọi là nấm đông cô là một loại nấm ăn có nguồn gốc bản địa ở Đông Á. Tiếng Anh và các ngôn ngữ châu Âu gọi nó theo tên tiếng Nhật, shiitake, có nghĩa "nấm cây chuy shii", lấy từ tên gọi loại cây gỗ dùng để cấy nấm.',
    },
    history: {
      id: 4,
      user: 4,
    },
    image:
      "https://vinmec-prod.s3.amazonaws.com/images/20210602_142946_222362_nam-mo-nau-gi.max-1800x1800.jpg",
    accuracy: 91.04,
    date: "2022-12-22",
  },
];

const HistoryScreen = ({ route, navigation }) => {
  // const [data, setData] = useState([]);
  // setData(HistoryData);
  // console.log(data);

  // useEffect(() => {
  //   axios
  //     .get(`http://103.197.184.93:8000/api/history`)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(`Get list mushrooms failed: ${e}`);
  //     });
  // }, []);

  return (
    <View>
      <MyHeader title={route.name} />
      <View style={styles.viewInner}>
        <ScrollView style={styles.ScrollView}>
          {HistoryData.map((item, index) => (
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
  },
  ScrollView: {
    marginBottom: 72,
    backgroundColor: Colors.bag12Bg,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
});
