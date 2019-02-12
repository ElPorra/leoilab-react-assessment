import React from "react";
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchForm from "../components/SearchForm";
import { usersService } from "../services/UsersService";
import LoadingIndicator from "../components/LoadingIndicator";
import UserInfo from "../components/UserInfo";
import Layout from "../constants/Layout";
import { NavigationScreenProp } from "react-navigation";

interface IHomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends React.Component<
  IHomeScreenProps,
  THomeScreenState
> {
  static navigationOptions = {
    title: "Search in GitHub"
  };
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      followers: null,
      repos: null,
      loading: false,
      found: true,
      params: { page: 0, pageSize: 15 }
    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  _getUser = async (name: string) => {
    try {
      this.setState({
        loading: true,
        user: null,
        followers: null,
        repos: null
      });
      const userResponse = await usersService.getUser(name);
      const reposResponse = await usersService.getRepos(userResponse.data.login);
      const followersResponse = await usersService.getFollowers(userResponse.data.login);
      this.setState({
        loading: false,
        user: userResponse.data,
        repos: reposResponse.data,
        followers: followersResponse.data,
        found: !!userResponse.data.name
      });
    } catch (error) {
      this.setState({ loading: false, found: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchForm getUser={this._getUser} />
        <ScrollView>
          {!this.state.loading ? (
            this.state.user && this.state.user.name ? (
              <UserInfo
                followers={this.state.followers}
                repos={this.state.repos}
                user={this.state.user}
              />
            ) : this.state.found ? null : (
              <Text>Username Not Found</Text>
            )
          ) : (
            <LoadingIndicator />
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Layout.sizingUnit * 2
  },
  item: {
    padding: Layout.sizingUnit,
    fontSize: Layout.sizingUnit * 1.8,
    height: Layout.sizingUnit * 4
  }
});
