import React from 'react';
import Asset from 'expo';
import {
  Image,
  Platform,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings",
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex : 1}}>
        <ScrollView style={{flex : 1}}>
          <View style={styles.container}>
            <Image style={{flex: 1, width: 40, height: 40}} source={{uri: 'assets/images/avatar.png'}} />
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 22
  }
});
