import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "trips" }} />
      <Tabs.Screen name="(tabs)" options={{ title: "stays" }} />
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
