import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {

  // Quick actions
  const actions = [
    { title: "Today's Workout", screen: "Workout" },
    { title: "Meal Plan", screen: "Nutrition" },
    { title: "Classes", screen: "Classes" },
    { title: "Meditation", screen: "Meditation" },
    { title: "Education", screen: "Education" },
  ];

  // Sample recommendations
  const recommendations = [
    { title: "Try Paneer Bhurji for breakfast", image: "https://i.imgur.com/0ZQZ5cE.jpeg" },
    { title: "20 min Yoga Flow for flexibility", image: "https://i.imgur.com/n8eEJ9k.jpeg" },
    { title: "Meditation: 10 min stress relief", image: "https://i.imgur.com/zg1kdTI.jpeg" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header with Profile */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome back!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={36} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      {/* Weekly Progress Banner */}
      <View style={styles.progressBanner}>
        <Text style={styles.progressTitle}>This Week's Goals</Text>
        <Text style={styles.progressText}>3/5 Workouts Completed</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: "60%" }]} />
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {actions.map((action, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.actionButton}
            onPress={() => navigation.navigate(action.screen)}
          >
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommendations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Recommendations</Text>
        {recommendations.map((item, idx) => (
          <View key={idx} style={styles.recommendationCard}>
            <Image source={{ uri: item.image }} style={styles.recommendationImg} />
            <Text style={styles.recommendationText}>{item.title}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  header: { fontSize: 28, fontWeight: "700" },

  progressBanner: {
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    padding: 16,
    marginBottom: 25,
  },
  progressTitle: { fontSize: 18, fontWeight: "600", marginBottom: 4 },
  progressText: { fontSize: 14, opacity: 0.7, marginBottom: 8 },
  progressBarBackground: {
    width: "100%",
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  progressBarFill: {
    height: 10,
    backgroundColor: "#4A90E2",
    borderRadius: 5,
  },

  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#EFEFEF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  actionText: { fontSize: 16, fontWeight: "600", textAlign: "center" },

  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 14 },

  recommendationCard: {
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  recommendationImg: { width: 80, height: 80 },
  recommendationText: { flex: 1, padding: 12, fontSize: 14, fontWeight: "500" },
});
