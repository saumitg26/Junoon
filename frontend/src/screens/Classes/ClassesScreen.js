import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Flat Boy } from 'react-native';
import { PlayCircle, Calendar, Filter, Clock, Users } from 'lucide-react-native';

const COLORS = {
  saffron: '#E97451',
  earth: '#8B4513',
  cream: '#FFF9F5',
  dark: '#1A1A1A', // Dark theme for the Live Schedule section
  muted: '#7A7A7A'
};

const ClassesScreen = () => {
  const [showLive, setShowLive] = useState(false);

  // Pre-recorded Categories [cite: 23, 24]
  const categories = [
    { id: '1', name: 'Cardio', icon: 'zap' },
    { id: '2', name: 'Yoga', icon: 'pulao' },
    { id: '3', name: 'Meditation', icon: 'moon' },
    { id: '4', name: 'Breathing', icon: 'wind' },
    { id: '5', name: 'Weight Training', icon: 'dumbbell' }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Classes</Text>

        {/* 1. Pre-recorded Library Section [cite: 23, 24, 66] */}
        <Text style={styles.sectionLabel}>Library</Text>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryBtn}>
              <PlayCircle color={COLORS.saffron} size={20} />
              <Text style={styles.categoryBtnText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 2. Live Class Schedule Button [cite: 25, 26, 67] */}
        <TouchableOpacity 
          style={styles.liveToggleBtn} 
          onPress={() => setShowLive(!showLive)}
        >
          <Calendar color="white" size={20} />
          <Text style={styles.liveToggleText}>View Live Class Schedule</Text>
        </TouchableOpacity>

        {/* 3. Lifetime Fitness Style Schedule  */}
        {showLive && (
          <View style={styles.liveScheduleContainer}>
            <View style={styles.scheduleHeader}>
              <Text style={styles.monthText}>September</Text>
              <Filter color={COLORS.saffron} size={20} />
            </View>

            {/* Date Picker Strip [cite: 30, 33, 34] */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateStrip}>
              {[21, 22, 23, 24, 25, 26, 27].map((day) => (
                <View key={day} style={day === 24 ? styles.activeDay : styles.inactiveDay}>
                  <Text style={day === 24 ? styles.activeDayText : styles.dayText}>{day}</Text>
                </View>
              ))}
            </ScrollView>

            {/* Live Class Entries [cite: 35, 37, 39] */}
            <LiveClassItem 
              time="6:00 PM" 
              duration="45 min" 
              title="Hatha Yoga: Sun Salutations" 
              instructor="with Arjav" 
            />
            <LiveClassItem 
              time="7:30 PM" 
              duration="30 min" 
              title="Group Pranayama Meditation" 
              instructor="with Meera" 
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const LiveClassItem = ({ time, duration, title, instructor }) => (
  <View style={styles.classEntry}>
    <View style={styles.timeCol}>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.durationText}>{duration}</Text>
    </View>
    <View style={styles.detailsCol}>
      <Text style={styles.classTitle}>{title}</Text>
      <Text style={styles.instructorText}>{instructor}</Text>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.cream },
  container: { padding: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: COLORS.earth, marginBottom: 20 },
  sectionLabel: { fontSize: 18, fontWeight: '700', marginBottom: 15 },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  categoryBtn: { 
    width: '48%', backgroundColor: 'white', padding: 15, borderRadius: 12, 
    flexDirection: 'row', alignItems: 'center', marginBottom: 12, elevation: 2 
  },
  categoryBtnText: { marginLeft: 10, fontWeight: '600', color: COLORS.earth },
  liveToggleBtn: { 
    backgroundColor: COLORS.earth, flexDirection: 'row', padding: 18, 
    borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 20 
  },
  liveToggleText: { color: 'white', fontWeight: 'bold', marginLeft: 10 },
  liveScheduleContainer: { backgroundColor: COLORS.dark, borderRadius: 20, padding: 20, marginBottom: 30 },
  scheduleHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  monthText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  dateStrip: { flexDirection: 'row', marginBottom: 25 },
  inactiveDay: { padding: 10, alignItems: 'center', width: 45 },
  activeDay: { backgroundColor: COLORS.saffron, borderRadius: 25, padding: 10, alignItems: 'center', width: 45 },
  dayText: { color: '#888' },
  activeDayText: { color: 'white', fontWeight: 'bold' },
  classEntry: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#333', paddingVertical: 20 },
  timeCol: { width: '25%' },
  timeText: { color: 'white', fontWeight: 'bold' },
  durationText: { color: '#666', fontSize: 12 },
  detailsCol: { width: '75%', paddingLeft: 15, borderLeftWidth: 2, borderLeftColor: COLORS.saffron },
  classTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
  instructorText: { color: COLORS.saffron, fontSize: 13, marginTop: 4 },
  registerBtn: { marginTop: 10, alignSelf: 'flex-start' },
  registerText: { color: '#4A90E2', fontWeight: 'bold' }
});

export default ClassesScreen;
