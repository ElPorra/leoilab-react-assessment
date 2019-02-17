/// <reference path="./interfaces.d.ts" />
import * as React from "react";
import { Ionicons } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default class TabBarIcon extends React.Component<TabBarIconsProps> {
  render() {
    return (
      <Ionicons
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
