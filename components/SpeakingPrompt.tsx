import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  topic: string;
  onBack: () => void;
};

const prompts = {
  "Daily Conversations": [
    "How was your day?",
    "What did you eat for breakfast?",
  ],
  Travel: ["Where would you like to travel?", "Describe your last vacation."],
  "Job Interviews": ["Tell me about yourself.", "What are your strengths?"],
  Shopping: ["What’s your favorite store?", "Do you prefer online shopping?"],
  "Small Talk": ["How’s the weather?", "What’s your favorite hobby?"],
};

const SpeakingPrompt: React.FC<Props> = ({ topic, onBack }) => {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  const handleNextPrompt = () => {
    setCurrentPrompt((prev) => (prev + 1) % prompts[topic].length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Topic: {topic}</Text>
      <Text style={styles.prompt}>{prompts[topic][currentPrompt]}</Text>
      <TouchableOpacity style={styles.button} onPress={handleNextPrompt}>
        <Text style={styles.buttonText}>Next Prompt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={onBack}
      >
        <Text style={styles.buttonText}>Back to Topics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  topic: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#444",
  },
  prompt: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 24,
    color: "#333",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: "80%",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SpeakingPrompt;
