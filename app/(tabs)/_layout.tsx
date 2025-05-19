import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="trips" options={{ title: "Trips" }} />
      <Tabs.Screen name="stays" options={{ title: "Stay" }} />
    </Tabs>
  );
};

export default layout;

const styles = StyleSheet.create({});
