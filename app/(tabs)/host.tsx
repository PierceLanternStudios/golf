import { StyleSheet, Text, View } from "react-native";

export default function HostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Host Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
