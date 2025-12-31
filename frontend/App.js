import React, { useState } from 'react';
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, 
  SafeAreaView, TextInput, Dimensions 
} from 'react-native';
import { 
  Play, Utensils, Flower2, BookOpen, User, Flame, 
  Dumbbell, Calendar, Check, PlayCircle, Search, Wind, Zap, Heart
} from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',   
  leaf: '#556B2F',      
  earth: '#8B4513',     
  cream: '#FFF9F5',     
  white: '#FFFFFF',
  muted: '#7A7A7A',
  dark: '#2D2926'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER - Logo & Updated Tagline */}
      <View style={styles.headerContainer}>
        <View style={styles.logoWrapper}>
          <Text style={styles.logoText}>J U N O O N</Text>
          <Text style={styles.logoTagline}>ESTABLISHED IN TRADITION • POWERED BY TECH</Text>
        </View>
        <TouchableOpacity style={styles.profileCircle}>
          <Text style={styles.profileInitials}>SM</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'Home' && <HomeContent />}
        {activeTab === 'Workout' && <WorkoutContent />}
        {activeTab === 'Nutrition' && <NutritionContent />}
        {activeTab === 'Classes' && <ClassesContent />}
        {activeTab === 'Education' && <EducationContent />}
      </ScrollView>

      {/* NAVIGATION BAR */}
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

// --- SCREEN COMPONENTS ---

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

    <Text style={styles.sectionTitle}>Junoon Favorites</Text>
    <View style={styles.favoriteCard}>
      <View style={styles.favIconBox}><Flower2 color="white" size={16}/></View>
      <Text style={styles.favText}>Morning Surya Flow</Text>
    </View>
  </View>
);

const NutritionContent = () => (
  <View>
    <Text style={styles.sectionTitle}>Nutrition Hub</Text>
    <View style={styles.mealSwitcher}>
      {['Breakfast', 'Lunch', 'Dinner'].map((m) => (
        <TouchableOpacity key={m} style={m === 'Lunch' ? styles.activeMealBtn : styles.mealBtn}>
          <Text style={m === 'Lunch' ? styles.activeMealText : styles.mealText}>{m}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Jain Dal Tadka & Roti</Text>
      <Text style={styles.infoSub}>450 Cal • Jain-Friendly High Protein</Text>
      <TouchableOpacity style={styles.swapBtn}><Text style={styles.swapText}>Swap Meal</Text></TouchableOpacity>
    </View>
  </View>
);

const ClassesContent = () => (
  <View>
    <Text style={styles.sectionTitle}>Explore Classes</Text>
    <View style={styles.grid}>
      <ActionTile label="Yoga" icon={<Flower2 color={COLORS.saffron} />} />
      <ActionTile label="Cardio" icon={<Zap color={COLORS.leaf} />} />
      <ActionTile label="Weights" icon={<Dumbbell color={COLORS.earth} />} />
      <ActionTile label="Breath" icon={<Wind color={COLORS.saffron} />} />
    </View>
    <Text style={styles.sectionTitle}>Live Schedule</Text>
    <View style={styles.liveCard}>
      <Text style={styles.liveTime}>6:00 PM</Text>
      <Text style={styles.liveTitle}>Pranayama Basics</Text>
    </View>
  </View>
);

const EducationContent = () => (
  <View>
    <Text style={styles.sectionTitle}>Knowledge Hub</Text>
    <View style={styles.searchContainer}>
      <Search size={18} color={COLORS.muted} />
      <TextInput placeholder="Search Articles..." style={styles.searchInput} />
    </View>
    <FeatureCard title="Ancient Wisdom: Doshas" sub="Founder Stories • Read 5m" color={COLORS.leaf} />
    <FeatureCard title="The Ghee Myth" sub="Nutrition Science • Read 8m" color={COLORS.saffron} />
    <FeatureCard title="Client Success: Priya" sub="Junoon Journeys • Read 4m" color={COLORS.earth} />
  </View>
);

const WorkoutContent = () => (
  <View>
    <Text style={styles.sectionTitle}>Today's Routine</Text>
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Surya Namaskar</Text>
      <Text style={styles.infoSub}>4 Sets × 12 Reps • Strength & Flex</Text>
    </View>
  </View>
);

// --- REUSABLE UI COMPONENTS ---

const ActionTile = ({ label, icon }) => (
  <TouchableOpacity style={styles.tile}>
    <View style={styles.tileIcon}>{icon}</View>
    <Text style={styles.tileLabel}>{label}</Text>
  </TouchableOpacity>
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

// --- STYLES ---

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  headerContainer: { paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  logoWrapper: { flex: 1 },
  logoText: { fontFamily: 'serif', fontSize: 24, fontWeight: '700', color: COLORS.dark, letterSpacing: 4 },
  logoTagline: { fontSize: 7, color: COLORS.muted, fontWeight: 'bold', letterSpacing: 1, marginTop: 4 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: COLORS.dark, justifyContent: 'center', alignItems: 'center' },
  profileInitials: { color: 'white', fontWeight: 'bold', fontSize: 11 },
  tabContent: { flex: 1, paddingHorizontal: 20 },
  bannerCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, elevation: 2, marginVertical: 10 },
  cardHeader: { fontFamily: 'serif', fontSize: 18, fontWeight: 'bold', color: COLORS.dark, marginBottom: 12 },
  progressTrack: { height: 6, backgroundColor: '#F0EBE6', borderRadius: 3 },
  progressFill: { height: 6, backgroundColor: COLORS.saffron, borderRadius: 3 },
  cardSubText: { fontSize: 10, color: COLORS.muted, marginTop: 8 },
  sectionTitle: { fontFamily: 'serif', fontSize: 18, fontWeight: 'bold', color: COLORS.dark, marginVertical: 15 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tile: { width: '48%', backgroundColor: 'white', padding: 15, borderRadius: 12, marginBottom: 15, alignItems: 'center', elevation: 1 },
  tileLabel: { fontSize: 12, fontWeight: 'bold', color: COLORS.dark, marginTop: 8 },
  favoriteCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 12, borderLeftWidth: 4, borderLeftColor: COLORS.saffron, elevation: 1 },
  favIconBox: { backgroundColor: COLORS.leaf, padding: 8, borderRadius: 8, marginRight: 15 },
  favText: { fontWeight: 'bold', color: COLORS.dark, fontSize: 14 },
  mealSwitcher: { flexDirection: 'row', backgroundColor: '#F0EBE6', borderRadius: 10, padding: 4, marginBottom: 20 },
  mealBtn: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeMealBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', backgroundColor: COLORS.white, borderRadius: 8 },
  mealText: { color: COLORS.muted, fontSize: 12, fontWeight: 'bold' },
  activeMealText: { color: COLORS.saffron, fontSize: 12, fontWeight: 'bold' },
  infoCard: { backgroundColor: 'white', padding: 20, borderRadius: 12, marginBottom: 15, borderLeftWidth: 5, borderLeftColor: COLORS.saffron, elevation: 1 },
  infoTitle: { fontWeight: 'bold', color: COLORS.dark, fontSize: 15, fontFamily: 'serif' },
  infoSub: { color: COLORS.muted, fontSize: 11, marginTop: 4 },
  swapBtn: { marginTop: 15, backgroundColor: COLORS.saffron, padding: 10, borderRadius: 8, alignItems: 'center' },
  swapText: { color: 'white', fontWeight: 'bold', fontSize: 12 },
  liveCard: { backgroundColor: COLORS.dark, padding: 20, borderRadius: 15, flexDirection: 'row', alignItems: 'center' },
  liveTime: { color: 'white', fontWeight: 'bold', marginRight: 20 },
  liveTitle: { color: 'white', fontSize: 14, fontWeight: '600' },
  searchContainer: { flexDirection: 'row', backgroundColor: 'white', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 20, elevation: 1 },
  searchInput: { marginLeft: 10, fontSize: 13, flex: 1 },
  tabBar: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#EEE' },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 9, marginTop: 4, fontWeight: 'bold' }
});
