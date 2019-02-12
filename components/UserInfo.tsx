import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Modal,
  TouchableHighlight
} from "react-native";
import Layout from "../constants/Layout";
import { Icon } from "expo";
import UsersList from "./UsersList";
import ReposList from "./ReposList";

export default class UserInfo extends React.Component<
  IUserInfoProps,
  TUserInfoState
> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      showFollowers: false,
      showRepos: false
    };
  }
  setModalVisible = (visible: boolean, whatToShow: string) => {
    let showRepos = false;
    let showFollowers = false;
    switch (whatToShow) {
      case "repos":
        showRepos = true;
        break;
      case "followers":
        showFollowers = true;
        break;
    }
    this.setState({
      modalVisible: visible,
      showRepos: showRepos,
      showFollowers: showFollowers
    });
  }

  _onCloseModal = () => {
    //
  }
  render() {
    return (
      <View style={styles.rowContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.user.avatar_url }}
        />
        <View style={styles.columnContainer}>
          <Text style={styles.name}>{this.props.user.name}</Text>
          {this.props.repos ? (
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible, "repos");
              }}
            >
              <Text style={styles.name}>
                Repos: {this.props.repos.length}
                <Icon.Ionicons
                  name="md-information-circle"
                  size={Layout.sizingUnit * 2}
                  style={{ marginLeft: Layout.sizingUnit }}
                />
              </Text>
            </TouchableHighlight>
          ) : null}
          {this.props.followers ? (
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible, "followers");
              }}
            >
              <Text style={styles.name}>
                Followers: {this.props.followers.length}
                <Icon.Ionicons
                  name="md-information-circle"
                  size={Layout.sizingUnit * 2}
                  style={{ marginLeft: Layout.sizingUnit }}
                />
              </Text>
            </TouchableHighlight>
          ) : null}
          <Text style={styles.name}>UserId: {this.props.user.id}</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this._onCloseModal}
        >
          <View style={styles.modalContainer}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible, "");
                }}
              >
                <Icon.Ionicons
                  name="md-close-circle"
                  size={Layout.sizingUnit * 3}
                  style={{ marginLeft: Layout.sizingUnit }}
                />
              </TouchableHighlight>
             {this.state.showFollowers ? <UsersList users={this.props.followers}></UsersList>: null}
             {this.state.showRepos ?  <ReposList repos={this.props.repos}></ReposList>: null}
            </View>
          
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Layout.sizingUnit
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    padding: Layout.sizingUnit,
    fontSize: Layout.sizingUnit * 1.8,
    height: Layout.sizingUnit * 4.4
  },
  image: { width: Layout.sizingUnit * 10, height: Layout.sizingUnit * 10 },
  modalContainer: { marginTop: Layout.sizingUnit * 2 }
});
