import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import trips from "@/data/trips";

export default function xyz() {
  const { slug } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.slug === slug);
  const router = useRouter();
  useEffect(() => { if (!trip) {
    router.replace("/trips");
  }}, [trip]);
  if (!trip) return null;

  
  return (
    // <Image source={{ uri: stay.img }}/>
    // <View>
    //   <Text>{trip.name}</Text>
    //   <Text >{trip.details}</Text>
    //   <Text>City: {trip.city}</Text>
    //   <Text >Length: {trip.length1}</Text>
    //   <Text>Difficulty: {trip.difficulty}</Text>
    //   <Text>Rating: {trip.rating}</Text>
    // </View>

    /// center my images
    <View>
      <View style={styles.imageCenter}>
        <Image source={{ uri:trip.img }} style={styles.picture}/>
      </View>

    <Text>{trip.name}</Text>
    <Text>{trip.details}</Text>
    <Text>City: {trip.city}</Text>
    <Text>Length: {trip.length1}</Text>
    <Text>Difficulty: {trip.difficulty}</Text>
    <Text>Rating: {trip.rating}</Text>

  </View>
);
}

const styles = StyleSheet.create({
  imageCenter: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  picture: {
    width: 250,
    height: 200,
   justifyContent: "center",
    alignItems: "center",
  }
});
