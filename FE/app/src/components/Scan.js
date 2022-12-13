import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { CameraSvg } from "../assets/Svg/index.js";
import Colors from "../constants/Colors.js";

const Scan = (props) => {
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableWithoutFeedback onPress={onPress} style={styles.scanButton}>
          <View style={styles.scanButtonInner}>
            <CameraSvg color={Colors.light} width={28} height={28} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 0,
  },
  box: {
    marginTop: -20,
  },
  scanButton: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  scanButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
