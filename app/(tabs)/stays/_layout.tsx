import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[stayID]"
        options={{ title: "Stay Details", headershown: true }}
      />
      <Stack.Screen
        name="index"
        options={{ title: "Stays", headershown: false }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
