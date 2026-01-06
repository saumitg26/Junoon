import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// JUNOON Branding Colors
const COLORS = {
  saffron: '#E97451',
  leaf: '#556B2F',
  gold: '#B5A642',
  cream: '#FFF9F5', // Beige background
  dark: '#1C1C1E',
  muted: '#8E8E93',
  white: '#FFFFFF',
};

export default function HomeScreen({ navigation }) {
  // Navigation actions
  const actions = [
    { title: "Today's Workout", subText: "AI Generated", icon: "dumbbell", color: COLORS.leaf, screen: "Workout" },
    { title: "Meal Plan", subText: "Ayurvedic", icon: "silverware-fork-knife", color: COLORS.saffron, screen: "Nutrition" },
    { title: "Meditation", subText: "10 min Session", icon: "flower", color: COLORS.muted, screen: "Meditation" },
    { title: "Learn", subText: "Wellness Tips", icon: "book-open-variant", color: COLORS.muted, screen: "Education" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER SECTION */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.userName}>Test User</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle" size={42} color={COLORS.dark} />
        </TouchableOpacity>
      </View>
      <Text style={styles.tagline}>Ready to continue your wellness journey?</Text>

      {/* 7-DAY STREAK CARD */}
      <View style={styles.streakCard}>
        <View>
          <Text style={styles.streakLabel}>Daily Streak</Text>
          <Text style={styles.streakCount}>7 days</Text>
          <View style={styles.dotRow}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View key={i} style={styles.activeDot} />
            ))}
            <View style={styles.inactiveDot} />
          </View>
        </View>
        <MaterialCommunityIcons name="fire" size={48} color={COLORS.saffron} />
      </View>

      {/* QUICK ACTIONS GRID */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionGrid}>
        {actions.map((action, idx) => (
          <TouchableOpacity 
            key={idx} 
            style={styles.actionCard} 
            onPress={() => navigation.navigate(action.screen)}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name={action.icon} size={24} color={action.color} />
            </View>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.actionSub}>{action.subText}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* RECOMMENDATIONS SECTION */}
      <Text style={styles.sectionTitle}>Today's Recommendations</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recScroll}>
        <TouchableOpacity style={[styles.recCard, { backgroundColor: '#91C788' }]}>
          <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" style={styles.recIcon} />
          <Text style={styles.recText}>{"Morning\nYoga"}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.recCard, { backgroundColor: '#FFA500' }]}>
          <MaterialCommunityIcons name="food-apple" size={24} color="white" style={styles.recIcon} />
          <Text style={styles.recText}>{"Ayurvedic\nBreakfast"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.recCard, { backgroundColor: '#4A90E2' }]}>
          <MaterialCommunityIcons name="wind" size={24} color="white" style={styles.recIcon} />
          <Text style={styles.recText}>{"Breathing\nExercise"}</Text>
        </TouchableOpacity>
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream, padding: 20 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 },
  welcomeText: { fontSize: 16, color: COLORS.muted, fontWeight: "500" },
  userName: { fontSize: 28, fontWeight: "bold", color: COLORS.dark },
  tagline: { fontSize: 14, color: COLORS.muted, marginTop: 8, marginBottom: 20 },
  
  streakCard: { 
    backgroundColor: COLORS.white, borderRadius: 24, padding: 20, 
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    elevation: 4, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, marginBottom: 25 
  },
  streakLabel: { color: COLORS.muted, fontSize: 14, fontWeight: "600" },
  streakCount: { fontSize: 26, fontWeight: "bold", color: COLORS.saffron, marginVertical: 4 },
  dotRow: { flexDirection: "row", marginTop: 6 },
  activeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.saffron, marginRight: 6 },
  inactiveDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#E5E5EA" },

  sectionTitle: { fontSize: 18, fontWeight: "bold", color: COLORS.dark, marginBottom: 15 },
  
  actionGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  actionCard: { 
    width: "48%", backgroundColor: COLORS.white, borderRadius: 20, padding: 16, 
    marginBottom: 15, alignItems: "center", elevation: 2, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 5 
  },
  iconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: "#F2F2F7", justifyContent: "center", alignItems: "center", marginBottom: 10 },
  actionTitle: { fontSize: 13, fontWeight: "bold", color: COLORS.dark, textAlign: "center" },
  actionSub: { fontSize: 10, color: COLORS.muted, marginTop: 2 },

  recScroll: { marginBottom: 40 },
  recCard: { width: 130, height: 160, borderRadius: 22, padding: 16, marginRight: 15, justifyContent: "flex-end" },
  recIcon: { position: "absolute", top: 16, left: 16 },
  recText: { color: "white", fontWeight: "bold", fontSize: 14, lineHeight: 20 }
});
