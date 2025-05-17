import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const tabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="airplane-outline" color={"Black"} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="stays"
        options={{
          title: "Stays",
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="bed-outline" color={"Black"} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default tabLayout;

const styles = StyleSheet.create({});
