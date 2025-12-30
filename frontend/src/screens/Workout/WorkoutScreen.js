import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Play, Flame, BarChart3, RotateCcw, Info } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  white: '#FFFFFF',
  muted: '#7A7A7A'
};

const WorkoutScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Today's Training</Text>

        {/* 1. Stats Section - Requirement: Total Sessions Moved Here */}
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <BarChart3 color="white" size={20} />
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.statLabel}>Total Sessions</Text>
          </View>
          <View style={styles.statBox}>
            <Flame color="white" size={20} />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>

        {/* 2. Workout List - Requirement: Sets, Reps, and Demos */}
        <Text style={styles.sectionTitle}>Strength & Flow Routine</Text>
        
        <ExerciseCard 
          title="Surya Namaskar (Sun Salutations)" 
          detail="4 Sets × 12 Reps" 
          rest="60s Rest" 
        />
        <ExerciseCard 
          title="Warrior II (Virabhadrasana)" 
          detail="3 Sets × 45s Hold" 
          rest="30s Rest" 
        />
        <ExerciseCard 
          title="Goblet Squats" 
          detail="4 Sets × 10 Reps" 
          rest="90s Rest" 
        />

        {/* 3. AI Feedback Loop - Requirement: Too Easy/Too Hard adjustment */}
        <View style={styles.aiFeedbackContainer}>
          <Text style={styles.aiTitle}>How was today's intensity?</Text>
          <View style={styles.feedbackRow}>
            <TouchableOpacity style={styles.feedbackBtn}>
              <Text style={styles.feedbackBtnText}>Too Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.feedbackBtn}>
              <Text style={styles.feedbackBtnText}>Too Hard</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.aiNote}>* AI will adjust your next session based on this feedback.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const ExerciseCard = ({ title, detail, rest }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.exerciseTitle}>{title}</Text>
      <Text style={styles.exerciseDetail}>{detail} • {rest}</Text>
    </View>
    <TouchableOpacity style={styles.playBtn}>
      <Play color="white" fill="white" size={16} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  container: { padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: COLORS.earth, marginBottom: 20 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statBox: { backgroundColor: COLORS.earth, width: '48%', padding: 20, borderRadius: 18, alignItems: 'center' },
  statValue: { color: 'white', fontSize: 24, fontWeight: 'bold', marginVertical: 5 },
  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: COLORS.earth },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, flexDirection: 'row', alignItems: 'center', marginBottom: 15, elevation: 2 },
  cardContent: { flex: 1 },
  exerciseTitle: { fontSize: 16, fontWeight: 'bold', color: '#2D2D2D' },
  exerciseDetail: { fontSize: 13, color: COLORS.muted, marginTop: 4 },
  playBtn: { backgroundColor: COLORS.saffron, padding: 12, borderRadius: 30 },
  aiFeedbackContainer: { marginTop: 20, padding: 20, backgroundColor: 'white', borderRadius: 20, borderStyle: 'dashed', borderWidth: 2, borderColor: COLORS.saffron },
  aiTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  feedbackRow: { flexDirection: 'row', justifyContent: 'space-between' },
  feedbackBtn: { backgroundColor: COLORS.cream, paddingVertical: 12, paddingHorizontal: 25, borderRadius: 10, borderWidth: 1, borderColor: COLORS.saffron },
  feedbackBtnText: { color: COLORS.saffron, fontWeight: '700' },
  aiNote: { fontSize: 11, color: COLORS.muted, textAlign: 'center', marginTop: 12 }
});

export default WorkoutScreen;
