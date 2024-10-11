import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type SplashTextProps = {
  titleText: string;
  description: string;
  color: string;
  descriptionColor: string;
};

const SplashTextComponent = (props: SplashTextProps) => {
  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        <Text style={[styles.titleText, { color: props.color }]}>
          {props.titleText}
        </Text>
        <Text
          style={[
            styles.description,
            {
              color:
                props.descriptionColor === ""
                  ? "black"
                  : props.descriptionColor,
            },
          ]}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
};

export default SplashTextComponent;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 40,
  },
  titleText: {
    fontWeight: "semibold",
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 15,
  },
  textContainer: {
    width: "90%",
    justifyContent: "center",
  },
});
