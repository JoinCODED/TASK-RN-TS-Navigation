import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import trips from "@/data/trips";

interface TripCardProps {
  trip: {
    id: number;
    name: string;
    city: string;
    slug: string;
    length1: string;
    difficulty: string;
    details: string;
    img: string;
    rating: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <View style={styles.container}>
      <Link
        href={{
          pathname: "/(tabs)/trips/[tripId]",
          params: { tripId: trip.id },
        }}
        asChild
      >
        <TouchableOpacity>
          <Image source={{ uri: trip.img }} style={styles.image} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
