import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export default function NutritionScreen() {
  const [selectedMeal, setSelectedMeal] = useState<MealType>("Breakfast");

  // Sample data
  const SUGGESTED_MEAL = {
    title: "Paneer Bhurji with Roti",
    calories: 450,
    image: "https://i.imgur.com/0ZQZ5cE.jpeg",
    description: "High protein, traditional Indian meal to fuel your morning.",
  };

  const FEATURED_RECIPES = [
    { title: "Masala Oats", calories: 300, image: "https://i.imgur.com/n8eEJ9k.jpeg" },
    { title: "Chicken Curry", calories: 520, image: "https://i.imgur.com/zg1kdTI.jpeg" },
    { title: "Vegetable Pulao", calories: 400, image: "https://i.imgur.com/0ZQZ5cE.jpeg" },
  ];

  const SUPPLEMENTS = [
    "Whey Protein - 25g",
    "Vitamin D - 1000 IU",
    "Omega-3 - 1 capsule",
  ];

  const MEAL_TYPES: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Text style={styles.header}>Nutrition</Text>
      <Text style={styles.subheader}>
        Track your meals, explore recipes, and fuel your body the right way.
      </Text>

      {/* Meal Switcher */}
      <View style={styles.mealSwitcher}>
        {MEAL_TYPES.map((meal) => (
          <TouchableOpacity
            key={meal}
            style={[
              styles.mealButton,
              selectedMeal === meal && styles.mealButtonActive,
            ]}
            onPress={() => setSelectedMeal(meal)}
          >
            <Text
              style={[
                styles.mealButtonText,
                selectedMeal === meal && styles.mealButtonTextActive,
              ]}
            >
              {meal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Suggested Meal */}
      <View style={styles.suggestedCard}>
        <Text style={styles.cardTitle}>Suggested {selectedMeal}</Text>
        <Image source={{ uri: SUGGESTED_MEAL.image }} style={styles.suggestedImg} />
        <Text style={styles.mealName}>{SUGGESTED_MEAL.title}</Text>
        <Text style={styles.mealDesc}>{SUGGESTED_MEAL.description}</Text>
        <Text style={styles.mealCalories}>{SUGGESTED_MEAL.calories} kcal</Text>
      </View>

      {/* Featured Recipes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Recipes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {FEATURED_RECIPES.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.recipeCard}>
              <Image source={{ uri: item.image }} style={styles.recipeImg} />
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.recipeCalories}>{item.calories} kcal</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Supplements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Supplements</Text>
        {SUPPLEMENTS.map((s, i) => (
          <View key={i} style={styles.supplementCard}>
            <Text style={styles.supplementText}>{s}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff", padding: 20 },

  header: { fontSize: 32, fontWeight: "700", marginBottom: 6 },
  subheader: { fontSize: 15, opacity: 0.6, marginBottom: 20 },

  mealSwitcher: { flexDirection: "row", marginBottom: 20, justifyContent: "space-between" },
  mealButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
  },
  mealButtonActive: { backgroundColor: "#4A90E2" },
  mealButtonText: { fontSize: 14, fontWeight: "600", color: "#333" },
  mealButtonTextActive: { color: "#fff" },

  suggestedCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    padding: 16,
    marginBottom: 28,
  },
  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  suggestedImg: { width: "100%", height: 150, borderRadius: 12, marginBottom: 12 },
  mealName: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  mealDesc: { fontSize: 13, opacity: 0.7, marginBottom: 4 },
  mealCalories: { fontSize: 12, opacity: 0.6 },

  section: { marginBottom: 28 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 14 },

  recipeCard: {
    width: 160,
    marginRight: 14,
    backgroundColor: "#F4F4F4",
    borderRadius: 14,
    paddingBottom: 12,
  },
  recipeImg: { width: "100%", height: 100, borderTopLeftRadius: 14, borderTopRightRadius: 14 },
  recipeTitle: { paddingTop: 10, fontWeight: "600", paddingLeft: 10 },
  recipeCalories: { paddingLeft: 10, opacity: 0.6, fontSize: 12 },

  supplementCard: {
    backgroundColor: "#FAFAFA",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  supplementText: { fontSize: 14, opacity: 0.8 },
});
