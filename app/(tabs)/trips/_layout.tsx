import { Stack } from "expo-router";

export default function TripsLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Hike" }} />
      <Stack.Screen name="[id]" options={{ title: "Hike" }} />
    </Stack>
  );
}
