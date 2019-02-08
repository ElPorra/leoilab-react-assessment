import React from 'react';
import validate from 'validate.js';
import {
  TextInput,
  AsyncStorage,
  StyleSheet,
  Button,
  View,
  setState
} from 'react-native';

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      loading: false
    };
  }
  _handleSubmit = () => {
   if(this.state.username && this.state.username !== ''){
    this.props.getUser(this.state.username);
   }else{
    this.setState({
      usernameError: !this.state.username || this.state.username === ''
    })
   }
  }


  render() {
    return (
      <View style={styles.container}>
          <TextInput  onChangeText={(username) => this.setState({username})}
            placeholder=" GitHub User"
            autoCapitalize="none"
            returnKeyType="search"
            onSubmitEditing={this._handleSubmit}
            onBlur={() => {
              this.setState({
                usernameError: !this.state.username || this.state.username === ''
              })
            }}
            style={this.state.usernameError?  styles.errorInput: styles.input}></TextInput>
       <View style={styles.contentButtonContainer}>
        <Button  type="submit" title="Search" onPress = {this._handleSubmit} />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingTop: 30,

  },
  contentButtonContainer: {
    flex: 1,
    maxHeight: 40, 
  },
  input: {
    flex: 3,
    height: 40, 
    borderWidth: 1,
    borderColor: 'blue', 
    borderRadius: 10,
  },
  errorInput: {
    flex: 3,
    height: 40, 
    width: 70,
    borderColor: 'red', 
    borderWidth: 1,
    borderRadius: 10,
  }

});