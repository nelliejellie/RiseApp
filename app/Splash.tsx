import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles/SplashStyle";
import AssetIcon from "@/assets/icons/AssetIcon";
import RollOneIcon from "@/assets/icons/RollOneIcon";
import SplashTextComponent from "@/components/SplashTextComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Splash = () => {
  const router = useRouter();
  return (
    <View style={[styles.QualityContainer, { backgroundColor: "#fefaf7" }]}>
      <View style={styles.inneSplashContainer}>
        <AssetIcon />
        <RollOneIcon />
      </View>
      <View>
        <SplashTextComponent
          titleText="Quality assets"
          color="#fe7122"
          description="Rise invests your money into the best dollar investments around the world."
          descriptionColor=""
        />
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.backContainer}>
          <Ionicons name="arrow-back" size={24} color="#d4d7db" />
        </View>
        <TouchableOpacity
          style={styles.nextContainer}
          onPress={() => {
            router.navigate("/SplashTwo");
          }}
        >
          <Text style={{ color: "#fe7122" }}>Next</Text>
          <Ionicons name="arrow-forward" size={24} color="#fe7122" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
