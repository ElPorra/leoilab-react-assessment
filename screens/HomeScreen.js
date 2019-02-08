import React from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchForm from '../components/SearchForm';
import { usersService } from '../services/UsersService';
import LoadingIndicator from '../components/LoadingIndicator';
import UserInfo from '../components/UserInfo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Search in GitHub"
  };
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false,
      found: true,
      params: { page: 0, pageSize: 15 }
    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _getUser = async (name) => {
    try {
      this.setState({ loading: true });
      const response = await usersService.getUser(name);
      this.setState({ loading: false });
      this.setState({ user: response.data });
      this.setState({ found: !!response.data.name });
    }
    catch (error) {
      this.setState({ loading: false });
      this.setState({ found: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchForm getUser={this._getUser}></SearchForm>
        <ScrollView>
          {!this.state.loading ?
            (this.state.user && this.state.user.name ? <UserInfo user={this.state.user}></UserInfo> : 
            (this.state.found ? null : <Text>Username Not Found</Text>))
            : <LoadingIndicator></LoadingIndicator>}
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
