import React, { useState } from 'react';
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, 
  SafeAreaView, TextInput, Dimensions 
} from 'react-native';
import { 
  Play, Utensils, Flower2, BookOpen, User, Flame, 
  Dumbbell, Calendar, Check, ChevronLeft, PlayCircle, Search 
} from 'lucide-react-native';

// JUNOON THEME COLORS
const COLORS = {
  saffron: '#E97451',   
  earth: '#8B4513',     
  cream: '#FFF9F5',     
  leaf: '#556B2F',      
  white: '#FFFFFF',
  dark: '#121212',
  muted: '#7A7A7A'
};

export default function App() {
  const [appState, setAppState] = useState('onboarding'); 
  const [activeTab, setActiveTab] = useState('Home');

  // --- NAVIGATION LOGIC ---
  if (appState === 'onboarding') {
    return <OnboardingScreen onFinish={() => setAppState('intro')} />;
  }

  if (appState === 'intro') {
    return <IntroVideoScreen onFinish={() => setAppState('main')} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.tabContent}>
        {activeTab === 'Home' && <HomeContent />}
        {activeTab === 'Workout' && <WorkoutContent />}
        {activeTab === 'Nutrition' && <NutritionContent />}
        {activeTab === 'Classes' && <ClassesContent />}
        {activeTab === 'Education' && <EducationContent />}
      </ScrollView>

      {/* BOTTOM TAB BAR */}
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

// --- SCREEN COMPONENTS ---

const OnboardingScreen = ({ onFinish }) => (
  <SafeAreaView style={[styles.safeArea, styles.fullCenter]}>
    <Text style={styles.questionText}>Select Dietary Preference</Text>
    {['Jain-friendly', 'Vegetarian', 'Vegan', 'Non-Veg'].map(diet => (
      <TouchableOpacity key={diet} style={styles.optionCard} onPress={onFinish}>
        <Text style={styles.optionLabel}>{diet}</Text>
        <Check color={COLORS.saffron} size={20} />
      </TouchableOpacity>
    ))}
  </SafeAreaView>
);

const IntroVideoScreen = ({ onFinish }) => (
  <View style={[styles.fullCenter, { backgroundColor: '#000' }]}>
    <PlayCircle color="white" size={80} />
    <Text style={styles.videoText}>Wellness, Rooted in Tradition</Text>
    <TouchableOpacity style={styles.enterBtn} onPress={onFinish}>
      <Text style={styles.enterBtnText}>Enter Main App</Text>
    </TouchableOpacity>
  </View>
);

const HomeContent = () => (
  <View>
    <View style={styles.header}>
      <Text style={styles.brandTitle}>JUNOON</Text>
      <TouchableOpacity style={styles.profileBtn}><User color={COLORS.earth} size={24} /></TouchableOpacity>
    </View>
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>Weekly Progress</Text>
      <View style={styles.progressBar}><View style={[styles.progressFill, {width: '60%'}]} /></View>
    </View>
    <View style={styles.quickGrid}>
      <QuickBtn label="Workout" bg={COLORS.saffron} icon={<Play color="white" />} />
      <QuickBtn label="Meal Plan" bg={COLORS.leaf} icon={<Utensils color="white" />} />
    </View>
  </View>
);

const WorkoutContent = () => (
  <View>
    <Text style={styles.screenTitle}>Today's Routine</Text>
    <View style={styles.statRow}>
      <View style={styles.statBox}><Text style={styles.statNum}>42</Text><Text style={styles.statLabel}>Sessions</Text></View>
      <View style={styles.statBox}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>Streak</Text></View>
    </View>
    <View style={styles.exerciseCard}>
      <Text style={styles.exName}>Surya Namaskar</Text>
      <Text style={styles.exDetail}>4 Sets × 12 Reps</Text>
    </View>
  </View>
);

const NutritionContent = () => (
  <View>
    <Text style={styles.screenTitle}>Suggested Meal</Text>
    <View style={styles.exerciseCard}>
      <Text style={styles.exName}>Dal Tadka & Roti</Text>
      <Text style={styles.exDetail}>450 Cal • Jain-Friendly</Text>
      <TouchableOpacity style={styles.swapBtn}><Text style={styles.swapText}>Swap Meal</Text></TouchableOpacity>
    </View>
  </View>
);

const ClassesContent = () => (
  <View>
    <Text style={styles.screenTitle}>Live Classes</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateStrip}>
      {[21, 22, 23, 24, 25].map(d => (
        <View key={d} style={d === 24 ? styles.activeDay : styles.dayBox}>
          <Text style={d === 24 ? styles.activeDayText : styles.dayText}>{d}</Text>
        </View>
      ))}
    </ScrollView>
    <View style={styles.exerciseCard}>
      <Text style={styles.exName}>Hatha Yoga Flow</Text>
      <Text style={styles.exDetail}>6:00 PM • 45 min</Text>
    </View>
  </View>
);

const EducationContent = () => (
  <View>
    <Text style={styles.screenTitle}>Education</Text>
    <View style={styles.searchBar}>
      <Search color={COLORS.muted} size={20} />
      <TextInput placeholder="Search Ayurveda..." style={{marginLeft: 10}} />
    </View>
  </View>
);

// --- HELPERS ---
const TabItem = ({ label, icon, active, set }) => (
  <TouchableOpacity onPress={() => set(label)} style={styles.tabBtn}>
    {React.cloneElement(icon, { color: active === label ? COLORS.saffron : COLORS.muted })}
    <Text style={[styles.tabLabel, {color: active === label ? COLORS.saffron : COLORS.muted}]}>{label}</Text>
  </TouchableOpacity>
);

const QuickBtn = ({ label, bg, icon }) => (
  <TouchableOpacity style={styles.qBox}>
    <View style={[styles.qIcon, {backgroundColor: bg}]}>{icon}</View>
    <Text style={styles.qLabel}>{label}</Text>
  </TouchableOpacity>
);

// --- STYLES (The fix for your error) ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  fullCenter: { flex: 1, padding: 30, justifyContent: 'center' },
  questionText: { fontSize: 26, fontWeight: 'bold', color: COLORS.earth, marginBottom: 30 },
  optionCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', elevation: 2 },
  optionLabel: { fontSize: 16, fontWeight: '600' },
  videoText: { color: 'white', marginTop: 20, fontSize: 18, textAlign: 'center' },
  enterBtn: { backgroundColor: COLORS.saffron, padding: 20, borderRadius: 15, marginTop: 40 },
  enterBtnText: { color: 'white', fontWeight: 'bold' },
  tabContent: { padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  brandTitle: { fontSize: 24, fontWeight: '900', color: COLORS.earth },
  profileBtn: { backgroundColor: 'white', padding: 10, borderRadius: 12, elevation: 3 },
  banner: { backgroundColor: 'white', padding: 20, borderRadius: 20, marginBottom: 25 },
  bannerTitle: { fontWeight: 'bold', marginBottom: 10 },
  progressBar: { height: 8, backgroundColor: '#F0F0F0', borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: COLORS.saffron, borderRadius: 4 },
  quickGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  qBox: { width: '48%', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 15, alignItems: 'center' },
  qIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  qLabel: { fontWeight: '600' },
  screenTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.earth, marginBottom: 20 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { backgroundColor: COLORS.earth, padding: 15, borderRadius: 15, width: '48%', alignItems: 'center' },
  statNum: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  exerciseCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 15 },
  exName: { fontSize: 18, fontWeight: 'bold' },
  exDetail: { color: COLORS.muted, marginTop: 4 },
  swapBtn: { marginTop: 15, backgroundColor: COLORS.saffron, padding: 10, borderRadius: 8, alignItems: 'center' },
  swapText: { color: 'white', fontWeight: 'bold' },
  dateStrip: { flexDirection: 'row', marginBottom: 20 },
  dayBox: { padding: 15, alignItems: 'center' },
  activeDay: { backgroundColor: COLORS.saffron, padding: 15, borderRadius: 15, alignItems: 'center' },
  dayText: { color: COLORS.muted },
  activeDayText: { color: 'white', fontWeight: 'bold' },
  searchBar: { flexDirection: 'row', backgroundColor: 'white', padding: 12, borderRadius: 12, alignItems: 'center' },
  tabBar: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#EEE' },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 10, marginTop: 4 }
});
