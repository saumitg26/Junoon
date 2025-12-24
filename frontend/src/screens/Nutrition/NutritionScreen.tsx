import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

export default function NutritionScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Text style={styles.header}>Nutrition</Text>
      <Text style={styles.subheader}>
        Fuel your body the right way. Track meals, explore healthy recipes, and learn what your body needs.
      </Text>

      {/* Daily Summary Card */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Today’s Intake</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>1450</Text>
            <Text style={styles.summaryLabel}>Calories</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>98g</Text>
            <Text style={styles.summaryLabel}>Protein</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>160g</Text>
            <Text style={styles.summaryLabel}>Carbs</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Log Meal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Text style={styles.actionText}>Scan Food</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recommended Recipes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended Recipes</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {RECIPE_DATA.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.recipeCard}>
              <Image source={{ uri: item.image }} style={styles.recipeImg} />
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeCalories}>{item.calories} kcal</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Nutrition Tips */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tips</Text>
        {TIPS.map((t, i) => (
          <View key={i} style={styles.tipCard}>
            <Text style={styles.tipText}>{t}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const RECIPE_DATA = [
  { title: "High-Protein Bowl", calories: 480, image: "https://i.imgur.com/0ZQZ5cE.jpeg" },
  { title: "Avocado Toast", calories: 320, image: "https://i.imgur.com/n8eEJ9k.jpeg" },
  { title: "Chicken Meal Prep", calories: 520, image: "https://i.imgur.com/zg1kdTI.jpeg" },
];

const TIPS = [
  "Eat at least 0.7–1g of protein per lb of bodyweight.",
  "Avoid liquid calories unless it’s a shake.",
  "Aim for whole foods 80% of the time.",
  "Hydrate — 2–3 liters a day minimum."
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff", padding: 20 },

  header: { fontSize: 32, fontWeight: "700", marginBottom: 6 },
  subheader: { fontSize: 15, opacity: 0.6, marginBottom: 25 },

  summaryCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    padding: 20,
    marginBottom: 28
  },
  summaryTitle: { fontSize: 18, fontWeight: "600", marginBottom: 12 },
  summaryRow: { flexDirection: "row", justifyContent: "space-between" },
  summaryItem: { alignItems: "center" },
  summaryNumber: { fontSize: 22, fontWeight: "700" },
  summaryLabel: { fontSize: 13, opacity: 0.6 },

  section: { marginBottom: 28 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 14 },

  actionRow: { flexDirection: "row", gap: 12 },
  actionCard: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    padding: 18,
    borderRadius: 14,
    alignItems: "center"
  },
  actionText: { fontSize: 16, fontWeight: "600" },

  recipeCard: {
    width: 160,
    marginRight: 14,
    backgroundColor: "#F4F4F4",
    borderRadius: 14,
    paddingBottom: 12
  },
  recipeImg: { width: "100%", height: 100, borderTopLeftRadius: 14, borderTopRightRadius: 14 },
  recipeTitle: { paddingTop: 10, fontWeight: "600", paddingLeft: 10 },
  recipeCalories: { paddingLeft: 10, opacity: 0.6, fontSize: 12 },

  tipCard: {
    backgroundColor: "#FAFAFA",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },
  tipText: { fontSize: 14, opacity: 0.8 }
});

