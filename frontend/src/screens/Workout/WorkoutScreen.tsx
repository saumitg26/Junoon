import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  rest: string;
  video?: string; // URL for video demo
};

const WORKOUT_PLAN: Exercise[] = [
  { name: "Push Ups", sets: 3, reps: 12, rest: "60s", video: "https://i.imgur.com/Z7O8K1A.mp4" },
  { name: "Squats", sets: 3, reps: 15, rest: "60s", video: "https://i.imgur.com/Z7O8K1A.mp4" },
  { name: "Plank", sets: 3, reps: 1, rest: "45s", video: "https://i.imgur.com/Z7O8K1A.mp4" },
];

export default function WorkoutScreen() {
  const [completed, setCompleted] = useState<boolean[]>(WORKOUT_PLAN.map(() => false));

  const toggleComplete = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Today's Workout</Text>
      <Text style={styles.subheader}>Follow your personalized plan</Text>

      {WORKOUT_PLAN.map((exercise, idx) => (
        <View key={idx} style={styles.exerciseCard}>
          {/* Video Placeholder */}
          <Image
            source={{ uri: "https://i.imgur.com/0ZQZ5cE.jpeg" }}
            style={styles.videoPlaceholder}
          />

          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseDetails}>
              Sets: {exercise.sets} | Reps: {exercise.reps} | Rest: {exercise.rest}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.completeButton,
              completed[idx] && styles.completeButtonActive,
            ]}
            onPress={() => toggleComplete(idx)}
          >
            <Text
              style={[
                styles.completeText,
                completed[idx] && styles.completeTextActive,
              ]}
            >
              {completed[idx] ? "Completed" : "Mark Complete"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  header: { fontSize: 28, fontWeight: "700", marginBottom: 6 },
  subheader: { fontSize: 14, opacity: 0.7, marginBottom: 20 },

  exerciseCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
  },

  videoPlaceholder: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#ddd",
  },

  exerciseInfo: { marginBottom: 12 },
  exerciseName: { fontSize: 18, fontWeight: "600", marginBottom: 4 },
  exerciseDetails: { fontSize: 14, opacity: 0.7 },

  completeButton: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  completeButtonActive: { backgroundColor: "#4A90E2" },
  completeText: { fontWeight: "600", color: "#333" },
  completeTextActive: { color: "#fff" },
});
