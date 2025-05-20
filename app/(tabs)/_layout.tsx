import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // ① Tell the tabs what colors to use for active vs inactive icons/text:
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1abc9c",
        },
      }}
    >
      <Tabs.Screen
        name="stays"
        options={{
          title: "Stays",
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }): ReactNode => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({
            color,
            size,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }): ReactNode => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
