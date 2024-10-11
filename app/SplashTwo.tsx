import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles/SplashStyle";
import SuperiorIcon from "@/assets/icons/SuperiorIcon";
import RollTwoIcon from "@/assets/icons/RollTwoIcon";
import SplashTextComponent from "@/components/SplashTextComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const SplashTwo = () => {
  const router = useRouter();
  return (
    <View style={[styles.QualityContainer, { backgroundColor: "#fdf4f9" }]}>
      <View style={styles.inneSplashContainer}>
        <SuperiorIcon />
        <RollTwoIcon />
      </View>
      <View>
        <SplashTextComponent
          titleText="Superior Selction"
          color="#B80074"
          description="Our expert team and intelligent algorithms select assets that beat the markets."
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#B80074" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextContainer}
          onPress={() => {
            router.navigate("/SplashThree");
          }}
        >
          <Text style={{ color: "#B80074" }}>Next</Text>
          <Ionicons name="arrow-forward" size={24} color="#B80074" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashTwo;
