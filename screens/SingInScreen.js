import React from 'react';
import { authService } from '../services/AuthService';
import {
  AsyncStorage,
  Alert,
  StyleSheet,
  ScrollView,
  View} from 'react-native';
import SingInForm from '../components/SingInForm';
import LoadingIndicator from '../components/LoadingIndicator';

export default class SingInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loading: false
    };
  }

  componentDidMount = () => {
    AsyncStorage.removeItem('userToken');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.loading
            ? <LoadingIndicator />
            : <SingInForm singIn={this._signInAsync}></SingInForm>}
        </ScrollView>
      </View>
    );
  }

  _signInAsync = (email, password) => {
    this.setState({ error: '', loading: true });
    authService.login(email, password).then(async (response) => {
      await AsyncStorage.setItem('userToken', response.data.token);
      this.props.navigation.navigate('Main');
    }).catch(() => {
        Alert.alert('Authentication Error', 'Please try again', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], { cancelable: false });
        this.setState({ error: '', loading: true });
      })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  }
});
