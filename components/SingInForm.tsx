import React from "react";
import validators from "../helpers/Validators";
import validate from "validate.js";
import { TextInput, StyleSheet, Button, View } from "react-native";
import Layout from "../constants/Layout";

export default class SingInForm extends React.Component<
  ISignInFormProps,
  TSignInFormState
> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  _handleSubmit = () => {
    if (
      !validate(
        { email: this.state.email, password: this.state.password },
        validators
      )
    ) {
      this.props.singIn(this.state.email, this.state.password);
    } else {
      this.setState({
        emailError: validate.single(this.state.email, validators.email),
        passwordError: validate.single(this.state.password, validators.password)
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder=" e-mail"
            onBlur={() => {
              this.setState({
                emailError: validate.single(this.state.email, validators.email)
              });
            }}
            style={this.state.emailError ? styles.errorInput : styles.input}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder=" password"
            secureTextEntry={true}
            autoCorrect={false}
            textContentType="password"
            onBlur={() => {
              this.setState({
                passwordError: validate.single(
                  this.state.password,
                  validators.password
                )
              });
            }}
            style={this.state.passwordError ? styles.errorInput : styles.input}
          />
        </View>
        <View style={styles.contentContainer}>
          <Button title="Sign in!" onPress={this._handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: Layout.sizingUnit * 3,
    marginHorizontal: Layout.sizingUnit * 5
  },
  input: {
    height: Layout.sizingUnit * 4,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10
  },
  errorInput: {
    height: Layout.sizingUnit * 4,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10
  }
});
