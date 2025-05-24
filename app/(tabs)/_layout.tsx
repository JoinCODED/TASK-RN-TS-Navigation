import { Stack, Tabs } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarIcon: () => <Fontisto name="plane" size={24} color="black" />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
