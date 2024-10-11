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
  QualityContainer: {
    flex: 1,
  },
  inneSplashContainer: {
    marginTop: 100,
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    height: 48,
    alignItems: "center",
  },
  backContainer: {
    borderRadius: 5,
    backgroundColor: "#foeeee",
    width: 43,
  },
  nextContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 5,
    backgroundColor: "#foeeee",
    width: 103,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  SignUp: {
    width: "90%",
    height: 52,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
