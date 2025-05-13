import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

const Index = () => {
  return <Redirect href="/(tabs)/stays" />;
};

export default Index;

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
});
