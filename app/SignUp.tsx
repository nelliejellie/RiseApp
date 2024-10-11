import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./Styles/SignUp";
import SplashTextComponent from "@/components/SplashTextComponent";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <SplashTextComponent
          titleText="Create an account"
          color="black"
          description="Start building your dollar-denominated investment portfolio"
          descriptionColor="#9dacbb"
        />
      </View>
    </View>
  );
};

export default SignUp;
