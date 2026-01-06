import React, { useState } from 'react';
import { 
  SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity 
} from 'react-native';
import { 
  Flame, Dumbbell, Utensils, Play, BookOpen 
} from 'lucide-react-native';

// IMPORT YOUR EXTERNAL SCREENS HERE
import HomeScreen from './src/screens/Home/HomeScreen'; 
// import WorkoutScreen from './src/screens/Workout/WorkoutScreen';
// import NutritionScreen from './src/screens/Nutrition/NutritionScreen';

const COLORS = {
  saffron: '#E97451',
  muted: '#7A7A7A',
  cream: '#FFF9F5',
  dark: '#2D2926',
  white: '#FFFFFF'
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  // RENDER LOGIC
  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />; // Calling your new standout screen
      case 'Workout':
        return <PlaceholderScreen title="Workouts" />;
      case 'Nutrition':
        return <PlaceholderScreen title="Nutrition" />;
      case 'Classes':
        return <PlaceholderScreen title="Classes" />;
      case 'Education':
        return <PlaceholderScreen title="Education" />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* GLOBAL HEADER LOGIC */}
      <View style={styles.headerContainer}>
        {activeTab === 'Home' ? (
          <View style={styles.brandContainer}>
            <View>
              <Text style={styles.logoText}>J U N O O N</Text>
              <Text style={styles.logoTagline}>ANCIENT WISDOM • MODERN TECH</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.innerPageTitle}>{activeTab.toUpperCase()}</Text>
        )}
      </View>

      {/* DYNAMIC CONTENT AREA */}
      <View style={{ flex: 1 }}>
        {renderContent()}
      </View>

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

// SHARED COMPONENTS
const TabItem = ({ label, icon, active, set }) => (
  <TouchableOpacity onPress={() => set(label)} style={styles.tabBtn}>
    {React.cloneElement(icon, { color: active === label ? COLORS.saffron : COLORS.muted })}
    <Text style={[styles.tabLabel, {color: active === label ? COLORS.saffron : COLORS.muted}]}>{label}</Text>
  </TouchableOpacity>
);

const PlaceholderScreen = ({ title }) => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>{title} Content Coming Soon</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  headerContainer: { paddingHorizontal: 20, paddingTop: 10, marginBottom: 10 },
  brandContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  logoText: { fontSize: 22, fontWeight: '700', color: COLORS.dark, letterSpacing: 4, textAlign: 'center' },
  logoTagline: { fontSize: 7, color: COLORS.muted, fontWeight: 'bold', letterSpacing: 1, marginTop: 4, textAlign: 'center' },
  innerPageTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.dark, letterSpacing: 2, textAlign: 'center' },
  tabBar: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 12, borderTopWidth: 1, borderTopColor: '#EEE', paddingBottom: 25 },
  tabBtn: { flex: 1, alignItems: 'center' },
  tabLabel: { fontSize: 9, marginTop: 4, fontWeight: 'bold' },
  placeholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { color: COLORS.muted, fontSize: 14 }
});
