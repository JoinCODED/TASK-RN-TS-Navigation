import { View, StyleSheet } from "react-native";
import React from "react";
import TripList from "@/component/TripList";
export default function Trips() {
  return (
    <View style={styles.container}>
      <TripList trips={[]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
