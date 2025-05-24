import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[tripID]"
        options={{ title: "Trip Details", headerShown: true }}
      />
      <Stack.Screen
        name="index"
        options={{ title: "Trips", headerShown: false }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
