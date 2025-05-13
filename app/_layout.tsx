import { Stack } from "expo-router";
import { Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="trips/[Tripid]"
        options={{
          title: " Card List",
          headerBackTitle: "GO Back",
          headerStyle: { backgroundColor: "red" },
          headerTitleStyle: { Color: "white" },
          headerRight: () => {
            return (
              <Button
                title="Edit"
                onPress={() => {
                  alert("Only for Admin");
                }}
              />
            );
          },
        }}
      />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
