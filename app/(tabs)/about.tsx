import { Image, StyleSheet, Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/react-logo3x.png");

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}></Image>
      </View>
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
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 18,
  },
});
