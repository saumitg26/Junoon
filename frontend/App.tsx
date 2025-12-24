import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./src/screens/Home/HomeScreen";
import WorkoutScreen from "./src/screens/Workout/WorkoutScreen";
import NutritionScreen from "./src/screens/Nutrition/NutritionScreen";

// Placeholder Profile Screen
import { View, Text, StyleSheet } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Profile / Subscription / Settings</Text>
    </View>
  );
}

// Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "600" },
});
