import React, { useState } from 'react';
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, 
  SafeAreaView, TextInput
} from 'react-native';
import { 
  Play, Utensils, Flower2, BookOpen, Flame, 
  Dumbbell, PlayCircle, Search, Wind, Zap, Users, Heart
} from 'lucide-react-native';

const COLORS = {
  gold: '#B5A642',      
  saffron: '#E97451',   
  leaf: '#556B2F',      
  cream: '#FFF9F5',     // Beige background [cite: 47]
  white: '#FFFFFF',
  muted: '#7A7A7A',
  dark: '#2D2926'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER: JUNOON logo only on Home screen [cite: 15, 48] */}
      <View style={styles.headerContainer}>
        {activeTab === 'Home' ? (
          <View style={styles.brandContainer}>
            <View>
              <Text style={styles.logoText}>J U N O O N</Text>
              <Text style={styles.logoTagline}>ANCIENT WISDOM • MODERN TECH</Text>
            </View>
            <TouchableOpacity style={styles.profileCircle}>
              <Text style={styles.profileText}>SM</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.innerPageTitle}>{activeTab.toUpperCase()}</Text>
        )}
      </View>

      <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'Home' && <HomeContent />}
        {activeTab === 'Workout' && <WorkoutContent />}
        {activeTab === 'Nutrition' && <NutritionContent />}
        {activeTab === 'Classes' && <ClassesContent />}
        {activeTab === 'Education' && <EducationContent />}
      </ScrollView>

      {/* NAVIGATION BAR [cite: 31] */}
      <View style={styles.tabBar}>
        <TabItem label="Home" icon={<Flame size={18} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Workout" icon={<Dumbbell size={18} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Nutrition" icon={<Utensils size={18} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Classes" icon={<Play size={18} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Education" icon={<BookOpen size={18} />} active={activeTab} set={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

// --- HOME CONTENT [cite: 6-14] ---
const HomeContent = () => (
  <View>
    <View style={styles.bannerCard}>
      <Text style={styles.cardHeader}>Weekly Goals</Text>
      <View style={styles.progressTrack}><View style={[styles.progressFill, {width: '60%'}]} /></View>
      <Text style={styles.cardSubText}>6/10 Workouts Completed</Text>
    </View>

    <Text style={styles.sectionTitle}>Quick Actions</Text>
    <View style={styles.grid}>
      <ActionTile label="Workout" icon={<Flame color={COLORS.saffron} />} />
      <ActionTile label="Meal Ideas" icon={<Utensils color={COLORS.leaf} />} />
      <ActionTile label="Classes" icon={<PlayCircle color={COLORS.saffron} />} />
      <ActionTile label="Meditation" icon={<Flower2 color={COLORS.leaf} />} />
    </View>

    <Text style={styles.sectionTitle}>Daily Favorites</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
      <FavoriteTile title="Morning Surya" time="12m" />
      <FavoriteTile title="Saffron Tea" time="5m" />
      <FavoriteTile title="Root Flow" time="20m" />
    </ScrollView>
  </View>
);

// --- WORKOUT CONTENT: CATEGORIES & LEADERBOARD [cite: 20-23] ---
const WorkoutContent = () => {
  const [workoutType, setWorkoutType] = useState('Stretching');
  return (
    <View>
      <View style={styles.switcherContainer}>
        {['Stretching', 'Cardio', 'Weight Training'].map((type) => (
          <TouchableOpacity 
            key={type} 
            onPress={() => setWorkoutType(type)}
            style={workoutType === type ? styles.activeSwitchBtn : styles.switchBtn}
          >
            <Text style={workoutType === type ? styles.activeSwitchText : styles.switchText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>{workoutType} Routine</Text>
        <Text style={styles.infoSub}>Vedic Flow • 4 Sets × 12 Reps</Text>
        <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionBtnText}>Start Now</Text></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Global Leaderboard</Text>
      <View style={styles.leaderboardBox}>
         <LeaderRow rank="1" name="Aditya K." pts="2,450" />
         <LeaderRow rank="2" name="Sneha M." pts="2,120" />
         <LeaderRow rank="3" name="You" pts="1,890" isUser />
      </View>
    </View>
  );
};

// --- NUTRITION CONTENT [cite: 24-27] ---
const NutritionContent = () => (
  <View>
    <View style={styles.switcherContainer}>
      {['Breakfast', 'Lunch', 'Dinner'].map((m) => (
        <TouchableOpacity key={m} style={m === 'Lunch' ? styles.activeSwitchBtn : styles.switchBtn}>
          <Text style={m === 'Lunch' ? styles.activeSwitchText : styles.switchText}>{m}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Jain Dal Tadka & Roti</Text>
      <Text style={styles.infoSub}>Featured Recipe • 450 Cal</Text>
      <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionBtnText}>Swap Meal</Text></TouchableOpacity>
    </View>
    <View style={styles.communityBox}>
      <Heart color={COLORS.leaf} size={14} />
      <Text style={styles.communityText}>120 others cooked this today</Text>
    </View>
  </View>
);

// --- CLASSES CONTENT [cite: 28-31] ---
const ClassesContent = () => (
  <View>
    <View style={styles.grid}>
      <ActionTile label="Yoga" icon={<Flower2 color={COLORS.saffron} />} />
      <ActionTile label="Cardio" icon={<Zap color={COLORS.leaf} />} />
    </View>
    <View style={styles.liveCard}>
      <Text style={styles.liveTime}>LIVE</Text>
      <Text style={styles.liveTitle}>Pranayama Basics @ 6pm</Text>
    </View>
  </View>
);

// --- EDUCATION CONTENT [cite: 44-45] ---
const EducationContent = () => (
  <View>
    <View style={styles.searchContainer}>
      <Search size={18} color={COLORS.muted} />
      <TextInput placeholder="Search Articles & Daily Tips..." style={styles.searchInput} />
    </View>
    <FeatureCard title="Ancient Wisdom: Doshas" sub="Founder Stories • 5m" color={COLORS.gold} />
    <FeatureCard title="The Ghee Myth" sub="Daily Tips • 8m" color={COLORS.saffron} />
  </View>
);

// --- REUSABLE COMPONENTS ---
const ActionTile = ({ label, icon }) => (
  <TouchableOpacity style={styles.tile}>
    <View style={styles.tileIcon}>{icon}</View>
    <Text style={styles.tileLabel}>{label}</Text>
  </TouchableOpacity>
);

const FavoriteTile = ({ title, time }) => (
  <TouchableOpacity style={styles.favTile}>
    <Text style={styles.favTitle}>{title}</Text>
    <Text style={styles.favTime}>{time}</Text>
  </TouchableOpacity>
);

const LeaderRow = ({ rank, name, pts, isUser }) => (
  <View style={[styles.leaderRow, isUser && styles.userRow]}>
    <Text style={styles.rankText}>{rank}</Text>
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.ptsText}>{pts} pts</Text>
  </View>
);

const FeatureCard = ({ title, sub, color }) => (
  <View style={[styles.infoCard, { borderLeftColor: color }]}>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.infoSub}>{sub}</Text>
  </View>
);

const TabItem = ({ label, icon, active, set }) => (
  <TouchableOpacity onPress={() => set(label)} style={styles.tabBtn}>
    {React.cloneElement(icon, { color: active === label ? COLORS.saffron : COLORS.muted })}
    <Text style={[styles.tabLabel, {color: active === label ? COLORS.saffron : COLORS.muted}]}>{label}</Text>
  </TouchableOpacity>
);

// --- STYLES [cite: 16, 46-48] ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  headerContainer: { paddingHorizontal: 20, paddingTop: 10, marginBottom: 5 },
  brandContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logoText: { fontFamily: 'serif', fontSize: 22, fontWeight: '700', color: COLORS.dark, letterSpacing: 4 },
  logoTagline: { fontSize: 7, color: COLORS.muted, fontWeight: 'bold', letterSpacing: 1, marginTop: 4 },
  profileCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.dark, justifyContent: 'center', alignItems: 'center' },
  profileText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  innerPageTitle: { fontFamily: 'serif', fontSize: 16, fontWeight: 'bold', color: COLORS.dark, letterSpacing: 2, textAlign: 'center', marginTop: 10 },
  tabContent: { flex: 1, paddingHorizontal: 20 },
  bannerCard: { backgroundColor: 'white', padding: 15, borderRadius: 15, elevation: 2, marginVertical: 5 },
  cardHeader: { fontFamily: 'serif', fontSize: 16, fontWeight: 'bold', color: COLORS.dark, marginBottom: 8 },
  progressTrack: { height: 6, backgroundColor: '#F0EBE6', borderRadius: 3 },
  progressFill: { height: 6, backgroundColor: COLORS.saffron, borderRadius: 3 },
  cardSubText: { fontSize: 10, color: COLORS.muted, marginTop: 6 },
  sectionTitle: { fontFamily: 'serif', fontSize: 16, fontWeight: 'bold', color: COLORS.dark, marginTop: 12, marginBottom: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tile: { width: '48%', backgroundColor: 'white', padding: 12, borderRadius: 12, marginBottom: 10, alignItems: 'center', elevation: 1 },
  tileLabel: { fontSize: 11, fontWeight: 'bold', color: COLORS.dark, marginTop: 6 },
  horizontalScroll: { marginBottom: 15 },
  favTile: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginRight: 10, width: 120, elevation: 1, borderTopWidth: 3, borderTopColor: COLORS.gold },
  favTitle: { fontWeight: 'bold', fontSize: 12, color: COLORS.dark },
  favTime: { fontSize: 10, color: COLORS.muted, marginTop: 4 },
  switcherContainer: { flexDirection: 'row', backgroundColor: '#F0EBE6', borderRadius: 10, padding: 4, marginBottom: 15 },
  switchBtn: { flex: 1, paddingVertical: 8, alignItems: 'center' },
  activeSwitchBtn: { flex: 1, paddingVertical: 8, alignItems: 'center', backgroundColor: COLORS.white, borderRadius: 8 },
  switchText: { color: COLORS.muted, fontSize: 10, fontWeight: 'bold' },
  activeSwitchText: { color: COLORS.saffron, fontSize: 10, fontWeight: 'bold' },
  infoCard: { backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: COLORS.saffron, elevation: 1 },
  infoTitle: { fontWeight: 'bold', color: COLORS.dark, fontSize: 14, fontFamily: 'serif' },
  infoSub: { color: COLORS.muted, fontSize: 10, marginTop: 2 },
  actionBtn: { marginTop: 10, backgroundColor: COLORS.saffron, padding: 8, borderRadius: 8, alignItems: 'center' },
  actionBtnText: { color: 'white', fontWeight: 'bold', fontSize: 11 },
  leaderboardBox: { backgroundColor: 'white', borderRadius: 12, padding: 10, elevation: 1 },
  leaderRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F0EBE6' },
  userRow: { backgroundColor: '#FDF7E2', borderRadius: 8, paddingHorizontal: 5 },
  rankText: { fontWeight: 'bold', color: COLORS.gold, width: 30 },
  nameText: { flex: 1, color: COLORS.dark, fontSize: 13 },
  ptsText: { fontWeight: 'bold', color: COLORS.dark, fontSize: 13 },
  searchContainer: { flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10, alignItems: 'center', marginBottom: 15, elevation: 1 },
  searchInput: { marginLeft: 10, fontSize: 12, flex: 1 },
  liveCard: { backgroundColor: COLORS.dark, padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  liveTime: { color: COLORS.saffron, fontWeight: 'bold', marginRight: 15, fontSize: 10 },
  liveTitle: { color: 'white', fontSize: 12, fontWeight: '600' },
  communityBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  communityText: { fontSize: 10, color: COLORS.leaf, marginLeft: 5 },
  tabBar: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#EEE' },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 9, marginTop: 4, fontWeight: 'bold' }
});
