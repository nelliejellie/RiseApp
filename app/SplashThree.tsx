import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles/SplashStyle";
import SuperiorIcon from "@/assets/icons/SuperiorIcon";
import RollThreeIcon from "@/assets/icons/RollThreeIcon";
import SplashTextComponent from "@/components/SplashTextComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import PerformanceIcon from "@/assets/icons/PerformanceIcon";

const SplashThree = () => {
  const router = useRouter();
  return (
    <View style={[styles.QualityContainer, { backgroundColor: "#f6fffe" }]}>
      <View style={styles.inneSplashContainer}>
        <PerformanceIcon />
        <RollThreeIcon />
      </View>
      <View>
        <SplashTextComponent
          titleText="Better Perfomance"
          color="#0898a0"
          description="You earn more returns, achieve more of your financial goals and protect your money from devaluation.
"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.SignUp, { backgroundColor: "#0898a0" }]}
          onPress={() => {
            router.replace("/SignUp");
          }}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.SignUp, { backgroundColor: "#fff" }]}>
          <Text style={[styles.text, { color: "#0898a0" }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashThree;
