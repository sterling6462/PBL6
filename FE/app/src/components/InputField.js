import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";

const InputField = (props) => {
  const {
    label,
    icon,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction,
    value,
    onChangeText,
  } = props;

  return (
    <View style={styles.container}>
      {icon}
      {inputType == "password" ? (
        <TextInput
          value={value}
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          value={value}
          placeholder={label}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: Colors.primaryLite, fontWeight: "700" }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
});
