import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import trips from "@/data/trips";
import { useLocalSearchParams } from "expo-router";

const TripDetails = () => {
  // const trip = trips[0];
  const { TripDetails } = useLocalSearchParams();
  const trip = trips.find((trip) => String(trip.id) === TripDetails);

  // if (!trip) {
  //   return (
  //     <View>
  //       <Text>TRIP NOT FOUND</Text>
  //     </View>
  //   );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{trip?.name}</Text>
      <Image source={{ uri: trip?.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.description}>City: {trip?.city}</Text>
        <Text style={styles.description}>Length: {trip?.length1}KM</Text>
        <Text style={styles.description}>Difficulty: {trip?.difficulty}</Text>
        <Text style={styles.description}>Rating: {trip?.rating}</Text>
      </View>

      <Text style={styles.description}>{trip?.details}</Text>
    </View>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    marginBottom: 10,
  },
});

// import { View, Text } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import trips from '../../data/trips'; // adjust path based on where your trips data is stored

// export default function TripDetail() {
//   const { slug } = useLocalSearchParams(); // 🧠 get the slug from the URL

//   // 🧩 find the trip with the matching slug
//   const trip = trips.find((item) => item.slug === slug);

//   if (!trip) {
//     return (
//       <View>
//         <Text>Trip not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>{trip.title}</Text>
//       <Text>{trip.description}</Text>
//       {/* You can show more trip details here */}
//     </View>
//   );
// }
