import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Play, Utensils, Flower2, BookOpen, User, Flame, Dumbbell, Calendar, Check, ChevronRight, PlayCircle, Search } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451', earth: '#8B4513', cream: '#FFF9F5', leaf: '#556B2F', white: '#FFFFFF', dark: '#121212'
};

export default function App() {
  const [appState, setAppState] = useState('onboarding'); 
  const [activeTab, setActiveTab] = useState('Home');

  // --- TAB 4: CLASSES (Screen 22-27) ---
  const ClassesContent = () => (
    <View style={{flex: 1}}>
      <Text style={styles.screenTitle}>Classes</Text>
      <View style={styles.categoryRow}>
        {['Cardio', 'Yoga', 'Meditation'].map(cat => (
          <TouchableOpacity key={cat} style={styles.catPill}><Text style={styles.catText}>{cat}</Text></TouchableOpacity>
        ))}
      </View>
      
      {/* Live Schedule Section - Lifetime Fitness Inspired  */}
      <View style={styles.liveContainer}>
        <View style={styles.liveHeader}>
          <Text style={styles.monthText}>September</Text>
          <TouchableOpacity><Text style={{color: COLORS.saffron}}>Filters</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateStrip}>
          {[21, 22, 23, 24, 25, 26, 27].map(d => (
            <View key={d} style={d === 24 ? styles.activeDay : styles.dayBox}>
              <Text style={d === 24 ? styles.activeDayText : styles.dayText}>{d}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.classCard}>
          <Text style={styles.classTime}>6:00 PM</Text>
          <View style={styles.classDetails}>
            <Text style={styles.className}>Hatha Yoga Flow</Text>
            <Text style={styles.classInstructor}>with Arjav • 45 min</Text>
          </View>
        </View>
      </View>
    </View>
  );

  // --- TAB 5: EDUCATION (Screen 41-42) ---
  const EducationContent = () => (
    <View style={{flex: 1}}>
      <Text style={styles.screenTitle}>Education</Text>
      <View style={styles.searchBar}>
        <Search color={COLORS.earth} size={20} />
        <TextInput placeholder="Search Ayurveda, fitness myths..." style={styles.searchInput} />
      </View>
      <TouchableOpacity style={styles.eduArticle}>
        <BookOpen color={COLORS.saffron} size={24} />
        <View style={{marginLeft: 15}}>
          <Text style={styles.articleTitle}>The Science of Pranayama</Text>
          <Text style={styles.articleSub}>Ayurvedic breathing techniques.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const MainApp = () => (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.tabContent}>
        {activeTab === 'Home' && <HomeContent />}
        {activeTab === 'Workout' && <WorkoutContent />}
        {activeTab === 'Classes' && <ClassesContent />}
        {activeTab === 'Education' && <EducationContent />}
        {activeTab === 'Nutrition' && <View style={styles.center}><Text>Nutrition Screen</Text></View>}
      </ScrollView>

      <View style={styles.tabBar}>
        <TabItem label="Home" icon={<Flame size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Workout" icon={<Dumbbell size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Nutrition" icon={<Utensils size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Classes" icon={<Play size={20} />} active={activeTab} set={setActiveTab} />
        <TabItem label="Education" icon={<BookOpen size={20} />} active={activeTab} set={setActiveTab} />
      </View>
    </View>
  );

  // Helper Components & Other Tab Content (Simplified for brevity)
  const HomeContent = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.brandTitle}>JUNOON</Text>
        <TouchableOpacity style={styles.profileBtn}><User color={COLORS.earth} size={24} /></TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>This Week's Progress</Text>
        <View style={styles.progressBar}><View style={[styles.progressFill, {width: '60%'}]} /></View>
        <Text style={styles.bannerSub}>60% of Weekly Goals Achieved [cite: 180]</Text>
      </View>
      <View style={styles.quickGrid}>
        <QuickBtn label="Workout" bg={COLORS.saffron} icon={<Play color="white" />} />
        <QuickBtn label="Meal Plan" bg={COLORS.leaf} icon={<Utensils color="white" />} />
        <QuickBtn label="Classes" bg="#6A5ACD" icon={<Calendar color="white" />} />
        <QuickBtn label="Education" bg="#B8860B" icon={<BookOpen color="white" />} />
      </View>
    </View>
  );

  const WorkoutContent = () => (
    <View>
      <Text style={styles.screenTitle}>Strength & Flow [cite: 54]</Text>
      <View style={styles.statRow}>
        <View style={styles.statBox}><Text style={styles.statNum}>42</Text><Text style={styles.statLabel}>Total Sessions [cite: 15]</Text></View>
        <View style={styles.statBox}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>Day Streak [cite: 180]</Text></View>
      </View>
      <View style={styles.exerciseCard}>
        <Text style={styles.exName}>Surya Namaskar [cite: 157]</Text>
        <Text style={styles.exDetail}>4 Sets × 12 Reps</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {appState === 'onboarding' && <OnboardingScreen setAppState={setAppState} />}
      {appState === 'intro' && <IntroVideoScreen setAppState={setAppState} />}
      {appState === 'main' && <MainApp />}
    </SafeAreaView>
  );
}

// ... (Sub-components like OnboardingScreen, IntroVideoScreen, TabItem, QuickBtn and Styles go here)
