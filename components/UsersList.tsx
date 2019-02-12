import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView
} from "react-native";
import Layout from "../constants/Layout";

export default class UsersList extends React.Component<IUsersListProps> {
  render() {
    return (
      <ScrollView>
        {this.props.users.map(user => 
          <View key={user.id} style={styles.rowContainer}>
          <Image
          style={styles.image}
          source={{ uri: user.avatar_url }}
        />
            <Text style={styles.name} >
              {user.login}
            </Text>
          </View>
        )}
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
