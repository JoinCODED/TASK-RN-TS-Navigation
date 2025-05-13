import { Stack } from "expo-router";

export default function StaysLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#1abc9c",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Hike" }} />
      <Stack.Screen name="[id]" options={{ title: "Hike" }} />
    </Stack>
  );
}
