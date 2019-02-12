import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Layout from "../constants/Layout";

export default class ReposList extends React.Component<IReposistProps> {
  render() {
    return (
      <ScrollView>
        {this.props.repos.map(repo => (
          <View key={repo.id} style={styles.rowContainer}>
            <Text style={styles.name}>{repo.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: Layout.sizingUnit * 5,
    height: Layout.sizingUnit * 5
  },

  name: {
    padding: Layout.sizingUnit * 0.5,
    fontSize: Layout.sizingUnit * 1.8,
    height: Layout.sizingUnit * 4.4
  },
  image: { width: Layout.sizingUnit * 5, height: Layout.sizingUnit * 5 }
});
