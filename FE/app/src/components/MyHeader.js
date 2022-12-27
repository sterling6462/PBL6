import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Surface } from "react-native-paper";
import { BackArrowSvg, LogoutSvg } from "../assets/Svg";
import Colors from "../constants/Colors";
import { useFontCustom, useStore } from "../store";

const LeftView = (props) => {
  const { infoUser, userName, title, detailTitle, navigation } = props;

  return (
    <View style={styles.leftView}>
      {infoUser && (
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textName}>Hi </Text>
            <Text
              style={[styles.textName, { color: Colors.label, width: 100 }]}
            >
              {userName}
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "BalsamRegular",
              }}
            >
              Welcome to Mushroom Classification App !
            </Text>
          </View>
        </View>
      )}

      {title && (
        <View>
          <Text
            style={{
              fontSize: 22,
              color: Colors.primary,
              fontFamily: "BalsamBold",
            }}
          >
            {title} Screen
          </Text>
        </View>
      )}
      {detailTitle && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: 40, marginLeft: -30 }}
          >
            <BackArrowSvg width={30} height={30} color={Colors.primaryDark} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              color: Colors.primaryDark,
              fontFamily: "BalsamBold",
              marginTop: -5,
            }}
          >
            {detailTitle} Screen
          </Text>
        </View>
      )}
    </View>
  );
};

const RightView = ({ logout, logoutButton }) => {
  return (
    <View style={[styles.view, styles.rightView]}>
      {logoutButton && (
        <TouchableOpacity onPress={() => logout()}>
          <LogoutSvg width={28} height={28} color={Colors.primaryDark} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const AppHeader = (props) => {
  const { title, detailTitle, infoUser, navigation, logoutButton } = props;
  const { username, logout, backButton } = useStore();

  const fontLoaded = useFontCustom();

  return (
    <Surface style={styles.header}>
      <LeftView
        infoUser={infoUser}
        userName={username}
        title={title}
        detailTitle={detailTitle}
        backButton={backButton}
        navigation={navigation}
      />
      <RightView logout={logout} logoutButton={logoutButton} />
    </Surface>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 10,
  },
  view: {
    marginHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  rightView: {
    alignContent: "flex-end",
    justifyContent: "flex-start",
  },
  leftView: {
    justifyContent: "flex-start",
  },
  textName: {
    fontSize: 22,
    fontFamily: "Pacific",
  },
});
