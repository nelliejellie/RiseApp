import { Image, StyleSheet, Platform, View, Text } from "react-native";
import React from "react";
import StatusBarComponent from "@/components/StatusBarComponent";

export default function HomeScreen() {
  return (
    <View>
      <StatusBarComponent content="dark-content" backgroundColor="#fff" />
      <Text>Hello world</Text>
    </View>
  );
}
