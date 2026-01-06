import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Flame, Zap, Leaf, Flower2, BookOpen, Sun, Bell, Flower } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

// --- PREMIUM HEADER COMPONENT ---
const PremiumHeader = ({ title }) => (
  <View style={styles.premiumHeaderContainer}>
    <View style={styles.goldLine} />
    <Text style={styles.premiumHeaderText}>{title}</Text>
    <View style={styles.goldLine} />
  </View>
);

const COLORS = {
  junoonDark: '#2D2926', 
  saffron: '#E97451',   
  gold: '#B5A642',      
  cream: '#FFF9F5',     
  marigold: '#FFB300',  
  deepGreen: '#556B2F', 
};

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 140 }} 
      showsVerticalScrollIndicator={false}
    >
      {/* CENTERED BRANDED HEADER */}
      <View style={styles.header}>
        <Text style={styles.brandLogo}>J U N O O N</Text>
        <Text style={styles.tagline}>ANCIENT WISDOM • MODERN TECH</Text>
      </View>

      {/* WELCOME SECTION WITH MANDALA WATERMARK */}
      <View style={styles.welcomeContainer}>
        <View style={styles.mandalaWrapper}>
          <Flower color={COLORS.gold} size={220} strokeWidth={0.3} style={{ opacity: 0.08 }} />
        </View>
        <Text style={styles.welcomeBack}>Welcome back,</Text>
        <Text style={styles.userName}>Saumit</Text>
      </View>

      {/* STREAK CARD */}
      <View style={styles.streakCard}>
        <View>
          <Text style={styles.streakLabel}>DAILY RITUAL STREAK</Text>
          <Text style={styles.streakDays}>7 days</Text>
          <View style={styles.dotRow}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View key={i} style={styles.festiveDot} />
            ))}
          </View>
        </View>
        <View style={styles.flameCircle}>
          <Flame color={COLORS.saffron} size={35} fill={COLORS.marigold} />
        </View>
      </View>

      {/* QUICK ACTIONS GRID */}
      <PremiumHeader title="Quick Actions" />
      <View style={styles.grid}>
        <ActionTile label="Yoga" sub="AI Flow" icon={<Sun color={COLORS.marigold} />} color="#FEF5E7" />
        <ActionTile label="Meal Plan" sub="Sattvic Diet" icon={<Leaf color={COLORS.deepGreen} />} color="#E9F5EE" />
        <ActionTile label="Meditation" sub="10 min Dhyana" icon={<Flower2 color={COLORS.saffron} />} color="#FDEDEC" />
        <ActionTile label="Learn" sub="Ancient Wisdom" icon={<BookOpen color={COLORS.gold} />} color="#F9F5E6" />
      </View>

      {/* AUSPICIOUS PICKS */}
      <PremiumHeader title="Today's Recommendations" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <RecommendationCard colors={['#E97451', '#FFB300']} title="Morning Yoga" icon={<Sun color="white" size={24} />} />
        <RecommendationCard colors={['#556B2F', '#B5A642']} title="Ayurvedic Breakfast" icon={<Leaf color="white" size={24} />} />
        <RecommendationCard colors={['#2D2926', '#E97451']} title="Evening Chants" icon={<Flame color="white" size={24} />} />
        <RecommendationCard colors={['#4A90E2', '#2D2926']} title="Deep Breath" icon={<Flower2 color="white" size={24} />} />
      </ScrollView>
    </ScrollView>
  );
}

const ActionTile = ({ label, sub, icon, color }) => (
  <TouchableOpacity style={styles.tile}>
    <View style={[styles.tileIconCircle, { backgroundColor: color }]}>{icon}</View>
    <Text style={styles.tileLabel}>{label}</Text>
    <Text style={styles.tileSub}>{sub}</Text>
  </TouchableOpacity>
);

const RecommendationCard = ({ colors, title, icon }) => (
  <TouchableOpacity style={styles.cardShadow}>
    <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.gradientCard}>
      {icon}
      <Text style={styles.cardTitle}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  header: { alignItems: 'center', paddingTop: 60, paddingBottom: 10 },
  brandLogo: { fontSize: 26, fontWeight: '700', letterSpacing: 6, color: COLORS.junoonDark, fontFamily: 'serif' },
  tagline: { fontSize: 8, color: COLORS.gold, fontWeight: 'bold', letterSpacing: 2, fontFamily: 'monospace' },
  
  welcomeContainer: { paddingHorizontal: 25, marginVertical: 30, alignItems: 'center', justifyContent: 'center', height: 100 },
  mandalaWrapper: { position: 'absolute', zIndex: -1, justifyContent: 'center', alignItems: 'center' },
  welcomeBack: { color: COLORS.gold, fontSize: 13, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },
  userName: { fontSize: 42, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif', marginTop: 4 },

  streakCard: { 
    backgroundColor: 'white', margin: 20, padding: 25, borderRadius: 24, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    elevation: 5, borderLeftWidth: 6, borderLeftColor: COLORS.saffron 
  },
  streakLabel: { color: COLORS.gold, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  streakDays: { fontSize: 32, fontWeight: 'bold', color: COLORS.saffron },
  dotRow: { flexDirection: 'row', marginTop: 12 },
  festiveDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.marigold, marginRight: 6, borderWidth: 1, borderColor: COLORS.saffron },
  flameCircle: { backgroundColor: '#FFF9E6', padding: 15, borderRadius: 35, borderWidth: 1, borderColor: COLORS.marigold },
  
  premiumHeaderContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginVertical: 35 },
  goldLine: { flex: 1, height: 1, backgroundColor: 'rgba(181, 166, 66, 0.3)' },
  premiumHeaderText: { fontSize: 10, fontWeight: '700', color: COLORS.gold, letterSpacing: 6, textTransform: 'uppercase', paddingHorizontal: 15, fontFamily: 'serif' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  tile: { 
    width: '48%', padding: 20, borderRadius: 24, alignItems: 'center', 
    marginBottom: 15, elevation: 4, backgroundColor: 'white',
    borderTopWidth: 3, borderTopColor: COLORS.gold 
  },
  tileIconCircle: { padding: 12, borderRadius: 50, marginBottom: 10 },
  tileLabel: { fontWeight: '300', fontSize: 16, color: COLORS.junoonDark, fontFamily: 'serif', letterSpacing: 0.5 },
  tileSub: { fontSize: 8, color: COLORS.gold, marginTop: 4, fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase' },

  horizontalScroll: { paddingLeft: 20 },
  cardShadow: { shadowColor: COLORS.saffron, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  gradientCard: { width: 160, height: 210, borderRadius: 24, padding: 20, justifyContent: 'space-between', marginRight: 15 },
  cardTitle: { color: 'white', fontWeight: '300', fontSize: 22, fontFamily: 'serif', letterSpacing: 1 }
});
