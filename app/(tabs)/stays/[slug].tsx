import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import stays from "@/data/stays";

// interface Stay {
//   id: number;
//   name: string;
//   img: string;
//   rating: number;
//   price: number;
//   location: string;
//   slug: string;
//

export default function xyz() {
  const { slug } = useLocalSearchParams();
  const stay = stays.find((stay) => stay.slug === slug);
  const router = useRouter();

  useEffect(() => {
    if (!stay) {
      router.replace("/stays");
    }
  }, [stay]);
  if (!stay) return null;

  return (
    <View>
      <View style={styles.imageCenter}>
        <Image source={{ uri: stay.img }} style={styles.picture} />
      </View>

      <Text>{stay.name}</Text>
      <Text>{stay.rating}</Text>
      <Text>{stay.price}</Text>
      <Text>{stay.location}</Text>
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
  },
});
