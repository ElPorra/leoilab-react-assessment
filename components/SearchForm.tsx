import React from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";
import Layout from "../constants/Layout";
export default class SearchForm extends React.Component<
  ISearchFormProps,
  TSearchformState
> {
  constructor(props: ISearchFormProps) {
    super(props);
    this.state = {
      username: null,
      loading: false,
      usernameError: false
    };
  }
  _handleSubmit = () => {
    if (this.state.username && this.state.username !== "") {
      this.props.getUser(this.state.username);
    } else {
      this.setState({
        usernameError: !this.state.username || this.state.username === ""
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={username => this.setState({ username })}
          placeholder=" GitHub User"
          autoCapitalize="none"
          returnKeyType="search"
          onSubmitEditing={this._handleSubmit}
          onBlur={() => {
            this.setState({
              usernameError: !this.state.username || this.state.username === ""
            });
          }}
          style={this.state.usernameError ? styles.errorInput : styles.input}
        />
        <View style={styles.contentButtonContainer}>
          <Button title="Search" onPress={this._handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: Layout.sizingUnit * 4
  },
  contentButtonContainer: {
    flex: 1,
    height: Layout.sizingUnit * 4,
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "stretch"
  },
  input: {
    flex: 3,
    height: Layout.sizingUnit * 4,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10
  },
  errorInput: {
    flex: 3,
    height: Layout.sizingUnit * 4,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10
  }
});
