import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#0898a0",
  },
  innerContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 100,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: Colors.light.background,
  },
});
