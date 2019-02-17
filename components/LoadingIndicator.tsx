import * as React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import Layout from "../constants/Layout";

export default class LoadingIndicator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Layout.sizingUnit * 5
  }
});