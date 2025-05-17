import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
