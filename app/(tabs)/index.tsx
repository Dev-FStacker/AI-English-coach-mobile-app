import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import TopicSelection from "@/components/TopicSelection";
import SpeakingPrompt from "@/components/SpeakingPrompt";

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>🌟 English Speaking Coach 🌟</Text>
        <Text style={styles.subHeader}>
          Learn and improve your speaking skills!
        </Text>
      </View>
      <View style={styles.content}>
        {selectedTopic ? (
          <SpeakingPrompt
            topic={selectedTopic}
            onBack={() => setSelectedTopic(null)}
          />
        ) : (
          <TopicSelection onSelectTopic={setSelectedTopic} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#EAF0F6",
  },
  headerContainer: {
    backgroundColor: "#4A90E2",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 16,
    color: "#D1E8FF",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default App;
