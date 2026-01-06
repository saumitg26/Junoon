import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Flame, Zap, Leaf, Flower2, BookOpen, Bell, Sun } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  junoonDark: '#2D2926', // Deep Charcoal
  saffron: '#E97451',   // Rich Saffron
  gold: '#B5A642',      // Antique Gold
  cream: '#FFF9F5',     // Warm Off-white
  marigold: '#FFB300',  // Vibrant Yellow
  deepGreen: '#556B2F', // Forest Green
};

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 130 }} 
      showsVerticalScrollIndicator={false}
    >
      {/* FESTIVE PREMIUM HEADER */}
      <LinearGradient colors={['#FDF7E2', COLORS.cream]} style={styles.headerBackground}>
        <View style={styles.header}>
          <View>
            <Text style={styles.brandLogo}>J U N O O N</Text>
            <Text style={styles.tagline}>ANCIENT WISDOM • MODERN TECH</Text>
          </View>
          <TouchableOpacity style={styles.festiveIcon}>
            <Sun color={COLORS.gold} size={24} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* WELCOME SECTION */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeBack}>Welcome back,</Text>
        <Text style={styles.userName}>Saumit</Text>
      </View>

      {/* STREAK CARD - Diya Inspired */}
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

      {/* DAILY RITUALS GRID (2x2 Festive Layout) */}
      <Text style={styles.sectionTitle}>Daily Rituals</Text>
      <View style={styles.grid}>
        <ActionTile label="Yoga" sub="AI Flow" icon={<Sun color={COLORS.marigold} />} color="#FEF5E7" />
        <ActionTile label="Meal Plan" sub="Sattvic Diet" icon={<Leaf color={COLORS.deepGreen} />} color="#E9F5EE" />
        <ActionTile label="Meditation" sub="10 min Dhyana" icon={<Flower2 color={COLORS.saffron} />} color="#FDEDEC" />
        <ActionTile label="Wisdom" sub="Ancient Texts" icon={<BookOpen color={COLORS.gold} />} color="#F9F5E6" />
      </View>

      {/* RICH SILK GRADIENT RECOMMENDATIONS */}
      <Text style={styles.sectionTitle}>Auspicious Picks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <RecommendationCard colors={['#E97451', '#FFB300']} title="Surya Namaskar" icon={<Sun color="white" size={24} />} />
        <RecommendationCard colors={['#556B2F', '#B5A642']} title="Saffron Tea" icon={<Leaf color="white" size={24} />} />
        <RecommendationCard colors={['#2D2926', '#E97451']} title="Evening Chants" icon={<Flame color="white" size={24} />} />
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
    <LinearGradient 
      colors={colors} 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 1}} 
      style={styles.gradientCard}
    >
      {icon}
      <Text style={styles.cardTitle}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  headerBackground: { borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingBottom: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 50, alignItems: 'center' },
  brandLogo: { fontSize: 24, fontWeight: 'bold', letterSpacing: 6, color: COLORS.junoonDark },
  tagline: { fontSize: 7, color: COLORS.gold, fontWeight: 'bold', letterSpacing: 1.5, marginTop: 4 },
  festiveIcon: { padding: 10, borderRadius: 50, backgroundColor: 'white', elevation: 3 },
  welcomeContainer: { paddingHorizontal: 25, marginTop: 15 },
  welcomeBack: { color: COLORS.gold, fontSize: 16, fontWeight: '600' },
  userName: { fontSize: 34, fontWeight: 'bold', color: COLORS.junoonDark },
  streakCard: { 
    backgroundColor: 'white', margin: 20, padding: 25, borderRadius: 24, 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', 
    elevation: 5, borderLeftWidth: 6, borderLeftColor: COLORS.saffron 
  },
  streakLabel: { color: COLORS.gold, fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
  streakDays: { fontSize: 32, fontWeight: 'bold', color: COLORS.saffron },
  dotRow: { flexDirection: 'row', marginTop: 12 },
  festiveDot: { 
    width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.marigold, 
    marginRight: 6, borderWidth: 1, borderColor: COLORS.saffron 
  },
  flameCircle: { backgroundColor: '#FFF9E6', padding: 15, borderRadius: 35, borderWidth: 1, borderColor: COLORS.marigold },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', paddingHorizontal: 25, marginVertical: 20, color: COLORS.junoonDark },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  tile: { 
    width: '47%', padding: 20, borderRadius: 20, alignItems: 'center', 
    marginBottom: 15, elevation: 4, backgroundColor: 'white',
    borderTopWidth: 3, borderTopColor: COLORS.gold 
  },
  tileIconCircle: { padding: 12, borderRadius: 50, marginBottom: 10 },
  tileLabel: { fontWeight: 'bold', fontSize: 14, color: COLORS.junoonDark },
  tileSub: { fontSize: 10, color: COLORS.gold, marginTop: 2, fontWeight: '600' },
  horizontalScroll: { paddingLeft: 20 },
  cardShadow: { shadowColor: COLORS.saffron, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  gradientCard: { width: 160, height: 210, borderRadius: 24, padding: 20, justifyContent: 'space-between', marginRight: 15 },
  cardTitle: { color: 'white', fontWeight: 'bold', fontSize: 19 }
});
