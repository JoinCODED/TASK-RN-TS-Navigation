import { Stack } from "expo-router";
import { Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="stays" options={{ headerShown: false }} />
      <Stack.Screen name="StayIndex" options={{ headerShown: false }} />
    </Stack>
  );
}
