import React from "react";
import { StatusBar, StatusBarStyle, View } from "react-native";

type StatusBarComponentProps = {
  backgroundColor: string;
  content: StatusBarStyle;
};
const StatusBarComponent = (props: StatusBarComponentProps) => {
  return (
    <StatusBar
      barStyle={props.content}
      backgroundColor={props.backgroundColor}
    />
  );
};

export default StatusBarComponent;
