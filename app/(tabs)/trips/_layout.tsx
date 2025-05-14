import { Stack, Tabs } from "expo-router";
//remove the header in the stack
export default function RootLayout() {
  return <Stack></Stack>;
}

export const unstable_settings = {
  initialRouteName: "index",
};
