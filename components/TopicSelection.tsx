import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onSelectTopic: (topic: string) => void;
};

const topics = ["Daily Conversations", "Travel", "Job Interviews", "Shopping"];

const TopicSelection: React.FC<Props> = ({ onSelectTopic }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Topic</Text>
      {topics.map((topic) => (
        <TouchableOpacity
          key={topic}
          style={styles.topicButton}
          onPress={() => onSelectTopic(topic)}
        >
          <Text style={styles.topicText}>{topic}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  topicButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  topicText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default TopicSelection;
