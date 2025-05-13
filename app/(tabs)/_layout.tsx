import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const layout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="trips" />
			<Tabs.Screen name="stays" />
		</Tabs>
	);
};

export default layout;

const styles = StyleSheet.create({});
