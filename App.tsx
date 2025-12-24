import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screen(s)
import NutritionScreen from "./src/screens/Nutrition/NutritionScreen";

// Create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Nutrition"
        screenOptions={{
          headerShown: true, // change to false if you want no top bar
        }}
      >
        {/* Add your screens here */}
        <Stack.Screen 
          name="Nutrition" 
          component={NutritionScreen} 
          options={{ title: "Nutrition" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
