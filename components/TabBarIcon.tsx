import React from "react";
import { Icon } from "expo";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default class TabBarIcon extends React.Component<ITabBarIconsProps> {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={Layout.sizingUnit * 2.5}
        style={{ marginBottom: -Layout.sizingUnit * 0.3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
