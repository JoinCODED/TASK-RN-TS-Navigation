import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TripDetails from "@/app/TripDetails";
import TripList from "@/component/TripList";
import trips from "@/data/trips";
import Searchbar from "@/component/Searchbar";
import Line from "@/component/Line";
import DifficultyFilter from "@/component/DifficultyFilter";

const TripsScreen = () => {
  const [search, setSearch] = useState("");
  const displayTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Trips</Text>
      <Searchbar setSearch={setSearch} />

      <DifficultyFilter />

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Line width={"50%"} color="#1abc9c" />
        <Line width={"50%"} color="#1abc9c" />
      </View>
      <TripList trips={displayTrips} />
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  line: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 10,
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
});
