import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Text } from "react-native";
const user = {
  name: "John Doe",
  level: "Advanced",
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.level}>{user.level}</Text>
        </View>
      </View>
      {/* Set the status bar color to white when active */}
      <StatusBar style="dark" backgroundColor="white" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green", // Active icon color set to green
          tabBarInactiveTintColor: "grey", // Inactive icon color set to grey
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarLabelStyle: styles.tabLabelStyle,
          tabBarIconStyle: styles.tabIconStyle,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={30} color={color} /> // Home icon for "Home"
            ),
          }}
        />
        {/* AI Tutor Tab */}
        <Tabs.Screen
          name="aitutor"
          options={{
            title: "AI Tutor",
            tabBarIcon: ({ color }) => (
              <Icon name="robot" size={30} color={color} /> // Robot icon for "AI Tutor"
            ),
          }}
        />
        {/* Explore Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <Icon name="paper-plane" size={30} color={color} /> // Paperplane for "Explore"
            ),
          }}
        />
        {/* Self-Learning Tab */}
        <Tabs.Screen
          name="selflearning"
          options={{
            title: "Self-Learning",
            tabBarIcon: ({ color }) => (
              <Icon name="book" size={30} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 5,
  },
  tabIconStyle: {
    marginBottom: 5,
  },
  container: {
    flex: 0.1,
    backgroundColor: "white",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    backgroundColor: Colors.light.tint,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  level: {
    fontSize: 14,
    color: "white",
  },
});
