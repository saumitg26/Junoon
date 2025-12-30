import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  white: '#FFFFFF',
  muted: '#7A7A7A'
};

const OnboardingScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({
    goal: '',
    diet: '',
    equipment: ''
  });

  const questions = [
    {
      id: 'goal',
      title: "What is your primary goal?",
      options: ["Weight Loss", "Muscle Gain", "Mindfulness", "Flexibility"]
    },
    {
      id: 'diet',
      title: "Dietary Preference",
      options: ["Vegetarian", "Non-Vegetarian", "Vegan", "Jain-friendly"]
    },
    {
      id: 'equipment',
      title: "Available Equipment",
      options: ["Full Gym", "Dumbbells Only", "Resistance Bands", "No Equipment"]
    }
  ];

  const handleNext = (option) => {
    const currentId = questions[step].id;
    setSelections({ ...selections, [currentId]: option });
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Per Rundown: After questionnaire, present payment then login
      alert("Moving to Payment & Login Creation");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Progress Bar */}
      <View style={styles.progressRow}>
        <View style={[styles.bar, { width: `${((step + 1) / questions.length) * 100}%` }]} />
      </View>

      <View style={styles.container}>
        {step > 0 && (
          <TouchableOpacity onPress={() => setStep(step - 1)} style={styles.backBtn}>
            <ChevronLeft color={COLORS.earth} size={24} />
          </TouchableOpacity>
        )}

        <Text style={styles.stepIndicator}>STEP {step + 1} OF {questions.length}</Text>
        <Text style={styles.questionTitle}>{questions[step].title}</Text>

        <View style={styles.optionsContainer}>
          {questions[step].options.map((option) => (
            <TouchableOpacity 
              key={option} 
              style={[
                styles.optionCard, 
                selections[questions[step].id] === option && styles.selectedCard
              ]}
              onPress={() => handleNext(option)}
            >
              <Text style={[
                styles.optionText,
                selections[questions[step].id] === option && styles.selectedText
              ]}>
                {option}
              </Text>
              {selections[questions[step].id] === option && (
                <Check color={COLORS.saffron} size={20} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  progressRow: { height: 6, backgroundColor: '#E0E0E0', width: '100%' },
  bar: { height: 6, backgroundColor: COLORS.saffron },
  container: { flex: 1, padding: 30, justifyContent: 'center' },
  backBtn: { position: 'absolute', top: 20, left: 20 },
  stepIndicator: { fontSize: 12, fontWeight: 'bold', color: COLORS.saffron, letterSpacing: 1, marginBottom: 10 },
  questionTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.earth, marginBottom: 40 },
  optionsContainer: { width: '100%' },
  optionCard: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    elevation: 2
  },
  selectedCard: { borderColor: COLORS.saffron, backgroundColor: '#FFF5F0' },
  optionText: { fontSize: 16, fontWeight: '600', color: '#2D2D2D' },
  selectedText: { color: COLORS.saffron }
});

export default OnboardingScreen;
