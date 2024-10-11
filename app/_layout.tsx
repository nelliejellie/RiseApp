import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="SignUp">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Splash" options={{ headerShown: false }} />
      <Stack.Screen name="SplashTwo" options={{ headerShown: false }} />
      <Stack.Screen name="SplashThree" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
    </Stack>
  );
}
