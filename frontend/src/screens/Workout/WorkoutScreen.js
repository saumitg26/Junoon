import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { PlayCircle, Zap, Dumbbell, Timer, Flower, Move } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  junoonDark: '#2D2926',
  saffron: '#E97451',
  gold: '#B5A642',
  cream: '#FFF9F5',
  deepGreen: '#556B2F',
  marigold: '#FFB300',
};

// --- PREMIUM HEADER ---
const PremiumHeader = ({ title }) => (
  <View style={styles.premiumHeaderContainer}>
    <View style={styles.goldLine} />
    <Text style={styles.premiumHeaderText}>{title}</Text>
    <View style={styles.goldLine} />
  </View>
);

export default function WorkoutScreen() {
  const [activeTab, setActiveTab] = useState('Stretching');
  const tabs = ['Stretching', 'Cardio', 'Weight Training'];

  return (
    // SILK TEXTURE GRADIENT
    <LinearGradient 
      colors={['#FFF9F5', '#FDEEE0', '#F9E4D4']} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={{ paddingBottom: 140, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER WITH WATERMARK */}
        <View style={styles.headerContainer}>
          <View style={styles.mandalaWrapper}>
            <Flower color={COLORS.gold} size={220} strokeWidth={0.2} style={{ opacity: 0.1 }} />
          </View>
          <Text style={styles.header}>Workouts</Text>
          <Text style={styles.subHeader}>PHYSICAL EXCELLENCE • MODERN TECH</Text>
        </View>

        {/* TAB SELECTOR */}
        <View style={styles.tabContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveTab(tab)}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <PremiumHeader title="Featured" />
        
        {/* FEATURED CARD */}
        <TouchableOpacity style={styles.cardShadow}>
          <LinearGradient colors={[COLORS.saffron, COLORS.marigold]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.featuredCard}>
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredLabel}>PERFECT START</Text>
              <Text style={styles.featuredTitle}>Morning Yoga Flow</Text>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Beginner</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>25 min</Text></View>
              </View>
            </View>
            <PlayCircle color="white" size={40} fill="rgba(255,255,255,0.3)" />
          </LinearGradient>
        </TouchableOpacity>

        <PremiumHeader title="Today's AI Recommendations" />
        
        {/* UNIQUE VARIATED BOXES */}
        <WorkoutItem 
          title="Full Body Strength" 
          sub="BUILD MUSCLE WITH COMPOUND MOVEMENTS" 
          time="45 min" 
          level="Intermediate" 
          accent={COLORS.gold}
          icon={<Dumbbell color={COLORS.gold} size={22} />} 
        />

        <WorkoutItem 
          title="Cardio Blast" 
          sub="HIGH-INTENSITY FAT BURNING RITUAL" 
          time="30 min" 
          level="Advanced" 
          accent={COLORS.saffron}
          icon={<Zap color={COLORS.saffron} size={22} />} 
        />

        <WorkoutItem 
          title="Yoga Flow" 
          sub="STRETCHING FOR MINDFUL FLEXIBILITY" 
          time="20 min" 
          level="Beginner" 
          accent={COLORS.deepGreen}
          icon={<Move color={COLORS.deepGreen} size={22} />} 
        />
      </ScrollView>
    </LinearGradient>
  );
}

const WorkoutItem = ({ title, sub, time, level, icon, accent }) => (
  <TouchableOpacity style={styles.workoutItemContainer}>
    <LinearGradient colors={['#FFFFFF', '#FFFDF9']} style={[styles.workoutItem, { borderLeftColor: accent }]}>
      <View style={[styles.iconBox, { shadowColor: accent }]}>{icon}</View>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={[styles.itemSub, { color: accent }]}>{sub}</Text>
        <View style={styles.itemMeta}>
          <Timer size={12} color="#8E8E93" />
          <Text style={styles.metaText}>{time} • {level}</Text>
        </View>
      </View>
      <View style={styles.playButtonCircle}>
        <PlayCircle color={accent} size={26} strokeWidth={1.5} />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: 'transparent' }, // FIX: Shows gradient underneath
  headerContainer: { marginTop: 40, marginBottom: 20, alignItems: 'center', height: 100, justifyContent: 'center' },
  header: { fontSize: 32, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif' },
  subHeader: { fontSize: 8, color: COLORS.gold, fontWeight: 'bold', letterSpacing: 2, fontFamily: 'monospace', marginTop: 5 },
  mandalaWrapper: { position: 'absolute', zIndex: -1, justifyContent: 'center', alignItems: 'center' },
  
  premiumHeaderContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 35 },
  goldLine: { flex: 1, height: 1, backgroundColor: 'rgba(181, 166, 66, 0.3)' },
  premiumHeaderText: { fontSize: 10, fontWeight: '700', color: COLORS.gold, letterSpacing: 6, textTransform: 'uppercase', paddingHorizontal: 15, fontFamily: 'serif' },

  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  tab: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', marginRight: 8, elevation: 2 },
  activeTab: { backgroundColor: COLORS.junoonDark },
  tabText: { fontSize: 11, fontWeight: '500', color: '#7A7A7A', letterSpacing: 1 },
  activeTabText: { color: 'white' },

  featuredCard: { borderRadius: 28, padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  featuredLabel: { color: 'white', fontSize: 9, fontWeight: 'bold', letterSpacing: 3 },
  featuredTitle: { color: 'white', fontSize: 24, fontWeight: '300', fontFamily: 'serif', marginTop: 5 },
  
  workoutItemContainer: { marginBottom: 22, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 15, elevation: 8 },
  workoutItem: { 
    borderRadius: 30, padding: 22, flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(0,0,0,0.03)', borderLeftWidth: 6 // UNIQUE ACCENT
  },
  itemTitle: { fontSize: 18, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif' },
  itemSub: { fontSize: 8.5, marginTop: 7, fontWeight: '700', letterSpacing: 1.5, fontFamily: 'monospace' }, // SLEEK TECH FONT
  itemMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  metaText: { fontSize: 10, color: '#8E8E93', fontWeight: 'bold', marginLeft: 6, textTransform: 'uppercase' },
  
  iconBox: { width: 58, height: 58, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: 18, elevation: 4, shadowOpacity: 0.1 },
  itemContent: { flex: 1 },
  playButtonCircle: { backgroundColor: COLORS.cream, padding: 6, borderRadius: 50 },
  tagRow: { flexDirection: 'row', marginTop: 15 },
  tag: { backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, marginRight: 8 },
  tagText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  cardShadow: { elevation: 12, shadowColor: COLORS.saffron, shadowOpacity: 0.25, shadowRadius: 15, marginBottom: 10 }
});
