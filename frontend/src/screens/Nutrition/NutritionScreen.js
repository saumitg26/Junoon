import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { RefreshCcw, Leaf, Zap } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  leaf: '#556B2F', // Forest Green for Nutrition
};

const NutritionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Meal Plan</Text>

      {/* Suggested Meal - Requirement [cite: 20] */}
      <View style={styles.featuredCard}>
        <View style={styles.tag}><Text style={styles.tagText}>SUGGESTED FOR YOU</Text></View>
        <Text style={styles.mealName}>Paneer Tikka with Roti & Dal</Text>
        <Text style={styles.macros}>450 Cal • 25g Protein • 50g Carbs</Text>
        
        {/* Swap Button - Requirement [cite: 21] */}
        <TouchableOpacity style={styles.swapBtn} onPress={() => alert('AI Finding Alternatives...')}>
          <RefreshCcw color="white" size={18} />
          <Text style={styles.swapBtnText}>Switch Meal</Text>
        </TouchableOpacity>
      </View>

      {/* Supplements Section - Requirement [cite: 21] */}
      <Text style={styles.sectionTitle}>Supplements</Text>
      <View style={styles.suppCard}>
        <Zap color={COLORS.saffron} size={20} />
        <Text style={styles.suppText}>Ashwagandha (500mg) - Take with water</Text>
      </View>

      {/* AI Generated Grid - Requirement [cite: 20] */}
      <Text style={styles.sectionTitle}>South Asian Favorites</Text>
      <View style={styles.grid}>
        <RecipeBox title="Chana Masala" cal="320" />
        <RecipeBox title="Chicken Curry" cal="410" />
      </View>
    </ScrollView>
  );
};

const RecipeBox = ({ title, cal }) => (
  <TouchableOpacity style={styles.smallCard}>
    <Leaf color={COLORS.leaf} size={16} />
    <Text style={styles.recipeTitle}>{title}</Text>
    <Text style={styles.recipeCal}>{cal} Cal</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: COLORS.earth, marginBottom: 20 },
  featuredCard: { backgroundColor: 'white', padding: 20, borderRadius: 20, elevation: 4 },
  tag: { backgroundColor: COLORS.leaf, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5, alignSelf: 'flex-start', marginBottom: 10 },
  tagText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  mealName: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  macros: { color: '#666', marginBottom: 20 },
  swapBtn: { backgroundColor: COLORS.saffron, flexDirection: 'row', padding: 15, borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10 },
  swapBtnText: { color: 'white', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 25, marginBottom: 15 },
  suppCard: { backgroundColor: 'white', padding: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 12 },
  grid: { flexDirection: 'row', justifyContent: 'space-between' },
  smallCard: { backgroundColor: 'white', width: '48%', padding: 15, borderRadius: 15, alignItems: 'center' },
  recipeTitle: { fontWeight: 'bold', marginTop: 5 },
  recipeCal: { fontSize: 12, color: '#666' }
});

export default NutritionScreen;
