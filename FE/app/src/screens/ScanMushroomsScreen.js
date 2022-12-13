import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { WINDOW_WIDTH } from "../device-info";

export const ScanMushroomScreen = ({ route, navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(Boolean);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const viewRef = useRef(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(undefined);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setResult(undefined);
    }
  };

  const Predict = (image) => {
    setLoading(true);
    const formData = new FormData();
    formData.append(
      "file",
      JSON.parse(
        JSON.stringify({
          uri: image,
          type: "image/jpeg",
          name: "testPhotoName",
        })
      )
    );

    fetch("http://103.197.184.82:8000/api/predict", {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data; ",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setResult(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  if (hasGalleryPermission === false) {
    //todo
  }

  return (
    <ImageBackground source={require("../assets/Home.png")} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Mushroom Classification</Text>
        <View style={styles.shadow}>
          {image ? (
            <View>
              {image && (
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => setImage(undefined)}
                >
                  <Text style={styles.x}>x</Text>
                </TouchableOpacity>
              )}
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ) : (
            <Image
              source={require("../assets/image-icon.png")}
              style={{ width: 120, height: 120 }}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => openCamera()}
            style={[styles.mRight30, { backgroundColor: "#66AEE8" }]}
          >
            Camera
          </Button>
          <Button
            icon="image-multiple"
            mode="contained"
            onPress={() => pickImage()}
            style={{ backgroundColor: "#99D455" }}
          >
            Gallery
          </Button>
        </View>
        <View>
          <Button
            icon="image-multiple"
            mode="contained"
            onPress={() => Predict(image)}
            style={{ backgroundColor: "#FFAF69" }}
          >
            Predict
          </Button>
        </View>
        {loading && (
          <ActivityIndicator
            color="#2269F3"
            size="large"
            style={{ marginTop: 30 }}
          />
        )}
        {result && !loading && image && (
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{result.class}</Text>
            <Text style={styles.confidence}>
              {(result.confidence * 100).toFixed(2)}%
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    width: WINDOW_WIDTH - 50,
    marginTop: 70,
    fontSize: 33,
    color: "#fff",
    letterSpacing: 0,
  },
  buttonContainer: { flexDirection: "row", marginTop: 25, marginBottom: 15 },
  mRight30: { marginRight: 30 },
  image: {
    width: 370,
    height: 250,
    borderRadius: 20,
  },
  shadow: {
    width: 370,
    height: 250,
    borderRadius: 20,
    shadowColor: "#000000",
    elevation: 20,
    backgroundColor: "white",
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: { marginTop: 30, alignItems: "center" },
  result: { fontSize: 30 },
  confidence: { fontSize: 25 },
  close: {
    width: 35,
    height: 35,
    backgroundColor: "#F56353",
    borderRadius: 17.5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -7,
    right: -7,
    borderColor: "white",
    borderWidth: 1.5,
    zIndex: 99,
  },
  x: { fontSize: 23, fontWeight: "600", marginTop: -5, color: "white" },
});
