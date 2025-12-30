import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Play, Utensils, Flower2, BookOpen, User, Flame, Dumbbell, Calendar, ChevronRight } from 'lucide-react-native';

// JUNOON BRAND PALETTE
const COLORS = {
  saffron: '#E97451',   // Saffron/Terracotta (Tradition & Energy) [cite: 57, 118]
  earth: '#8B4513',     // Deep Earthy Brown (Rootedness) [cite: 57, 118]
  cream: '#FFF9F5',     // Warm Background (Clean & Minimal) [cite: 57, 118]
  leaf: '#556B2F',      // Forest Green (Nutrition & Ayurveda) [cite: 54, 108]
  white: '#FFFFFF',
  muted: '#7A7A7A'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // --- TAB 1: HOME HUB (Per Screen 6 Rundown) ---
  const HomeTab = () => (
    <ScrollView style={styles.tabContent}>
      {/* Top Header with Profile Access  */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandTitle}>JUNOON</Text>
          <Text style={styles.motto}>Wellness, Rooted in Tradition</Text>
        </View>
        <TouchableOpacity style={styles.profileBtn}>
          <User color={COLORS.earth} size={24} />
        </TouchableOpacity>
      </View>

      {/* Weekly Progress Banner  */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>This Week's Progress</Text>
        <View style={styles.progressBar}><View style={[styles.progressFill, {width: '65%'}]} /></View>
        <Text style={styles.bannerSub}>65% of your weekly goals achieved </Text>
      </View>

      {/* Quick Actions Grid [cite: 7, 8-12] */}
      <View style={styles.quickGrid}>
        <QuickBtn icon={<Play color="white"/>} label="Workout" bg={COLORS.saffron} />
        <QuickBtn icon={<Utensils color="white"/>} label="Meal Plan" bg={COLORS.leaf} />
        <QuickBtn icon={<Calendar color="white"/>} label="Live Classes" bg="#6A5ACD" />
        <QuickBtn icon={<Flame color="white"/>} label="Meditation" bg="#B8860B" />
      </View>

      {/* Recommendations [cite: 13] */}
      <Text style={styles.sectionLabel}>Recommended for You</Text>
      <TouchableOpacity style={styles.recCard}>
        <Text style={styles.recText}>15m Ayurvedic Morning Routine [cite: 108]</Text>
        <ChevronRight color={COLORS.earth} size={20} />
      </TouchableOpacity>
    </ScrollView>
  );

  // --- TAB 2: WORKOUT (Per Screen 16-17) ---
  const WorkoutTab = () => (
    <ScrollView style={styles.tabContent}>
      <Text style={styles.screenTitle}>Strength & Flow</Text>
      
      {/* Total Sessions Stat  */}
      <View style={styles.statRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>42</Text>
          <Text style={styles.statLabel}>Total Sessions</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>12</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      {/* Exercise Card [cite: 157, 291] */}
      <View style={styles.exerciseCard}>
        <View style={{flex: 1}}>
          <Text style={styles.exerciseName}>Surya Namaskar (Sun Salutations)</Text>
          <Text style={styles.exerciseSets}>4 Sets × 12 Reps • 60s Rest </Text>
        </View>
        <TouchableOpacity style={styles.playDemo}>
          <Play color={COLORS.saffron} fill={COLORS.saffron} size={16} />
        </TouchableOpacity>
      </View>

      {/* Feedback Adjustment [cite: 158, 292] */}
      <TouchableOpacity style={styles.feedbackBtn}>
        <Text style={styles.feedbackText}>Too Easy? Adjust AI Plan </Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flex: 1}}>
        {activeTab === 'Home' && <HomeTab />}
        {activeTab === 'Workout' && <WorkoutTab />}
        {['Nutrition', 'Classes', 'Education'].includes(activeTab) && (
          <View style={styles.center}><Text>{activeTab} Screen Placeholder</Text></View>
        )}
      </View>

      {/* BOTTOM TAB BAR  */}
      <View style={styles.tabBar}>
        <TabItem label="Home" icon={<Flame size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Workout" icon={<Dumbbell size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Nutrition" icon={<Utensils size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Classes" icon={<Play size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Education" icon={<BookOpen size={20} />} active={activeTab} set={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

// --- SUB-COMPONENTS ---
const QuickBtn = ({ icon, label, bg }) => (
  <TouchableOpacity style={styles.qBox}>
    <View style={[styles.qIcon, {backgroundColor: bg}]}>{icon}</View>
    <Text style={styles.qLabel}>{label}</Text>
  </TouchableOpacity>
);

const TabItem = ({ label, icon, active, set }) => (
  <TouchableOpacity onPress={() => set(label)} style={styles.tabBtn}>
    {React.cloneElement(icon, { color: active === label ? COLORS.saffron : COLORS.muted })}
    <Text style={[styles.tabLabel, {color: active === label ? COLORS.saffron : COLORS.muted}]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  tabContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  brandTitle: { fontSize: 24, fontWeight: '900', color: COLORS.earth, letterSpacing: 1.5 },
  motto: { fontSize: 12, color: COLORS.muted },
  profileBtn: { backgroundColor: COLORS.white, padding: 10, borderRadius: 12, elevation: 3 },
  banner: { backgroundColor: COLORS.white, padding: 20, borderRadius: 20, marginBottom: 25, elevation: 2 },
  bannerTitle: { fontWeight: '700', fontSize: 16, marginBottom: 12 },
  progressBar: { height: 8, backgroundColor: '#F0F0F0', borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: COLORS.saffron, borderRadius: 4 },
  bannerSub: { fontSize: 12, color: COLORS.muted, marginTop: 8 },
  quickGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  qBox: { width: '48%', backgroundColor: COLORS.white, padding: 15, borderRadius: 15, marginBottom: 15, alignItems: 'center' },
  qIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  qLabel: { fontSize: 13, fontWeight: '600' },
  sectionLabel: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  recCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  recText: { fontWeight: '500' },
  screenTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.earth, marginBottom: 20 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statBox: { backgroundColor: COLORS.earth, padding: 20, borderRadius: 18, width: '48%' },
  statNum: { color: 'white', fontSize: 26, fontWeight: 'bold' },
  statLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 12 },
  exerciseCard: { flexDirection: 'row', backgroundColor: 'white', padding: 20, borderRadius: 18, alignItems: 'center', marginBottom: 15 },
  exerciseName: { fontWeight: 'bold', fontSize: 16 },
  exerciseSets: { color: COLORS.muted, fontSize: 13, marginTop: 4 },
  feedbackBtn: { borderStyle: 'dashed', borderWidth: 1.5, borderColor: COLORS.saffron, padding: 15, borderRadius: 15, alignItems: 'center' },
  feedbackText: { color: COLORS.saffron, fontWeight: '700' },
  tabBar: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#EEE' },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 10, marginTop: 4, fontWeight: '700' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
