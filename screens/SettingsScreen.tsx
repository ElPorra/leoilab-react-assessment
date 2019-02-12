import React from "react";
import {
  Image,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Button,
  View
} from "react-native";
import Layout from "../constants/Layout";
import { NavigationScreenProp } from "react-navigation";

interface ISettingsScreenProps {
  navigation: NavigationScreenProp<any,any>
}

export default class SettingsScreen extends React.Component<
  ISettingsScreenProps
> {
  static navigationOptions = {
    title: "Settings"
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Image
              style={{ flex: 1, width: 40, height: 40 }}
              source={{ uri: "assets/images/avatar.png" }}
            />
          </View>
          <View style={styles.container}>
            <Button title="Sign out" onPress={this._signOutAsync} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: Layout.sizingUnit * 2
  }
});
