import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { Flame, Dumbbell, Utensils, Calendar } from 'lucide-react-native';

// Import your screens (ensure these paths match your folder structure)
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import NutritionScreen from './screens/NutritionScreen';
import ClassesScreen from './screens/ClassesScreen';

const COLORS = { 
  saffron: '#E97451', 
  gold: '#B5A642',
  junoonDark: '#2D2926',
  muted: '#7A7A7A', 
  cream: '#FFF9F5' 
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      {/* SCREEN DISPLAY LOGIC */}
      <View style={{ flex: 1 }}>
        {activeTab === 'Home' && <HomeScreen />}
        {activeTab === 'Workout' && <WorkoutScreen />}
        {activeTab === 'Nutrition' && <NutritionScreen />}
        {activeTab === 'Classes' && <ClassesScreen />}
      </View>

      {/* FLOATING TASK BAR */}
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          <NavButton label="Home" icon={<Flame size={20} />} active={activeTab} set={setActiveTab} />
          <NavButton label="Workout" icon={<Dumbbell size={20} />} active={activeTab} set={setActiveTab} />
          <NavButton label="Nutrition" icon={<Utensils size={20} />} active={activeTab} set={setActiveTab} />
          <NavButton label="Classes" icon={<Calendar size={20} />} active={activeTab} set={setActiveTab} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const NavButton = ({ label, icon, active, set }) => {
  const isActive = active === label;
  return (
    <TouchableOpacity 
      onPress={() => set(label)} 
      style={styles.navButton}
      activeOpacity={0.7}
    >
      <View style={[styles.iconWrapper, isActive && styles.activeIconWrapper]}>
        {React.cloneElement(icon, { color: isActive ? COLORS.saffron : COLORS.muted })}
      </View>
      <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  
  // FLOATING EFFECT
  tabBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  tabBar: { 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    borderRadius: 35, 
    paddingVertical: 12, 
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    width: '100%',
    // Premium Shadow
    shadowColor: COLORS.gold,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(181, 166, 66, 0.2)', // Subtle Gold border
  },
  navButton: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  iconWrapper: {
    padding: 8,
    borderRadius: 20,
    marginBottom: 4,
  },
  activeIconWrapper: {
    backgroundColor: 'rgba(233, 116, 81, 0.1)', // Light Saffron glow
  },
  tabLabel: { 
    fontSize: 9, 
    fontWeight: '700', 
    color: COLORS.muted, 
    fontFamily: 'serif', 
    letterSpacing: 1,
    textTransform: 'uppercase' 
  },
  activeTabLabel: { color: COLORS.junoonDark },
});
