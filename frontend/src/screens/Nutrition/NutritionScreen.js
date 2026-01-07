import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Leaf, Flame, Timer, Flower, UtensilsCrossed, ChevronRight, RotateCw } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  junoonDark: '#2D2926',
  saffron: '#E97451',
  gold: '#B5A642',
  cream: '#FFF9F5',
  deepGreen: '#556B2F',
  marigold: '#FFB300',
};

// --- UPDATED PREMIUM HEADER ---
const PremiumHeader = ({ title, onRefresh }) => (
  <View style={styles.premiumHeaderContainer}>
    <View style={styles.goldLine} />
    <View style={styles.headerTextWrapper}>
      <Text style={styles.premiumHeaderText}>{title}</Text>
      {onRefresh && (
        <TouchableOpacity onPress={onRefresh} style={styles.refreshButton} activeOpacity={0.7}>
          <RotateCw color={COLORS.gold} size={14} strokeWidth={2.5} />
        </TouchableOpacity>
      )}
    </View>
    <View style={styles.goldLine} />
  </View>
);

export default function NutritionScreen() {
  const [activeMeal, setActiveMeal] = useState('Breakfast');
  const mealTabs = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  const handleRegenerate = () => {
    // Logic to swap/refresh meals
    console.log(`Regenerating ${activeMeal} options...`);
  };

  return (
    <LinearGradient colors={['#FFF9F5', '#FDEEE0', '#F9E4D4']} style={{ flex: 1 }}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={{ paddingBottom: 140, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <View style={styles.mandalaWrapper}>
            <Flower color={COLORS.gold} size={220} strokeWidth={0.2} style={{ opacity: 0.1 }} />
          </View>
          <Text style={styles.header}>Nutrition</Text>
          <Text style={styles.subHeader}>SATTVIC DIET • MODERN TECH</Text>
        </View>

        <View style={styles.tabContainer}>
          {mealTabs.map((tab) => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveMeal(tab)}
              style={[styles.tab, activeMeal === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeMeal === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION WITH REFRESH BUTTON */}
        <PremiumHeader title={`Today's ${activeMeal}`} onRefresh={handleRegenerate} />
        
        <MealItem 
          title="Masala Oats" 
          sub="320 CAL • PROTEIN RICH" 
          time="15 min" 
          accent={COLORS.saffron}
          icon={<Flame color={COLORS.saffron} size={22} />} 
        />

        <MealItem 
          title="Fresh Fruit Bowl" 
          sub="150 CAL • ANTIOXIDANT BOOST" 
          time="5 min" 
          accent={COLORS.deepGreen}
          icon={<Leaf color={COLORS.deepGreen} size={22} />} 
        />

        <PremiumHeader title="Featured Recipe" />

        <TouchableOpacity style={styles.cardShadow}>
          <LinearGradient colors={[COLORS.deepGreen, COLORS.gold]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.featuredCard}>
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredLabel}>RECIPE OF THE DAY</Text>
              <Text style={styles.featuredTitle}>Dal Tadka</Text>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Protein-rich</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>25 min</Text></View>
              </View>
            </View>
            <UtensilsCrossed color="white" size={35} />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const MealItem = ({ title, sub, time, icon, accent }) => (
  <TouchableOpacity style={styles.mealItemContainer}>
    <LinearGradient colors={['#FFFFFF', '#FFFDF9']} style={[styles.mealItem, { borderLeftColor: accent }]}>
      <View style={[styles.iconBox, { shadowColor: accent }]}>{icon}</View>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={[styles.itemSub, { color: accent }]}>{sub}</Text>
        <View style={styles.itemMeta}>
          <Timer size={12} color="#8E8E93" />
          <Text style={styles.metaText}>{time} PREP</Text>
        </View>
      </View>
      <ChevronRight color="#C7C7CC" size={20} />
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: 'transparent' },
  headerContainer: { marginTop: 40, marginBottom: 20, alignItems: 'center', height: 100, justifyContent: 'center' },
  header: { fontSize: 32, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif' },
  subHeader: { fontSize: 8, color: COLORS.gold, fontWeight: 'bold', letterSpacing: 2, fontFamily: 'monospace', marginTop: 5 },
  mandalaWrapper: { position: 'absolute', zIndex: -1, justifyContent: 'center', alignItems: 'center' },
  
  premiumHeaderContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 35 },
  headerTextWrapper: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
  goldLine: { flex: 1, height: 1, backgroundColor: 'rgba(181, 166, 66, 0.3)' },
  premiumHeaderText: { fontSize: 10, fontWeight: '700', color: COLORS.gold, letterSpacing: 6, textTransform: 'uppercase', fontFamily: 'serif' },
  refreshButton: { marginLeft: 10, backgroundColor: 'rgba(181, 166, 66, 0.1)', padding: 6, borderRadius: 50, borderWidth: 1, borderColor: 'rgba(181, 166, 66, 0.2)' },

  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  tab: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', marginRight: 8, elevation: 2 },
  activeTab: { backgroundColor: COLORS.junoonDark },
  tabText: { fontSize: 11, fontWeight: '500', color: '#7A7A7A', letterSpacing: 1 },
  activeTabText: { color: 'white' },

  featuredCard: { borderRadius: 28, padding: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  featuredLabel: { color: 'white', fontSize: 9, fontWeight: 'bold', letterSpacing: 3 },
  featuredTitle: { color: 'white', fontSize: 24, fontWeight: '300', fontFamily: 'serif', marginTop: 5 },
  
  mealItemContainer: { marginBottom: 18, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 15, elevation: 8 },
  mealItem: { borderRadius: 30, padding: 22, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.03)', borderLeftWidth: 6 },
  itemTitle: { fontSize: 18, fontWeight: '300', color: COLORS.junoonDark, fontFamily: 'serif' },
  itemSub: { fontSize: 8.5, marginTop: 7, fontWeight: '700', letterSpacing: 1.5, fontFamily: 'monospace' },
  itemMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  metaText: { fontSize: 10, color: '#8E8E93', fontWeight: 'bold', marginLeft: 6, textTransform: 'uppercase' },
  
  iconBox: { width: 58, height: 58, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: 18, elevation: 4, shadowOpacity: 0.1 },
  itemContent: { flex: 1 },
  tagRow: { flexDirection: 'row', marginTop: 15 },
  tag: { backgroundColor: 'rgba(255,255,255,0.2)', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, marginRight: 8 },
  tagText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  cardShadow: { elevation: 12, shadowColor: COLORS.gold, shadowOpacity: 0.25, shadowRadius: 15, marginBottom: 10 }
});
