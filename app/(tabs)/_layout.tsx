import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="stays"
        options={{
          title: "Stays",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: () => (
            <EvilIcons name="location" size={28} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
