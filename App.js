import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Flame, Dumbbell, Utensils } from 'lucide-react-native';

// Import your themed screens
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const COLORS = { 
  saffron: '#E97451', 
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
      </View>

      {/* FLOATING TASK BAR */}
      <View style={styles.tabBar}>
        <NavButton label="Home" icon={<Flame />} active={activeTab} set={setActiveTab} />
        <NavButton label="Workout" icon={<Dumbbell />} active={activeTab} set={setActiveTab} />
        <NavButton label="Nutrition" icon={<Utensils />} active={activeTab} set={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

// GROWING BUTTON COMPONENT
const NavButton = ({ label, icon, active, set }) => {
  const isActive = active === label;
  
  return (
    <TouchableOpacity 
      onPress={() => set(label)} 
      style={[
        styles.tabBtn, 
        isActive && { transform: [{ scale: 1.2 }, { translateY: -5 }] } // Makes it bigger and lifts it up
      ]}
    >
      <View style={isActive ? styles.activeCircle : null}>
        {React.cloneElement(icon, { 
          size: isActive ? 24 : 20, 
          color: isActive ? COLORS.saffron : COLORS.muted 
        })}
      </View>
      <Text style={[styles.tabLabel, { color: isActive ? COLORS.saffron : COLORS.muted, fontWeight: isActive ? 'bold' : 'normal' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  tabBar: { 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    height: 85,
    position: 'absolute', // Makes it float
    bottom: 30,           // Moves it up from the very bottom
    left: 20,
    right: 20,
    borderRadius: 35,     // Rounded corners for the bar
    elevation: 10,        // Shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 15,
  },
  tabBtn: { alignItems: 'center', justifyContent: 'center' },
  tabLabel: { fontSize: 10, marginTop: 4 },
  activeCircle: {
    backgroundColor: '#FFF1ED', // Light orange glow behind active icon
    padding: 8,
    borderRadius: 20,
  }
});
