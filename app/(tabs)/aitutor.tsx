import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import AI_Model from "@/assets/images/AI-Model.png";

export default function AIModel() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={AI_Model}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>AI Coaching</Text>
          <Text style={styles.subtitle}>
            Enhance your English speaking skills with personalized AI guidance.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#dddddd",
    textAlign: "center",
    lineHeight: 24,
  },
});
