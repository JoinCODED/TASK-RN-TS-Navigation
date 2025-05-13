import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import stays from "@/data/stays";
import { useLocalSearchParams } from "expo-router";

const StayDetails = () => {
	const { stayID } = useLocalSearchParams();
	const stay = stays.find((item) => `${item.id}` === stayID);
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{stay?.name}</Text>
			<Image source={{ uri: stay?.img }} style={styles.image} />
			<Text style={styles.text}>Location: {stay?.location}</Text>
			<Text style={styles.text}>Price: ${stay?.price} / night</Text>
			<Text style={styles.text}>Rating: {stay?.rating} / 5</Text>
		</View>
	);
};

export default StayDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 20,
		gap: 10,
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		fontSize: 16,
	},
});
