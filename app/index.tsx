import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
import { styles } from "./Styles/SplashStyle";
import RiseIcon from "@/assets/icons/RiseIcon";
import StatusBarComponent from "@/components/StatusBarComponent";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to another screen, e.g., 'profile'
      router.push("/(tabs)");
    }, 3000);

    // Clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.Container}>
      <StatusBarComponent content="light-content" backgroundColor="#0898a0" />
      <View style={styles.innerContainer}>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <RiseIcon />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={[styles.text, { fontSize: 18 }]}>
              Dollar Investment that
            </Text>
            <Text style={[styles.text, { fontSize: 18 }]}>help you grow</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text}>All rights reserved</Text>
          <Text style={styles.text}>(c) 2021</Text>
        </View>
      </View>
    </View>
  );
}
